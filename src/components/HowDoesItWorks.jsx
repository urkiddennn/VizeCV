import React from "react";

function HowItWorks() {
  return (
    <div className="w-full h-1/2 flex flex-col items-center justify-center bg-gray-50 px-6 py-10">
      <h2 className="text-4xl font-bold mb-8">How It Works</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">1️⃣</div>
          <h3 className="text-xl font-semibold">Start with a Template</h3>
          <p className="text-zinc-600">
            Choose from a variety of customizable templates that fit your style
            and career needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">2️⃣</div>
          <h3 className="text-xl font-semibold">Fill in Your Details</h3>
          <p className="text-zinc-600">
            Add your personal info, work experience, education, and skills step
            by step.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">3️⃣</div>
          <h3 className="text-xl font-semibold">Preview and Edit</h3>
          <p className="text-zinc-600">
            See real-time previews and make changes to ensure your resume is
            perfect.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-purple-500 text-5xl">4️⃣</div>
          <h3 className="text-xl font-semibold">Download and Share</h3>
          <p className="text-zinc-600">
            Download your resume in your preferred format and share it with
            employers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
