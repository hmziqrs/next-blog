#!/bin/bash

# Loop through and copy the file 20 times
for raw_file in ./*; do
  if [[ $raw_file =~ ".md" ]]; then
    file="$(basename "$raw_file")"
    file_name=${file%.*}
    mkdir $file_name
    cp $raw_file "$file_name/en.md"
  fi
done