import os

file_path = "src/app/page.tsx"

with open(file_path, "r") as f:
    content = f.read()

replacements = {
    # Preventive Care
    "https://images.unsplash.com/photo-1559839734-2b71f1e59852?q=80&w=400": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070",
    
    # Cosmetic Dentistry
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400",
    
    # Orthodontics
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070",
    
    # Implants & Restorations
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400": "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=400",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070", # Wait, for smile makeover it was 1606811971618-4486d14f3f99
    
    # Full Mouth Rehab
    "https://images.unsplash.com/photo-1516539137713-7ee35ebfb524?q=80&w=2070": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2030",
    
    # Implants Bento
    "https://images.unsplash.com/photo-1559839734-2b71f1e59852?q=80&w=2070": "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070"
}

for old_url, new_url in replacements.items():
    content = content.replace(old_url, new_url)

with open(file_path, "w") as f:
    f.write(content)

print("Images reverted.")
