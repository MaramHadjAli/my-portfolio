import React, { useEffect, useRef, useState } from 'react';

function ClickSpark() {
  const [bursts, setBursts] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onDown = (event) => {
      if (event.button !== 0) return;
      const id = `${Date.now()}-${Math.random()}`;
      setBursts((list) => [...list.slice(-8), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setBursts((list) => list.filter((item) => item.id !== id));
      }, 520);
    };

    let x = 0;
    let y = 0;
    let px = 0;
    let py = 0;
    let moved = false;
    let frame = 0;

    const onMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      px = x;
      py = y;
      x = event.clientX;
      y = event.clientY;
      if (!moved) {
        px = x;
        py = y;
      }
      moved = true;
    };

    const tick = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (moved && (px !== x || py !== y)) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'rgba(255, 214, 228, 0.55)';
        ctx.lineWidth = 7;
        ctx.shadowColor = 'rgba(201, 79, 124, 0.55)';
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
        px = x;
        py = y;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div className="click-layer" aria-hidden="true">
      <canvas ref={canvasRef} className="cursor-ribbon" />
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="click-burst"
          style={{ left: burst.x, top: burst.y }}
        />
      ))}
    </div>
  );
}

export default ClickSpark;
