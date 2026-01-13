var Cart = {
    deliveryPrice: 0,
    deliveryType: null,
    deliveryDetails: {},
    get: function(session_id) {
        try {
            if (session_id) {
                return JSON.parse(localStorage.getItem(`cart_${session_id}`)) || {};
            } else {
                return JSON.parse(localStorage.getItem('cart')) || {};
            }
        } catch {
            return {};
        }
    },
    set: function(cart) {
        localStorage['cart'] = JSON.stringify(cart)
        Cart.render()
    },
    clear: function() {
        localStorage.removeItem('cart')
    },
    add: function(item, quantity = 1) {
        const cart = Cart.get()
        const id = `${item.id}/${item.colour}/${item.size}`
        if (id in cart) {
            cart[id].quantity += quantity
        } else {
            cart[id] = {
                item: item,
                quantity: quantity
            }
        }
        Cart.set(cart)
    },
    shelve: function(session_id) {
        localStorage[`cart_${session_id}`] = JSON.stringify(Cart.get())
        Cart.clear()
    },
    update: function(id, quantity = 1) {
        let cart = Cart.get()
        if (id in cart) {
            if (quantity > 0) {
                cart[id].quantity = quantity
            } else {
                delete cart[id]
            }
            Cart.set(cart)
        }
    },
    remove: function(id) {
        let cart = Cart.get()
        if (id in cart) {
            delete cart[id]
            Cart.set(cart)
        }
    },
    subtotal: function() {
        const cart = Cart.get()
        return total = Object.values(cart).reduce(
            (sum, item) => sum + item.quantity * item.item.price,
            0
        )
    },
    total: function() {
        return Cart.subtotal() + Cart.deliveryPrice
    },
    calculateDeliveryPrice: function(tiers) {
        const cart = Cart.get()
        let minTotalWeight = 0
        let totalWeight = Object.values(cart).reduce((sum, entry) => {
            const item = entry.item || {}
            const minWeight = parseFloat(item.minshippingweight)
            const weight = parseFloat(item.shippingweight)
            if (typeof minWeight === "number" && !Number.isNaN(minWeight)) {
                minTotalWeight = Math.max(minTotalWeight, minWeight)
            }
            if (typeof weight === "number" && !Number.isNaN(weight)) {
                return sum + weight * entry.quantity
            }
            return sum
        }, 0)
        totalWeight = Math.max(totalWeight, minTotalWeight)

        const selectedTier = tiers.find(tier => {
            const maxWeight = parseFloat(tier.max_weight)
            return typeof maxWeight === "number" && !Number.isNaN(maxWeight) && totalWeight <= maxWeight
        })

        if (!selectedTier) {
            return null
        }

        const price = parseFloat(selectedTier.price)
        if (typeof price !== "number" || Number.isNaN(price)) {
            return null
        }

        return Math.floor(price * 100)
    },
    empty: function() {
        return Object.keys(Cart.get()).length == 0
    },

    render: function() {
        const cart = Cart.get()

        Cart.renderBadge(cart)
        Cart.renderCart(cart)
    },

    renderBadge: function(cart) {
        const badge = document.querySelector(".cart .cart-items-count")
        if (badge) {
            const item_count = Object.values(cart).reduce(
                (sum, item) => sum + item.quantity,
                0
            )
            badge.innerHTML = item_count || ""
        }
    },
    renderCart: function(cart) {
        const cart_summary = document.querySelector('#cart-summary')
        if (cart_summary) {
            const template = document.querySelector('#cart-summary-template[type="text/template"]')
            const engine = new liquidjs.Liquid({
              outputDelimiterLeft: '[=',
              outputDelimiterRight: '=]',
              tagDelimiterLeft: '[[',
              tagDelimiterRight: ']]',
            })

            const items = Object.values(cart).map(item => ({
                id: item.item.id,
                price: Cart.currencyFormat.format(item.item.price / 100),
                quantity: item.quantity,
                subtotal: Cart.currencyFormat.format(item.item.price / 100 * item.quantity),
                name: item.item.name,
                description: item.item.description,
                url: item.item.url,
                image: item.item.image,
                instock: item.item.instock,
                colour: item.item.colour ? item.item.colour : null,
                colour_label: item.item.colour_label,
                size: item.item.size ? item.item.size : null,
                options: Object.fromEntries(
                    Object.entries(item.item)
                        .filter(x => x[0].startsWith("option_"))
                        .map(x => [x[0].replace("option_", ""), x[1]])
                        .filter(x => x[0] != "size")
                ),
            }))

            return engine
                .parseAndRender(template.innerHTML, {
                    items: items,
                    deliveryPrice: Cart.currencyFormat.format(Cart.deliveryPrice / 100),
                    subtotal: Cart.currencyFormat.format(Cart.subtotal() / 100),
                    total: Cart.currencyFormat.format(Cart.total() / 100),
                })
                .then(html => cart_summary.innerHTML = html)

        }
    },
    setHandlers: function() {
        const buttons = document.querySelectorAll(".cart-add-item")
        for (const button of buttons) {
            button.onclick = function(e) {
                const item = e.target.dataset
                let cartitem = {}
                for (const key in item) {
                    if (key.startsWith("item")) {
                        const name = key.replace("item", "").toLowerCase()
                        cartitem[name] = item[key]
                    }
                }
                cartitem["price"] = Math.floor(parseFloat(cartitem["price"]) * 100)
                Cart.add(cartitem)
            }
        }
    }
}

Cart.currencyFormat = (function(Cart) {
    Cart.currency = 'EUR'
    const cartCurrency = document.querySelector("[data-cart-currency]")
    let precision = 2
    if (cartCurrency) {
        Cart.currency = cartCurrency.dataset.cartCurrency
        if ("cartCurrencyPrecision" in cartCurrency.dataset) {
            precision = cartCurrency.dataset.cartCurrencyPrecision
        }
    }
    return new Intl.NumberFormat(
        document.documentElement.lang, {
            style: 'currency',
            maximumFractionDigits: precision,
            currency: Cart.currency
        }
    )

})(Cart)
Cart.setHandlers()
Cart.render()
