export default function Video() {
  return (
    <div className="text-center p-10 bg-rose-50 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-rose-600 mb-6">Tap Play 🎥</h1>
      
      <video
        controls
        className="w-full max-w-md mx-auto rounded-xl shadow-lg border border-rose-200"
        preload="metadata"
      >
        <source
          src={`${import.meta.env.BASE_URL}video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <a href="/app/reasons">
        <button className="mt-8 px-6 py-3 bg-rose-500 hover:bg-rose-600 transition text-white rounded-full text-lg shadow-md">
          Next 💗
        </button>
      </a>
    </div>
  );
}
