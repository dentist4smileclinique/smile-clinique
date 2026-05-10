import re

with open('/home/catch/Desktop/newclinictemplate/src/app/page.tsx', 'r') as f:
    content = f.read()

# Simple regex for tags (excluding self-closing and comments)
# This is a bit naive but should help find the imbalance
open_tags = re.findall(r'<([a-zA-Z0-9]+)(?:\s+[^>]*[^/])?>', content)
close_tags = re.findall(r'</([a-zA-Z0-9]+)>', content)

tag_counts = {}
for tag in open_tags:
    tag_counts[tag] = tag_counts.get(tag, 0) + 1
for tag in close_tags:
    tag_counts[tag] = tag_counts.get(tag, 0) - 1

print("Tag Imbalance (Open - Closed):")
for tag, count in tag_counts.items():
    if count != 0:
        print(f"{tag}: {count}")

# More detailed line-by-line check for common tags
stack = []
lines = content.split('\n')
for i, line in enumerate(lines):
    # Find all tags in this line
    matches = re.finditer(r'</?([a-zA-Z0-9]+)(?:\s+[^>]*?)?/?>', line)
    for match in matches:
        full_tag = match.group(0)
        tag_name = match.group(1)
        
        if full_tag.startswith('<!--') or full_tag.endswith('-->'):
            continue
        if full_tag.endswith('/>'):
            continue
        if full_tag.startswith('</'):
            if stack and stack[-1][0] == tag_name:
                stack.pop()
            else:
                print(f"Mismatched close tag </{tag_name}> at line {i+1}")
        else:
            stack.append((tag_name, i+1))

print("\nUnclosed tags in stack:")
for tag, line in stack:
    print(f"<{tag}> opened at line {line}")
