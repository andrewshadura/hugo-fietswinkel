// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });


  // video modal popup
  var $videoSrc;
  $('.video-modal').click(function () {
    $videoSrc = $(this).data("src");
  });
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })
  $('#videoModal2').on('shown.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal2').on('hide.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc);
  })


  // testimonial slider
  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  // product Slider
  $('.product-slider').slick({
    autoplay: false,
    infinite: false,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '">';
    }
  });

  function getImagesForColour(colour_id, colour_prefix) {
    if (!colour_images || !colour_id) {
      return []
    }

    const prefix = colour_prefix || ''
    const base_path = window.location.pathname.replace(/\/$/, '') + "/colours/" + prefix + colour_id

    // Find all images matching this color
    const matching_images = []

    // Check for main image
    const main_image = base_path + ".jpg"
    if (colour_images.indexOf(main_image) >= 0) {
      matching_images.push(main_image)
    }

    // Check for numbered images (_2, _3, _4, etc.)
    for (let i = 2; i <= 20; i++) {
      const numbered_image = base_path + "_" + i + ".jpg"
      if (colour_images.indexOf(numbered_image) >= 0) {
        matching_images.push(numbered_image)
      } else {
        // Stop searching once we hit a gap
        break
      }
    }

    return matching_images
  }

  let originalSlideImages = null

  function updateSliderImages(images) {
    const $slider = $('.product-slider')

    // Capture the original slide images once, before any colour-switching modifies the slider
    if (originalSlideImages === null) {
      originalSlideImages = []
      $slider.find('.slick-track .slick-slide:not(.slick-cloned)').each(function() {
        originalSlideImages.push($(this).data('image'))
      })
    }

    const origCount = originalSlideImages.length
    const curCount = $slider.find('.slick-track .slick-slide:not(.slick-cloned)').length

    // First N slots: colour images. Remaining slots: originals.
    // When colour has more images than origCount, extra slides are added.
    const targetImages = images.length <= origCount
      ? [...images, ...originalSlideImages.slice(images.length)]
      : images
    const targetCount = targetImages.length

    // Update existing slides
    for (let i = 0; i < Math.min(targetCount, curCount); i++) {
      const image = targetImages[i]
      $slider.find(`.slick-track .slick-slide:nth-child(${i + 1})`).attr("data-remote", image)
      $slider.find(`.slick-track .slick-slide:nth-child(${i + 1}) > img`).attr("src", image)
      $slider.find(`ul.slick-dots li:nth-child(${i + 1}) > img`).attr("src", image)
    }

    // Add extra slides when the colour has more images than the original slide count
    if (targetCount > curCount) {
      for (let i = curCount; i < targetCount; i++) {
        const image = targetImages[i]
        const slideHtml = `<div data-image="${image}" data-remote="${image}"><img class="img-fluid w-100" src="${image}" alt="product-image"></div>`
        $slider.slick('slickAdd', slideHtml)
      }
      // Slick renumbers slides after slickAdd, so sync all positions again
      for (let i = 0; i < targetCount; i++) {
        const image = targetImages[i]
        $slider.find(`.slick-track .slick-slide:nth-child(${i + 1})`).attr("data-remote", image)
        $slider.find(`.slick-track .slick-slide:nth-child(${i + 1}) > img`).attr("src", image)
        $slider.find(`ul.slick-dots li:nth-child(${i + 1}) > img`).attr("src", image)
      }
    }

    // Remove slides added by a previous colour selection that aren't needed now
    if (targetCount < curCount) {
      for (let i = curCount - 1; i >= targetCount; i--) {
        $slider.slick('slickRemove', i)
      }
    }
  }

  function recalculatePrice(e) {
    if (e && e.target.tagName.toLowerCase() == 'select') {
      const target = e.target.children[e.target.selectedIndex]
      if (target.dataset.href) {
        window.location = target.dataset.href
        return
      }
      if (target.dataset.includes) {
        const includes = JSON.parse(target.dataset.includes)
        for (const option in includes) {
          const selectedOption = $(`#${option}-select [value="${includes[option]}"]`)
          if (selectedOption.length) {
            selectedOption[0].selected = true
          }
        }
      }
    }

    let base_price = Math.round(parseFloat($(".p-price").attr("content")) * 100)

    let images = []
    let dataset_images = []

    let options = normaliseSelectedOptions(collectAllOptions())
    console.log(options)

    if ($.isEmptyObject(options)) {
      return
    }

    let variant = null

    let extras = $(".product-option :selected").map(function() {
      if (!this.dataset.name) {
        return 0
      }
      if (this.dataset.variant) {
        variant = this.dataset.variant
      }

      // Collect any dataset images for backward compatibility
      if (this.dataset.image) {
        dataset_images.push(this.dataset.image)
      }
      if (this.dataset.image2) {
        dataset_images.push(this.dataset.image2)
      }

      return options[this.dataset.name][this.value].price
      //return (parseFloat(this.dataset.price) * 100) | 0
    }).get().reduce((total, x) => total + x, 0)

    if (variant) {
      $(".p-variant-name").text(variant)
    }

    // Get all images for the selected color, or (when the product has no
    // colour swatches at all) for a plain option's own sku, paired with
    // its image-prefix: same colours/ folder, same numbered-suffix
    // lookup, just keyed by the option's sku instead of a colour id
    const selectedColours = $(".color-button.product-option:checked")
    if (selectedColours.length && typeof colour_images !== 'undefined') {
      const colour_id = selectedColours[0].id.replace("colour-", "")
      const colour_prefixes = Object.values(collectOptionArgs("colourPrefix")).filter((x) => x)

      // Try each prefix until we find images
      for (const prefix of colour_prefixes.concat([''])) {
        const found_images = getImagesForColour(colour_id, prefix)
        if (found_images.length > 0) {
          images = found_images
          break
        }
      }
    } else if (typeof colour_images !== 'undefined') {
      const option_sku = getSelectedOptionSku()
      if (option_sku) {
        const image_prefixes = getSelectedOptionImagePrefixes()

        for (const prefix of image_prefixes.concat([''])) {
          const found_images = getImagesForColour(option_sku, prefix)
          if (found_images.length > 0) {
            images = found_images
            break
          }
        }
      }
    }

    // Use dataset images if we found any (backward compatibility)
    if (dataset_images.length > 0) {
      images = dataset_images
    }

    // Update slider with the images
    updateSliderImages(images)

    let price = base_price + extras

    let formatted_price = Cart.currencyFormat.format(price / 100)
    $(".p-price").text(formatted_price)
    const $button = $("#cart-primary-button")
    $button.attr("data-item-price", price / 100)
    $button.attr("data-item-image", $(".product-slider .slick-track .slick-slide:first-child > img")[0].src)
    let colour = getSelectedColour()
    $button.attr("data-item-colour", colour)
    $button.attr("data-item-colour_label", getSelectedColourLabel())
    options = collectOptions()
    for (const i in options) {
      const urlized = i.replaceAll(" ", "-")
      $button.attr(`data-item-option_${urlized}`, options[i])
    }
    // The per-key attributes above lose their original label (browsers
    // ASCII-lowercase attribute names and the dataset accessor merges
    // hyphens), so also carry the untouched {label: value} map through as
    // one JSON blob for display purposes. Deliberately not named
    // "option_..." so it can't be mistaken for one of the options above.
    $button.attr("data-item-selected-options", JSON.stringify(options))
    if (e && colour) {
      window.history.replaceState(null, "", `${window.location.pathname}?colour=${colour}`)
    }
    updateSku()
  }

  function getSelectedColour() {
    return ($(".color-button.product-option:checked, a.color-button.active").attr("id") || "").replace("colour-", "")
  }

  function getSelectedColourLabel() {
    return ($(".color-button.product-option:checked, a.color-button.active").attr("title") || "")
  }

  function getSelectedColourSkuArg() {
    return ($(".color-button.product-option:checked, a.color-button.active").attr("data-colour-sku-arg") || "")
  }

  function getSelectedColourSku() {
    return ($(".color-button.product-option:checked, a.color-button.active").attr("data-colour-sku") || "")
  }

  // A plain (non-colour) option can carry its own sku id, identifying a
  // genuinely distinct part rather than just a price modifier on the base
  // product. Unlike colour, this is a single value per page: only one
  // plain option group is expected to set it.
  function getSelectedOptionSku() {
    return $(".product-option-select :selected").map(function() {
      return this.dataset.sku
    }).get().filter((x) => x)[0] || ""
  }

  function getSelectedOptionImagePrefixes() {
    return $(".product-option-select :selected").map(function() {
      return this.dataset.imagePrefix
    }).get().filter((x) => x)
  }

  function collectOptionArgs(arg) {
    return Object.fromEntries($(".product-option :selected, .product-option :checked").get().map(function(e) {
      return [e.dataset.name || e.name, e.dataset[arg]]
    }))
  }

  function collectOptions() {
    return $(".product-option :selected, .product-option :checked").map(function() {
      let scratch = {}
      // data-name-label is the same display label the variants-box heading uses
      scratch[this.dataset.nameLabel || this.dataset.name || this.name] = this.value
      return scratch
    }).get().reduce((total, x) => Object.assign(total, x), {})
  }

  function collectSelectedOptions() {
    return $(".product-option :selected, .product-option :checked").map(function() {
      let scratch = {}
      const name = this.dataset.name || this.name
      scratch[name] = Object.assign({}, this.dataset)
      if (this.dataset.price) {
        scratch[name].price = (parseFloat(this.dataset.price) * 100) | 0
      }
      if (this.dataset.includes) {
        scratch[name].includes = JSON.parse(this.dataset.includes)
      }
      scratch[name].value = this.value
      return scratch
    }).get().reduce((total, x) => Object.assign(total, x), {})
  }

  function collectAllOptions() {
    let scratch = {}
    for (const option of $(".product-option.product-option-radio, .product-option option")) {
      const name = option.dataset.name || option.name
      scratch[name] ||= {}
      scratch[name][option.value] = Object.assign({}, option.dataset)
      if (option.dataset.price) {
        scratch[name][option.value].price = (parseFloat(option.dataset.price) * 100) | 0
      }
      if (option.dataset.includes) {
        scratch[name][option.value].includes = JSON.parse(option.dataset.includes)
      }
      scratch[name][option.value].value = option.value
    }
    return scratch
  }

  function normaliseSelectedOptions(options) {
    const selectedOptions = collectSelectedOptions()
    for (const selected in selectedOptions) {
      const value = selectedOptions[selected].value
      const option = options[selected][value]
      if (option.includes) {
        for (const i in option.includes) {
          const selectedInclude = option.includes[i]
          const selectedIncludePrice = options[i][selectedInclude].price
          console.log(`decreasing prices of ${i} by ${selectedIncludePrice/100} as ${selectedInclude} included in ${selected} ${value}`)
          for (const o in options[i]) {
            const price = options[i][o].price - selectedIncludePrice
            const priceText = Cart.currencyFormat.format(Math.abs(price / 100))
            const priceSign = (price > 0) ? '+' : '−'
            const label = (price == 0) ? options[i][o].label : `${options[i][o].label} (${priceSign}${priceText})`
            options[i][o].price = price
            const urlized = i.replaceAll(" ", "-")
            $(`#${urlized}-select [value="${options[i][o].value}"]`).text(label)
          }
        }
      }
    }
    return options
  }

  window.collectSelectedOptions = collectSelectedOptions
  window.collectAllOptions = collectAllOptions
  window.normaliseSelectedOptions = normaliseSelectedOptions

  function updateSku() {
    const orig_sku = $("[itemprop='orig-sku']")[0]
    const selected_size = $('.btn-group .btn-sizes input[type="radio"]:checked')[0] || $('.btn-group .btn-sizes input[type="radio"]')[0]

    if (orig_sku) {
      const sku = orig_sku.content
      let new_sku = sku

      const colour_sku = getSelectedColourSku()
      if (colour_sku) {
        new_sku = colour_sku
      }
      // A plain option's own sku is more specific than the colour, so it wins if both are set.
      const option_sku = getSelectedOptionSku()
      if (option_sku) {
        new_sku = option_sku
      }
      if (selected_size) {
        new_sku = new_sku.replace("{size}", selected_size.dataset.sizeId)
        $("#cart-primary-button").attr("data-item-size", selected_size.dataset.size)
        $("#cart-primary-button").attr("data-item-size-id", selected_size.dataset.sizeId)
      }
      if (sku.indexOf("{colour}") >= 0) {
        new_sku = new_sku.replace("{colour}", getSelectedColourSkuArg())
      }
      for (const e of $(".sku")) {
        if (e.content) {
          e.content = new_sku
        } else if (e.value) {
          e.value = new_sku
        } else if (e.innerText) {
          e.innerText = new_sku
        }
      }
      $("#cart-primary-button").attr("data-item-id", new_sku)
    }
  }

  $('.btn-sizes.product-option').on('change', updateSku);

  $('.product-option').on('change', recalculatePrice);

  (function(){
    const params = new URLSearchParams(window.location.search)
    const colour = params.get("colour")
    if (colour) {
      const colour_button = $("#colour-" + colour)[0]
      if (colour_button) {
        colour_button.checked = true
      }
    }
    let options = collectAllOptions()
    delete options.colour

    const size = params.get("size")
    if (size) {
      const selectedOption = $(`.btn-sizes input[data-size="${size.replace('"', '\\"')}"`)
      if (selectedOption.length) {
        selectedOption[0].selected = true
        selectedOption[0].parentElement.classList.add('active')
      }
      delete options.size
    }

    for (const option in options) {
      const urlized = option.replaceAll(" ", "-")
      const value = params.get(urlized)
      if (value) {
        const selectedOption = $(`#${urlized}-select [value="${value}"],
            #${urlized}-select [data-variant="${value}"],
            #${urlized}-select [data-option-id="${value}"],
            #${urlized}-select [data-sku="${value}"]
`)
        if (selectedOption.length) {
          selectedOption[0].selected = true
        }
      }
    }
    updateSku()
  })()

  recalculatePrice()

  $('.contact-modal').on('shown.bs.modal', function (e) {
    const colour = getSelectedColour()
    const options = collectOptions()
    console.log(options)
    $('.contact-modal form [name="item-colour"]').val(colour)
    $('.contact-modal form [name="item-size"]').val(options.size)
    $('.contact-modal form [name="item-options"]').val(JSON.stringify(options))
  })

  $('.btn-group .btn input[type="radio"]:checked').each(function(i, el) {
    el.labels[0].classList.add('active')
  })


  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox({
                    alwaysShowClose: true,
                });
            })

})(jQuery);
