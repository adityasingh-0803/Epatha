import React, { useState } from "react";

export default function PromptInput({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setPrompt(transcript);
      onSubmit(transcript);
    };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <textarea
        className="w-full max-w-xl p-4 border rounded"
        rows={3}
        placeholder="Describe the tool you need..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => onSubmit(prompt)}
        >
          Generate Tool
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleVoice}
        >
          🎙️ Speak
        </button>
      </div>
    </div>
  );
}
