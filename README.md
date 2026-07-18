 🤖 AI Chatbot using Python, Django REST Framework, Ollama, Llama 3.2 & Next.js

An AI-powered chatbot built with **Python**, **Django REST Framework**, **Ollama**, **Llama 3.2**, **Next.js**, and **SQLite**. The application provides a REST API backend and a modern frontend for interacting with a locally running Large Language Model.

 🚀 Features

- 💬 AI Chat Interface
- 🦙 Local LLM using Ollama (Llama 3.2)
- ⚡ Django REST Framework APIs
- 🎨 Modern Next.js Frontend
- 🗂 Chat History Support
- 🔄 REST API Communication
- 🛠 Easy Local Development
- 💾 SQLite Database
- 📱 Responsive UI

 🛠 Tech Stack

Backend
- Python 3.x
- Django
- Django REST Framework
- Ollama
- Llama 3.2
- SQLite

 Frontend
- Next.js
- React
- TypeScript
- CSS

---

 📁 Project Structure

```
AI_Chatbot/
│
├── chatbot/               # Django Project
├── api/                   # REST APIs
├── app/                   # Next.js App Router
├── components/            # React Components
├── public/
├── manage.py
├── requirements.txt
├── package.json
└── README.md

 ⚙️ Installation

 1. Clone Repository

```bash
git clone https://github.com/yourusername/AI_Chatbot.git
cd AI_Chatbot

 2. Create Virtual Environment

```bash
python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux/Mac

```bash
source venv/bin/activate

 3. Install Python Dependencies

```bash
pip install -r requirements.txt

4. Install Frontend Dependencies

```bash
npm install


5. Install Ollama

Download from

https://ollama.com

Pull Llama 3.2 model

```bash
ollama pull llama3.2
```

Run Ollama

```bash
ollama serve
```
 6. Run Django Server

```bash
python manage.py migrate

python manage.py runserver
```

Backend

```
http://127.0.0.1:8000
```

---

7. Run Next.js

```bash
npm run dev
```

Frontend

```
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|----------|----------------|----------------|
| POST | /api/chat/ | Send Chat Message |
| GET | /api/history/ | Chat History |
| DELETE | /api/history/ | Delete History |

---

# 🧠 AI Model

Model Used

```
Llama 3.2
```

Running via

```
Ollama
```

---

# 💾 Database

SQLite

Database file

```
db.sqlite3
```

---

# Example Request

```json
POST /api/chat/

{
    "message":"Hello AI"
}
```

---

# Example Response

```json
{
    "response":"Hello! How can I help you today?"
}
```

---

# Future Improvements

- User Authentication
- Multiple AI Models
- Conversation History
- Voice Chat
- Image Upload
- PDF Chat
- RAG Support
- Streaming Responses
- Docker Deployment
- PostgreSQL Support

---

# Requirements

- Python 3.10+
- Node.js 18+
- Django
- Django REST Framework
- Ollama
- Llama 3.2
- Next.js

---

# Author

**Amarjeet Rai**

Python Developer | AI Developer

Skills

- Python
- Django
- Django REST Framework
- Next.js
- Artificial Intelligence
- Ollama
- Llama 3.2

---

# License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to star the repository.
