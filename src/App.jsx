import React, { useState } from "react";
import PromptInput from "./components/PromptInput";
import { detectIntent } from "./utils/detectIntent";
import ReminderApp from "./templates/ReminderApp";
import PlannerApp from "./templates/PlannerApp";
import JournalApp from "./templates/JournalApp";

export default function App() {
  const [tool, setTool] = useState(null);

  const handlePrompt = (prompt) => {
    const intent = detectIntent(prompt);
    switch (intent) {
      case "reminder":
        setTool(<ReminderApp />);
        break;
      case "planner":
        setTool(<PlannerApp />);
        break;
      case "journal":
        setTool(<JournalApp />);
        break;
      default:
        setTool(<p className="text-center text-red-500">Tool type not recognized.</p>);
    }
  };

  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Empatha</h1>
      <PromptInput onSubmit={handlePrompt} />
      <div className="mt-8">{tool}</div>
    </main>
  );
}

