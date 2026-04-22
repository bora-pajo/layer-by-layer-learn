import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square, Gauge } from "lucide-react";

type Props = {
  text: string;
  accent: string;
};

/**
 * Mockup-grade audio player using the browser's Web Speech API.
 * No backend, no API keys. Voice quality depends on the user's OS.
 */
const RATES = [1, 1.25, 1.5, 0.85];

export default function ListenPlayer({ text, accent }: Props) {
  const [supported, setSupported] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    function loadVoices() {
      const all = window.speechSynthesis.getVoices();
      setVoices(all);
      // Pick a pleasant English voice if available
      const preferred =
        all.find((v) => /Samantha|Karen|Serena|Moira|Tessa|Allison|Ava/i.test(v.name) && v.lang.startsWith("en")) ||
        all.find((v) => v.lang.startsWith("en-") && v.name.toLowerCase().includes("female")) ||
        all.find((v) => v.lang.startsWith("en")) ||
        all[0] ||
        null;
      setVoice((cur) => cur ?? preferred);
    }
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Stop on unmount or text change
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text]);

  function start() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.rate = rate;
    u.pitch = 1;
    u.onend = () => {
      setPlaying(false);
      setPaused(false);
    };
    u.onerror = () => {
      setPlaying(false);
      setPaused(false);
    };
    utterRef.current = u;
    window.speechSynthesis.speak(u);
    setPlaying(true);
    setPaused(false);
  }

  function toggle() {
    if (!playing) return start();
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  }

  function stop() {
    window.speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  }

  function cycleRate() {
    const next = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
    setRate(next);
    // If actively speaking, restart with the new rate (Web Speech can't change live)
    if (playing) {
      const wasPaused = paused;
      window.speechSynthesis.cancel();
      setTimeout(() => {
        const u = new SpeechSynthesisUtterance(text);
        if (voice) u.voice = voice;
        u.rate = next;
        u.onend = () => {
          setPlaying(false);
          setPaused(false);
        };
        utterRef.current = u;
        window.speechSynthesis.speak(u);
        setPlaying(true);
        setPaused(false);
        if (wasPaused) {
          window.speechSynthesis.pause();
          setPaused(true);
        }
      }, 60);
    }
  }

  if (!supported) {
    return (
      <div className="mt-6 rounded-2xl border border-border bg-surface-2 p-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
          Listen unavailable in this browser
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex items-center gap-3 rounded-full border border-border bg-surface-2 px-3 py-2">
      <button
        onClick={toggle}
        aria-label={playing && !paused ? "Pause" : "Play"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-white active:scale-95 transition-transform"
        style={{ background: accent }}
      >
        {playing && !paused ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-[1px]" />}
      </button>

      <div className="flex flex-1 flex-col">
        <span className="font-display text-[13px] text-ink leading-tight">
          {playing ? (paused ? "Paused" : "Listening…") : "Listen to this chapter"}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          {voice ? voice.name : "Default voice"} · Web Speech
        </span>
      </div>

      <button
        onClick={cycleRate}
        aria-label="Change playback speed"
        className="flex h-9 items-center gap-1 rounded-full bg-background px-3 text-ink active:scale-95 transition-transform"
      >
        <Gauge className="h-3.5 w-3.5" />
        <span className="font-mono text-[11px]">{rate}x</span>
      </button>

      {playing && (
        <button
          onClick={stop}
          aria-label="Stop"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-ink active:scale-95 transition-transform"
        >
          <Square className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
