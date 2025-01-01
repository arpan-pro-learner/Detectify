import ObjectDetection from "@/Components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Object Detection App
      </h1>

      <ObjectDetection />

      {/* Footer Section */}
      <footer className="mt-auto bg-gray-900 text-gray-200 py-4 w-full text-center shadow-lg">
        <p className="text-sm">
          Built by{" "}
          <a
            href="https://github.com/arpan-pro-learner" target="_blank"
            className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Arpan
          </a>{" "}
          with ❤️ & 🔍 Curiosity
        </p>
      </footer>
    </main>
  );
}
