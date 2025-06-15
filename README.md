# 🎙️ Empatha – Inclusive AI Tool Crafter

Empatha is a voice-enabled interface that helps users generate daily digital tools like **Reminders**, **Planners**, and **Journals**—simply by speaking or writing their needs. It’s inclusive, intuitive, and designed for accessibility.

## 🧠 Elevator Pitch

> “Describe it, and we build it for you!” — Empatha lets anyone create daily productivity tools using natural language input. Whether you speak or type, Empatha listens, understands, and crafts what you need instantly.

---


---

## 🛠 Toolstack Used

- React (with Vite)
- Tailwind CSS
- Native Web Speech API (`SpeechRecognition`)
- Custom intent detection (JS)

---

## 🧩 Project Structure

```bash
Empatha/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── PromptInput.jsx
│   ├── templates/
│   │   ├── ReminderApp.jsx
│   │   ├── PlannerApp.jsx
│   │   └── JournalApp.jsx
│   ├── utils/
│   │   └── detectIntent.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── README.md
├── package.json
└── vite.config.js
