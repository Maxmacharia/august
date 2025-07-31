import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Final() {
  useEffect(() => {
    // Launch confetti when component mounts
    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-rose-50 text-rose-800 text-center">
      <h1 className="text-4xl font-bold mb-6">You're My Everything 💖</h1>

      <p className="max-w-2xl text-lg mb-6">
        From the moment you smiled, my heart knew peace. You've filled my days with warmth,
        laughter, and a love I never knew I needed. This is for you.
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 mb-8 w-full max-w-xl border border-pink-200">
        <h2 className="text-2xl font-semibold mb-4">A Poem for You 🌹</h2>
        <p className="italic leading-relaxed text-pink-700">
          In every breath, your name I find,<br />
          A melody that's sweet and kind.<br />
          Through every storm, through every light,<br />
          You are my peace, my star at night. <br /><br />
          No need for diamonds, gold, or fame,<br />
          Just whisper once your lovely name.<br />
          For in your eyes, I see my way—<br />
          My reason, my heart, my night and day. 💘
        </p>
      </div>

      <h2 className="text-2xl font-bold text-pink-600">Happy Girlfriend's Day babe ❤️</h2>
    </div>
  );
}
