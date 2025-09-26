#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Try to detect and fix text encoding of a target file by attempting several decodings
and rewriting as UTF-8 without BOM.
Usage:
    python fix_encoding.py "path/to/file.html"
"""
import sys
import os
from pathlib import Path

candidates = ['utf-8-sig', 'utf-8', 'gbk', 'cp936', 'latin-1']

def detect_and_fix(path):
    path = Path(path)
    if not path.exists():
        print(f"File not found: {path}")
        return 2
    raw = path.read_bytes()
    for enc in candidates:
        try:
            text = raw.decode(enc)
            # if decode succeeded, check for replacement character
            if '\uFFFD' in text:
                print(f"Decoded with {enc} but contains replacement characters U+FFFD")
            else:
                print(f"Decoded successfully with {enc}")
            # rewrite as UTF-8 without BOM
            path.write_text(text, encoding='utf-8')
            print(f"Wrote {path} as UTF-8 (no BOM)")
            return 0
        except Exception as e:
            # try next
            # print(f"Failed decode with {enc}: {e}")
            continue
    # fallback: decode latin1 and write utf-8
    try:
        text = raw.decode('latin-1')
        path.write_text(text, encoding='utf-8')
        print(f"Fallback: decoded as latin-1 and wrote {path} as UTF-8")
        return 0
    except Exception as e:
        print(f"All decoding attempts failed: {e}")
        return 3

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: fix_encoding.py <file>")
        sys.exit(1)
    sys.exit(detect_and_fix(sys.argv[1]))
