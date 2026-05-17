import sys

def check_jsx(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    div_stack = 0
    section_stack = 0
    curly_stack = 0
    
    for i, line in enumerate(lines):
        line_num = i + 1
        # Simple counting (not perfect for strings but helps)
        div_stack += line.count('<div')
        div_stack -= line.count('</div')
        div_stack -= line.count('/>') if '<div' in line else 0 # approximate
        
        section_stack += line.count('<section')
        section_stack -= line.count('</section')
        
        curly_stack += line.count('{')
        curly_stack -= line.count('}')
        
        if line_num >= 700 and line_num <= 900:
             # Print counts in the suspected area
             pass
    
    print(f"Total Div Balance: {div_stack}")
    print(f"Total Section Balance: {section_stack}")
    print(f"Total Curly Balance: {curly_stack}")

if __name__ == "__main__":
    check_jsx('src/app/page.tsx')
