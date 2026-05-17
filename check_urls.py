import re
import urllib.request
import ssl

path = '/home/catch/Desktop/newclinictemplate/src/app/page.tsx'
with open(path, 'r') as f:
    content = f.read()

urls = re.findall(r'https://images\.unsplash\.com/[^?\"\'\s>]*', content)
unique_urls = list(set(urls))

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for url in unique_urls:
    try:
        req = urllib.request.Request(url + "?q=80&w=10", method='HEAD')
        with urllib.request.urlopen(req, context=ctx) as response:
            print(f"{url}: {response.status}")
    except Exception as e:
        print(f"{url}: ERROR ({e})")
