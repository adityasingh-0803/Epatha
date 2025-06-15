import React, { useState } from "react";

export default function PlannerApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <section className="bg-white p-4 rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🗓️ Daily Planner</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Add task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-3 rounded">
          Add
        </button>
      </div>
      <ul className="list-decimal pl-6">
        {tasks.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
