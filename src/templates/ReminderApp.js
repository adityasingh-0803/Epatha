import React, { useState } from "react";

export default function ReminderApp() {
  const [reminders, setReminders] = useState([]);
  const [input, setInput] = useState("");

  const addReminder = () => {
    if (input.trim()) {
      setReminders([...reminders, input]);
      setInput("");
    }
  };

  return (
    <section className="bg-white p-4 rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🛎️ Reminder App</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Add reminder"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addReminder} className="bg-blue-500 text-white px-3 rounded">
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {reminders.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </section>
  );
}
