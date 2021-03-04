#!/usr/bin/env bash

find . -type f \
    -not -path "./todo.sh" \
    -not -path "./.git/*" \
    -not -path "./.vscode/*" \
    -not -path "./.idea/*" \
    -not -path "./node_modules/*" \
    -not -path "./public/packs*" \
    -not -path "./public/zipper*" \
    -not -path "./public/fonts/*" \
    -not -path "./licenses/*" \
    -not -path "./log*" \
    -not -path "./tmp*" \
    -not -path "./images/*" \
    -not -path "./.next/*" \
    -not -path "./site/*" \
    -not -path "./out/*" \
    -exec grep -H -n -i "TODO" '{}' \;
