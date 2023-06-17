"use client";

import { useEffect } from "react";

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const chars = (katakana + latin + nums).split("");

export default function HeroCanvas() {
  useEffect(() => {
    const base = document.getElementById("canvas-base") as HTMLDivElement;
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = base.clientWidth;
    canvas.height = base.clientHeight;

    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    const started: boolean[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 0;
      started[x] = false;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        if (!started[i] && Math.random() > 0.992) {
          started[i] = true;
        }

        if (!started[i]) {
          continue;
        }

        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 60);
  }, []);

  return (
    <div
      id="canvas-base"
      className="h-full w-full left-0 top-0 absolute z-0 opacity-20"
    >
      <canvas id="hero-canvas" className="h-full w-full"></canvas>
    </div>
  );
}
