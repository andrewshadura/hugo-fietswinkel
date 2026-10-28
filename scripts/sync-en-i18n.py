#!/usr/bin/env python3
"""Add keys present in other i18n/*.yaml files but missing from i18n/en.yaml.

Keys are English labels, so a plain key gets itself as its English text:

    Add to cart: Add to cart

Keys that need real English are reported instead and must be added by
hand: plural forms, templates ({{ .Count }}), and identifiers such as
"request-order-description-text" or "Book a test (title)".

Usage: scripts/sync-en-i18n.py [--check]
  --check  only report missing keys; exit 1 if there are any
"""
import re
import sys
from pathlib import Path

import yaml

i18n_dir = Path(__file__).resolve().parent.parent / "i18n"
en_yaml = i18n_dir / "en.yaml"


def load(path):
    return yaml.safe_load(path.read_text(encoding="utf-8")) or {}


def forms(value):
    """Plural forms of an entry; "key: text" is short for "other: text"."""
    return value if isinstance(value, dict) else {"other": value}


def needs_translation(key, values):
    """True if the key itself can't serve as its English text."""
    if re.fullmatch(r"[a-z0-9-]+", key) or "(" in key or ": " in key:
        return True
    return any(
        set(forms(v)) != {"other"} or "{{" in forms(v)["other"] for v in values
    )


def main():
    check = "--check" in sys.argv[1:]
    en = load(en_yaml)
    others = [
        load(p) for p in sorted(i18n_dir.glob("*.yaml")) if p != en_yaml
    ]

    missing = {}
    for strings in others:
        for key, value in strings.items():
            if key not in en:
                missing.setdefault(key, []).append(value)

    manual = [k for k, v in missing.items() if needs_translation(k, v)]
    plain = [k for k in missing if k not in manual]

    if check:
        for key in missing:
            print(f"missing: {key}")
        return 1 if missing else 0

    if plain:
        text = en_yaml.read_text(encoding="utf-8")
        if text and not text.endswith("\n"):
            text += "\n"
        for key in plain:
            text += yaml.safe_dump({key: key}, allow_unicode=True,
                                   sort_keys=False, width=1000)
        en_yaml.write_text(text, encoding="utf-8")
        print(f"added {len(plain)} key(s) to {en_yaml.name}")

    for key in manual:
        print(f"needs English text: {key}", file=sys.stderr)
    return 1 if manual else 0


if __name__ == "__main__":
    sys.exit(main())
