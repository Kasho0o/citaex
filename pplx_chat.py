import os, sys, json
import requests

API_KEY = os.environ.get("PERPLEXITY_API_KEY")
if not API_KEY:
    raise SystemExit("Missing PERPLEXITY_API_KEY env var. Set it with: export PERPLEXITY_API_KEY='pplx-...'")

prompt = " ".join(sys.argv[1:]).strip()
if not prompt:
    raise SystemExit('Usage: python3 pplx_chat.py "your question"')

url = "https://api.perplexity.ai/chat/completions"

payload = {
    "model": "sonar",
    "messages": [{"role": "user", "content": prompt}],
}

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

r = requests.post(url, headers=headers, data=json.dumps(payload), timeout=60)
r.raise_for_status()
data = r.json()

print(data["choices"][0]["message"]["content"])
