"use client";
import MarkdownMessage from "@/components/MarkdownMessage";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Plus, Mic, AudioLines } from "lucide-react";

export default function Home() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Chatbot",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = input;
    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/chat/", {
        message: question,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to connect to backend.",
        },
      ]);
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">

        <div className="max-w-4xl mx-auto px-6 py-8">

          {messages.map((msg, index) => (
            <div key={index}>

              {msg.role === "user" ? (
                <div className="flex justify-end mb-8">
                  <div className="bg-gray-100 rounded-full px-5 py-3 text-lg">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div className="mb-8">
                    <MarkdownMessage content={msg.text} />

                  <div className="flex gap-4 mt-4 text-gray-500">

                  </div>
                </div>
              )}

            </div>
          ))}

          <div ref={bottomRef}></div>

        </div>

      </div>

      {/* Bottom Input */}
      <div className="p-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="flex items-center border rounded-full px-5 py-3 shadow">

            <Plus className="w-7 h-7 cursor-pointer" />

            <input
              className="flex-1 px-4 text-lg outline-none"
              placeholder="Ask anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <Mic className="w-6 h-6 mr-4 cursor-pointer" />

            <button
              onClick={sendMessage}
              className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200"
            >
              <AudioLines size={18} />
              Voice
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}