#!/bin/bash

# Set the source and destination directories
src_dir="./"
dst_dir="./"

# Set the base filename and extension
filename="5-blog.md"
extension="md"

# Loop through and copy the file 20 times
for i in {1..20}
do
  # Generate the new filename
  new_filename="${filename%.*}-$i.${extension}"

  # Copy the file
  cp "$src_dir/$filename" "$dst_dir/$new_filename"
done
