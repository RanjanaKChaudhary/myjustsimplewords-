import { useState, useRef, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import axios from "axios";

function Chatbot() {
  const API = import.meta.env.VITE_API_URL;

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
  if (!message.trim() || loading) return;

  const userMsg = message;
  setMessage("");
  setLoading(true);

  setChat(prev => [...prev, { type: "user", text: userMsg }]);

  try {
    const res = await axios.post(`${API}/api/chat`, {
      message: userMsg,
    });

    const reply = res.data?.reply || "No response";

    setChat(prev => [...prev, { type: "bot", text: reply }]);

  } catch (err) {
    console.error("CHAT ERROR:", err.response?.data || err.message);

    setChat(prev => [
      ...prev,
      { type: "bot", text: "Something went wrong" }
    ]);
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      {/*Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg cursor-pointer z-50 transition-all duration-300
             bg-slate-800 hover:bg-indigo-700 text-white hover:scale-105"
      >
        <FiMessageSquare size={21} />
        <span className="text-sm font-medium">Hello!</span>
      </div>

      {/*Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-5 w-80 h-[420px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-white/20">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-black/60 text-white">
            <span>MyJustSimpleWords</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {chat.map((c, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${
                  c.type === "user"
                    ? "ml-auto bg-yellow-500 text-black"
                    : "bg-gray-200 text-black"
                }`}
              >
                {c.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-200 px-3 py-2 rounded-xl w-fit text-sm">
                Typing...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-white/20">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-3 py-2 bg-transparent outline-none text-white placeholder-gray-300"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 bg-green-500 hover:bg-green-600 text-white"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
