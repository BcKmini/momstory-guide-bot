import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  type: "user" | "bot";
  children: React.ReactNode;
  className?: string;
}

export const ChatBubble = ({ type, children, className }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        "animate-fade-in",
        type === "user" ? "ml-auto w-fit max-w-[85%]" : "mr-auto max-w-[85%]"
      )}
    >
      <div
        className={cn(
          "chat-bubble",
          type === "user" ? "chat-bubble-user" : "chat-bubble-bot px-5 py-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
