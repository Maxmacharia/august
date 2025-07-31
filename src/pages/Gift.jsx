export default function Gift() {
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl text-rose-500 mb-4">This is just for you 🌸</h1>
      <img
        src={`${import.meta.env.BASE_URL}gift.jpg`}
        alt="Real gift"
        className="w-80 h-auto rounded-2xl shadow-xl mb-6 border-4 border-rose-300"
      />
      <div className="animate-bounce text-4xl">💐🌸🌷💖🌹</div>
      <a href="/app/final">
        <button className="mt-6 px-6 py-3 bg-rose-600 text-white rounded-full">One Last Surprise 🎁</button>
      </a>
    </div>
  );
}
