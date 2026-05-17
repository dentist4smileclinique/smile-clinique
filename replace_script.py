import re

path = '/home/catch/Desktop/newclinictemplate/src/app/page.tsx'
with open(path, 'r') as f:
    content = f.read()

# Define the definitive mapping for clinical accuracy
replacements = {
    # Orthodontics (Aligners)
    'photo-1588776814546-1ffcf47267a5': 'photo-1597764650291-f581457add51',
    # Implants
    'photo-1629909615184-74f495363b67': 'photo-1600170311833-c2cf5280ce49',
    # Full Mouth Rehab / Result
    'photo-1629909613654-28e377c37b09': 'photo-1516539137713-7ee35ebfb524',
    # Old Hero Poster
    'photo-1551288049-bebda4e38f71': 'photo-1606811971618-4486d14f3f99',
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(path, 'w') as f:
    f.write(content)

print("Replacement complete.")
