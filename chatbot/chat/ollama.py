import requests

OLLAMA_URL = "http://localhost:11434/api/chat"
MODEL = "llama3.2"

SYSTEM_PROMPT = """
You are an expert Python developer.

Always:
- Return Markdown.
- Use proper headings.
- Put code inside ```python``` blocks.
- Explain the code after it.
"""

def ask_ollama(question):
    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": question
                }
            ],
            "stream": False,
            "options": {
                "temperature": 0.2
            }
        }
    )

    response.raise_for_status()

    return response.json()["message"]["content"]