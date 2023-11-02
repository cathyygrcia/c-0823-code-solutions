import React from 'react';
import { useState } from 'react';
type Props = {
  label: string;
};
export function HotButton({ label }: Props) {
  const [clicks, setClicks] = useState(0);
  const colors = ['purple', 'lavender', 'pink', 'orange', 'yellow', 'white'];
  const color = colors[Math.floor(clicks / 3) % colors.length];
  return (
    <>
      <button
        onClick={() => setClicks(clicks + 1)}
        style={{ backgroundColor: color }}>
        {label}
      </button>
      <p>{clicks}</p>
    </>
  );
}
