import React, { useState } from "react";

export default function JournalApp() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const addEntry = () => {
    if (entry.trim()) {
      setEntries([...entries, { text: entry, date: new Date().toLocaleString() }]);
      setEntry("");
    }
  };

  return (
    <section className="bg-white p-4 rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">📔 Voice Journal</h2>
      <textarea
        className="border p-2 rounded w-full mb-2"
        rows={4}
        placeholder="Write your thoughts..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      ></textarea>
      <button onClick={addEntry} className="bg-blue-500 text-white px-3 py-1 rounded mb-4">
        Save Entry
      </button>
      <ul className="list-none">
        {entries.map((e, idx) => (
          <li key={idx} className="mb-2">
            <strong>{e.date}</strong>: {e.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
