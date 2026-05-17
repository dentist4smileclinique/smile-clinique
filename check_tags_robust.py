import re

def check_tags(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Find all tags
    # This is a very rough regex but should catch most JSX tags
    tags = re.findall(r'<(div|section|motion\.div|footer|main|header|aside|nav)(?:\s+[^>]*?)?(>|/>)|</(div|section|motion\.div|footer|main|header|aside|nav)>', content)

    stack = []
    errors = []

    for i, match in enumerate(tags):
        opening_tag, self_closing, closing_tag = match
        
        if opening_tag:
            if self_closing == '>':
                stack.append((opening_tag, i))
            # self_closing '/>' doesn't push to stack
        elif closing_tag:
            if not stack:
                errors.append(f"Unexpected closing tag </{closing_tag}> at match index {i}")
            else:
                last_tag, last_idx = stack.pop()
                if last_tag != closing_tag:
                    errors.append(f"Mismatched tags: <{last_tag}> (match {last_idx}) closed by </{closing_tag}> (match {i})")

    for tag, idx in stack:
        errors.append(f"Unclosed tag <{tag}> at match index {idx}")

    if not errors:
        print("All tags are perfectly balanced!")
    else:
        for err in errors:
            print(err)
        print(f"Total unclosed tags: {len(stack)}")

if __name__ == "__main__":
    check_tags('src/app/page.tsx')
