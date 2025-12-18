"use client";

import Image from "next/image";

export default function App() {

  return (
    <div className="w-full h-full bg-blue-500">
      <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => window.location.href = '/login'}
        >
          Go to Login
        </button>
    </div>
  );
}
