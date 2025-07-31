export default function Reasons() {
  return (
    <div className="text-center p-10 text-rose-600">
      <h1 className="text-4xl font-extrabold mb-4">To the One Who Owns My Heart 💖</h1>
      <p className="text-lg mb-4">
        I poured my heart into this letter for you. Every word is a piece of what I feel.
      </p>

      <a
        href={`${import.meta.env.BASE_URL}reasons.pdf`}
        download="To-The-One-Who-Owns-My-Heart.pdf"
        className="inline-block mt-4 underline text-lg text-rose-800"
      >
        📄 Download Sweet Letter & Poem
      </a>

      <p className="text-base mt-6 italic">
        "You're not just someone I love... you're the one I want to share every sunrise, every win, every quiet moment with. You mean the world to me." 🌍❤️
      </p>

      <div className="mt-10">
        <a href="/august/game">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold rounded-full transition duration-300">
            Play a game ❤️
          </button>
        </a>
      </div>
    </div>
  );
}
