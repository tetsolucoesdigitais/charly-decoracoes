import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou a assistente virtual da Charly Decorações. Como posso te ajudar?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Primeira tentativa: POST com JSON
      let response = await fetch("https://educoelhon8n.app.n8n.cloud/webhook-test/afcc1910-de96-4930-8076-06e71ef04434", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json, text/plain, */*",
        },
        body: JSON.stringify({
          message: userMessage.text,
          timestamp: userMessage.timestamp.toISOString(),
          user_id: "web_user_" + Date.now()
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (response.ok) {
        let responseText = "ok";

        if (contentType.includes("application/json")) {
          const raw = await response.text();
          try {
            const data = raw ? JSON.parse(raw) : null as any;
            responseText =
              (data?.response as string) ||
              (data?.message as string) ||
              (data?.output as string) ||
              (data?.text as string) ||
              (typeof data === "string" ? data : raw) ||
              "ok";
          } catch {
            responseText = raw || "ok";
          }
        } else {
          responseText = (await response.text()).trim() || "ok";
        }

        console.log("Resposta do n8n:", responseText);

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        console.error("Erro HTTP:", response.status, response.statusText);
        toast({
          title: "Erro",
          description: `Erro do servidor: ${response.status}`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
      
      // Fallback: Se der erro de CORS/fetch, tenta sem Content-Type
      if (error?.message?.includes("fetch") || error?.name === "TypeError") {
        try {
          console.log("Tentando fallback sem Content-Type...");
          const fallbackResponse = await fetch("https://educoelhon8n.app.n8n.cloud/webhook-test/afcc1910-de96-4930-8076-06e71ef04434", {
            method: "POST",
            mode: "cors",
            body: userMessage.text,
          });

          if (fallbackResponse.ok) {
            const responseText = (await fallbackResponse.text()).trim() || "ok";
            console.log("Resposta do n8n (fallback):", responseText);

            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: responseText,
              isUser: false,
              timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsLoading(false);
            return;
          }
        } catch (fallbackError) {
          console.error("Fallback também falhou:", fallbackError);
        }
      }

      toast({
        title: "Erro de Conexão",
        description: "Verifique se o webhook n8n está ativo e configurado para CORS.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-charly-pink to-charly-purple text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-charly-mint rounded-full animate-ping"></div>
      </button>

      {/* Widget do chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-background/95 backdrop-blur-lg border border-charly-pink/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-charly-pink to-charly-purple p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Charly Bot</h3>
                <p className="text-white/80 text-xs">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                {!msg.isUser && (
                  <div className="w-6 h-6 bg-gradient-to-r from-charly-pink to-charly-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg text-sm ${
                    msg.isUser
                      ? "bg-gradient-to-r from-charly-pink to-charly-purple text-white"
                      : "bg-muted border border-charly-pink/20"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.isUser && (
                  <div className="w-6 h-6 bg-charly-mint rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 text-black" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 bg-gradient-to-r from-charly-pink to-charly-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="bg-muted border border-charly-pink/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-charly-pink rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-charly-pink rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-charly-pink rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-charly-pink/20 bg-background/50">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 border-charly-pink/30 focus:border-charly-pink"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!message.trim() || isLoading}
                size="icon"
                className="bg-gradient-to-r from-charly-pink to-charly-purple hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}