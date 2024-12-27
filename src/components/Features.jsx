import React from "react";

function Features() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-6 py-10">
      <h2 className="text-4xl font-bold mb-8">Features</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">🎨</div>
          <h3 className="text-xl font-semibold">Customizable Templates</h3>
          <p className="text-zinc-600">
            Choose from a wide range of professionally designed templates and
            customize them to suit your needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">⚡</div>
          <h3 className="text-xl font-semibold">Real-Time Previews</h3>
          <p className="text-zinc-600">
            Instantly see how your resume looks as you make edits, ensuring
            perfection.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">📥</div>
          <h3 className="text-xl font-semibold">Easy Downloads</h3>
          <p className="text-zinc-600">
            Download your resume in multiple formats like PDF or Word with just
            one click.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">🔧</div>
          <h3 className="text-xl font-semibold">Intuitive Editing</h3>
          <p className="text-zinc-600">
            Effortlessly add sections, rearrange content, and make edits with
            our user-friendly interface.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">🖋️</div>
          <h3 className="text-xl font-semibold">Expert Tips</h3>
          <p className="text-zinc-600">
            Get professional tips and suggestions to help you create the best
            possible resume.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">📈</div>
          <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
          <p className="text-zinc-600">
            Leverage analytics to track resume performance and improve based on
            feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
