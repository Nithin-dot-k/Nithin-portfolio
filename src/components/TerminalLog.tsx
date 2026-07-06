import { useEffect, useState, useRef } from "react";

export function TerminalLog({ lines, active }: { lines: string[]; active: boolean }) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const idxRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setRendered([]);
      setCurrent("");
      idxRef.current = 0;
      charRef.current = 0;
      return;
    }
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (idxRef.current >= lines.length) return;
      const line = lines[idxRef.current];
      charRef.current++;
      if (charRef.current > line.length) {
        setRendered((r) => [...r, line]);
        setCurrent("");
        idxRef.current++;
        charRef.current = 0;
        setTimeout(tick, 220);
      } else {
        setCurrent(line.slice(0, charRef.current));
        setTimeout(tick, 18 + Math.random() * 25);
      }
    };
    const t = setTimeout(tick, 200);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [active, lines]);

  return (
    <div className="font-mono text-xs bg-[#05070a]/90 glow-border-cyan rounded-md p-3 mt-4 max-h-48 overflow-hidden scanlines">
      <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-border">
        <span className="h-2 w-2 rounded-full bg-destructive/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-neon/70" />
        <span className="ml-2 text-[10px] text-muted-foreground uppercase tracking-widest">
          runtime.log
        </span>
      </div>
      <div className="space-y-1">
        {rendered.map((l, i) => (
          <div key={i} className="text-neon">
            <span className="text-muted-foreground">$&gt; </span>
            {l}
          </div>
        ))}
        {current && (
          <div className="text-neon cli-cursor">
            <span className="text-muted-foreground">$&gt; </span>
            {current}
          </div>
        )}
      </div>
    </div>
  );
}
