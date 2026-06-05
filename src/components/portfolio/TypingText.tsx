import { useEffect, useState } from "react";

export function TypingText({ words, className = "" }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") { setDel(false); setIdx((i) => i + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 animate-pulse bg-current align-middle" />
    </span>
  );
}
