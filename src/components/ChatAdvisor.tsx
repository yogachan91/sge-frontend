import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { chatResponses, quickQuestions } from "@/data/mockData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const matchResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("defect") || lower.includes("cacat") || lower.includes("rusak")) return chatResponses.defect;
  if (lower.includes("profit") || lower.includes("untung") || lower.includes("menguntungkan") || lower.includes("pelanggan")) return chatResponses.profitable;
  if (lower.includes("reorder") || lower.includes("stok") || lower.includes("material") || lower.includes("habis")) return chatResponses.reorder;
  if (lower.includes("kurs") || lower.includes("usd") || lower.includes("dollar") || lower.includes("currency")) return chatResponses.currency;
  if (lower.includes("produksi") || lower.includes("output") || lower.includes("production") || lower.includes("ringkasan")) return chatResponses.production;
  return chatResponses.default;
};

const ChatAdvisor = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Halo! Saya AI Advisor PT Sentra Global Elektrindo. Ada yang bisa saya bantu analisis hari ini?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: matchResponse(text) }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      <div className={cn(
        "fixed top-0 right-0 z-50 h-full w-[400px] max-w-[90vw] bg-card border-l border-border shadow-2xl transition-transform duration-300 flex flex-col",
        open ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">AI Advisor</h3>
            <p className="text-xs text-muted-foreground">PT Sentra Global Elektrindo</p>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-1.5 border-b border-border px-4 py-3">
          {quickQuestions.map((q) => (
            <button
              key={q.keyword}
              onClick={() => sendMessage(q.label)}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground hover:bg-accent transition-colors"
            >
              {q.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-line",
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2 text-sm text-muted-foreground">
                <span className="inline-flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: "0ms" }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: "150ms" }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: "300ms" }}>●</span>
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border p-3">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 text-sm"
            />
            <Button type="submit" size="icon" disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatAdvisor;
