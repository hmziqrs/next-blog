"use client";

import { debounce } from "lodash";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const chars = (katakana + latin + nums).split("");

const pathsToRender = ["/", "/about", "/contact"];

export default function LayoutCanvas() {
  const path = usePathname();
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  function initCanvas() {
    const base = document.getElementById("canvas-base") as HTMLDivElement;
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.width = base.clientWidth;
    canvas.height = base.clientHeight;

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).map(() => 0);
    const started: boolean[] = drops.map(() => false);

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
        if (!started[i]) continue;

        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    intervalRef.current = setInterval(draw, 60);
  }

  function clearCanvas() {
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  useLayoutEffect(() => {
    if (!pathsToRender.includes(path)) return;
    function reset() {
      clearCanvas();
      initCanvas();
    }

    const debounced = debounce(reset, 400);
    window.addEventListener("resize", debounced);
    return () => {
      console.log("removing listener");
      window.removeEventListener("resize", debounced);
    };
  }, [path]);

  useEffect(() => {
    if (!pathsToRender.includes(path)) {
      return;
    }

    initCanvas();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [path]);

  if (!pathsToRender.includes(path)) {
    return null;
  }

  return (
    <div
      id="canvas-base"
      className="h-full w-full left-0 top-0 absolute z-0 opacity-30"
    >
      <canvas id="hero-canvas" className="h-full w-full"></canvas>
    </div>
  );
}
