"use client";

export function AnimatedFlag() {
  return (
    <div className="relative h-12 w-16 overflow-hidden rounded-sm">
      <svg
        viewBox="0 0 750 500"
        className="h-full w-full"
        style={{
          animation: "wave 3s ease-in-out infinite",
          transformOrigin: "left center",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Red stripe (top) */}
        <rect fill="#C60B1E" width="750" height="125" />

        {/* Yellow stripe (middle) */}
        <rect fill="#FFC400" width="750" height="250" y="125" />

        {/* Red stripe (bottom) */}
        <rect fill="#C60B1E" width="750" height="125" y="375" />

        {/* Simplified coat of arms silhouette */}
        <g transform="translate(100, 200)">
          {/* Crown */}
          <path
            d="M 30 -60 L 35 -55 L 40 -60 L 45 -55 L 50 -60 L 50 -50 L 30 -50 Z"
            fill="#FFC400"
            stroke="#C60B1E"
            strokeWidth="1"
          />
          {/* Shield outline */}
          <path
            d="M 40 -50 L 65 -30 L 65 30 Q 40 50 15 30 L 15 -30 Z"
            fill="#C60B1E"
            stroke="#2C3E50"
            strokeWidth="2"
            opacity="0.8"
          />
          {/* Pillars of Hercules (simplified) */}
          <rect x="10" y="-20" width="8" height="50" fill="#FFC400" opacity="0.6" />
          <rect x="62" y="-20" width="8" height="50" fill="#FFC400" opacity="0.6" />
        </g>
      </svg>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes wave {
            0%, 100% {
              transform: perspective(400px) rotateY(0deg);
            }
            50% {
              transform: perspective(400px) rotateY(10deg);
            }
          }
        `
      }} />
    </div>
  );
}
