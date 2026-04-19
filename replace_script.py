import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Global replace Nidhi Gupta to Nidhi Mehta
content = content.replace("Nidhi Gupta", "Nidhi Mehta")

# 2. Hero intro text
content = content.replace("Architects of the Perfect Smile.", "Premium Dental Care Centre.")

# 3. Manifesto update
manifesto_start = content.find('{/* Floating Images (Pixel-Perfect Placement from Reference) */}')
manifesto_end = content.find('{/* Centered Masterpiece Text */}')
if manifesto_start != -1 and manifesto_end != -1:
    new_manifesto_bg = """{/* Abstract Aesthetic Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-aura-gold/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-aura-mint/30 rounded-full blur-[120px]" />
          </div>
          
          {/* Aesthetic Stickers / Accents */}
          <motion.div 
             style={{ y: useTransform(heroProgress, [0.3, 0.8], [0, -80]) }}
             className="absolute top-[20%] left-[10%] opacity-60 hidden md:block"
          >
             <div className="font-display text-[9px] uppercase tracking-[0.4em] rotate-[-90deg] text-aura-black">Art & Science</div>
          </motion.div>
          <motion.div 
             style={{ y: useTransform(heroProgress, [0.5, 1], [0, 80]) }}
             className="absolute bottom-[20%] right-[10%] opacity-60 hidden md:block"
          >
             <svg width="40" height="40" viewBox="0 0 100 100" className="text-aura-accent stroke-current fill-none stroke-[2px]">
               <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
             </svg>
          </motion.div>
          
          """
    content = content[:manifesto_start] + new_manifesto_bg + content[manifesto_end:]

# 4. Digital Impressions
content = content.replace("3Shape TRIOS", "Advanced Scanning Technology")

# 5. Dental Implants to Full Mouth Rehab
content = content.replace("Dental <br/> Implants", "Full Mouth <br/> Rehab")
content = content.replace("src=\"https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070\"", "src=\"https://images.unsplash.com/photo-1606277259648-52b313ef0de0?q=80&w=2070\"")
content = content.replace("Restoring foundation and function with titanium precision. Permanent, structurally flawless, and indistinguishable from nature.", "Comprehensive functional and aesthetic rebuild of your entire dental architecture for peak performance and absolute confidence.")
content = content.replace("{['Single Tooth', 'Bridges', 'Full Mouth']", "{['Reconstruction', 'Bite Correction', 'Aesthetics']")

content = content.replace("Endodontic Therapy", "Smile Design")
content = content.replace("Preserving your natural architecture with completely painless, gentle interventions.", "Architecting the perfect aesthetic frame for your face using minimally invasive porcelain and digital modeling.")

# 6. Founder Bio
content = content.replace("Dr. Nidhi Mehta did not merely open a clinic; she established a sanctuary for specialized aesthetic dental perfection.", "Dr. Nidhi Mehta has established a premium sanctuary for comprehensive and transformative dental care.")
content = content.replace("Rejecting the clinical coldness of traditional dentistry, her philosophy is absolute: immaculate precision delivered with profound human empathy and gentle care. With over 15 years of mastery over the human smile, she is the silent force behind the city's most confident expressions.", "Rejecting the clinical coldness of traditional dentistry, she brings a gentle, empathetic approach to a full spectrum of dental treatments. From routine restorations to the most complex fully-rehabilitative cases, she delivers immaculate precision and enduring oral health.")
content = content.replace("Cosmetic Dentist & Founder", "Comprehensive Dentist & Founder")

# 7. Merge Team and Methodology
# Remove the methodology section entirely
meth_start = content.find('{/* 6. The Anatomy of Transformation (Methodology) */}')
meth_end = content.find('{/* 7. The Absolute Authority (Team) */}')
if meth_start != -1 and meth_end != -1:
    content = content[:meth_start] + content[meth_end:]

# Replace the team array
team_array_regex = re.compile(r'const team = \[.*?\];', re.DOTALL)
new_team_array = """const team = [
    { name: "Diagnostic Blueprint", role: "Phase 01", img: "https://images.unsplash.com/photo-1614917637841-f050cebcab4e?q=80&w=2000", bio: "Sub-millimeter digital mapping of your facial architecture using 3D scanning and AI analysis.", category: "Analysis" },
    { name: "Aesthetic Simulation", role: "Phase 02", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000", bio: "Virtual rendering and tangible mockups of your potential, allowing you to preview the final result before we begin.", category: "Design" },
    { name: "Artisanal Fabrication", role: "Phase 03", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000", bio: "Hand-finished ceramics meticulously layered and glazed by our master ceramists in the innovation lab.", category: "Creation" },
    { name: "Harmonic Integration", role: "Phase 04", img: "https://images.unsplash.com/photo-1598256989481-9f9fdca0b0d3?q=80&w=2000", bio: "Flawless structural placement for enduring, natural brilliance that becomes completely indistinguishable from nature.", category: "Delivery" },
  ];"""
content = team_array_regex.sub(new_team_array, content)

# Change the headings of the new Accordion section
content = content.replace("Our Specialist Lineup", "Our Workflow")
content = content.replace("The Absolute <br/><span className=\"font-serif italic font-light text-aura-accent\">Authority</span>", "The Anatomy of <br/><span className=\"font-serif italic font-light text-aura-accent\">Transformation</span>")
content = content.replace("\"We don't just treat teeth; we architect confidence through a collective of highly-skilled specialists.\"", "\"A meticulously engineered protocol ensuring absolute precision from the first scan to the final placement.\"")

# 8. Footer readability
footer_contact_start = content.find('<div className="flex flex-col">')
# the user said: "as it's white on pink it's not very readable do something there"
# I will wrap the address block in a distinct div.
content = content.replace('className="text-aura-white/50 text-xs text-left border-l border-white/20 pl-6"', 'className="text-aura-white/90 text-xs text-left border border-white/10 p-4 rounded-xl bg-black/20 backdrop-blur-md shadow-sm ml-6"')

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("done")
