import React from 'react';

// This helper component is defined outside the main component to prevent re-rendering issues.
const Petal = ({ rotation, color, rx, ry }: { rotation: number; color: string; rx: number; ry: number }) => (
  <ellipse
    cx="100"
    cy="55"
    rx={rx}
    ry={ry}
    className={color}
    transform={`rotate(${rotation}, 100, 100)`}
  />
);

const TransvaalDaisy: React.FC = () => {
  const numPetals = 20;
  const angleStep = 360 / numPetals;

  const petalsLayer1 = Array.from({ length: numPetals }).map((_, i) => (
    <Petal key={`p1-${i}`} rotation={i * angleStep} color="fill-rose-500" rx={12} ry={50} />
  ));

  const petalsLayer2 = Array.from({ length: numPetals }).map((_, i) => (
     <Petal key={`p2-${i}`} rotation={i * angleStep + angleStep / 2} color="fill-rose-400" rx={10} ry={45} />
  ));

  return (
    <svg viewBox="-20 -20 240 260" xmlns="http://www.w3.org/2000/svg" aria-labelledby="daisyTitle" role="img" className="w-full h-auto drop-shadow-md">
        <title id="daisyTitle">Ilustrasi Bunga Transvaal Daisy</title>
        <defs>
            <radialGradient id="daisyCenterGradient">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
            </radialGradient>
        </defs>

        {/* Stem */}
        <path d="M 100 200 C 105 180, 110 150, 100 125" className="stroke-lime-700" strokeWidth="5" fill="none" strokeLinecap="round" />

         {/* Leaf */}
        <path d="M 100 170 C 120 160, 130 140, 103 150" className="fill-lime-600" />


        {/* Petals - back layer */}
        <g className="opacity-80">
            {petalsLayer2}
        </g>
        {/* Petals - front layer */}
        <g>
            {petalsLayer1}
        </g>

        {/* Center */}
        <circle cx="100" cy="100" r="22" fill="url(#daisyCenterGradient)" className="stroke-amber-800/50" strokeWidth="1" />
        
        {/* Center dots for texture */}
        {Array.from({ length: 70 }).map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 19;
            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r={0.8} className="fill-amber-900/60" />;
        })}
    </svg>
  );
};

export default TransvaalDaisy;
