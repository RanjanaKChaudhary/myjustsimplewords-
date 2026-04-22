import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-12 bg-slate-100">
      <div className="max-w-3xl text-center bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to our creative space, where words come alive. Our platform is
          dedicated to sharing emotions through quotes, poems, and shayari. We
          believe that every thought has the power to inspire, heal, and connect
          people.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Whether you are here to read, write, or express your feelings, this
          space is for you. We aim to build a community where creativity flows
          freely and every voice is valued.
        </p>

        <p className="text-gray-600 leading-relaxed">
          From heartfelt shayari to motivational quotes, every piece shared here
          is a reflection of human emotions and imagination.
        </p>

        {/* Contact Section */}
        <div className="mt-8">
          <p className="text-gray-700">
            📩 For queries, feedback, or suggestions, feel free to reach out:
          </p>
          <a
            href="mailto:myjustsimplewords@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            myjustsimplewords@gmail.com
          </a>
        </div>

        <div className="mt-6">
          <p className="text-yellow-600 font-semibold">
            ✨ Write. Express. Inspire. ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
