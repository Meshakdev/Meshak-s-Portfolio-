"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  visible: boolean;
  pressed: boolean;
  pulse: number;
};

type Point = {
  x: number;
  y: number;
};

const TRAIL_LENGTH = 18;
const MAX_DPR = 2;

export const SpiderCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const trailRef = useRef<Point[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const cursorRef = useRef<CursorState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    visible: false,
    pressed: false,
    pulse: 0,
  });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("spider-cursor-enabled");

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = window.innerWidth;
      const height = window.innerHeight;

      sizeRef.current = { width, height };
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const moveCursor = (x: number, y: number) => {
      const cursor = cursorRef.current;

      if (!cursor.visible) {
        cursor.x = x;
        cursor.y = y;
        trailRef.current = Array.from({ length: TRAIL_LENGTH }, () => ({
          x,
          y,
        }));
      }

      cursor.targetX = x;
      cursor.targetY = y;
      cursor.visible = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }

      moveCursor(event.clientX, event.clientY);
    };

    const onPointerDown = () => {
      cursorRef.current.pressed = true;
      cursorRef.current.pulse = 1;
    };

    const onPointerUp = () => {
      cursorRef.current.pressed = false;
    };

    const onPointerLeave = () => {
      cursorRef.current.visible = false;
    };

    const drawTrail = (trail: Point[]) => {
      for (let index = trail.length - 1; index > 0; index -= 1) {
        const point = trail[index];
        const nextPoint = trail[index - 1];
        const progress = 1 - index / trail.length;

        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(nextPoint.x, nextPoint.y);
        context.strokeStyle = `rgba(124, 58, 237, ${progress * 0.28})`;
        context.lineWidth = 1 + progress * 4;
        context.stroke();
      }
    };

    const drawWebThreads = (cursor: CursorState, trail: Point[]) => {
      for (let index = 3; index < trail.length; index += 4) {
        const point = trail[index];
        const alpha = 0.18 - index * 0.007;

        context.beginPath();
        context.moveTo(cursor.x, cursor.y);
        context.lineTo(point.x, point.y);
        context.strokeStyle = `rgba(180, 155, 255, ${Math.max(alpha, 0)})`;
        context.lineWidth = 0.7;
        context.stroke();
      }
    };

    const drawLegs = (cursor: CursorState, time: number) => {
      const driftX = (cursor.targetX - cursor.x) * 0.04;
      const driftY = (cursor.targetY - cursor.y) * 0.04;

      context.lineCap = "round";
      context.lineJoin = "round";

      for (let side = -1; side <= 1; side += 2) {
        for (let leg = 0; leg < 4; leg += 1) {
          const offsetY = (leg - 1.5) * 7;
          const phase = time * 0.006 + leg * 1.25 + (side > 0 ? 0.8 : 0);
          const hipX = cursor.x + side * 4;
          const hipY = cursor.y + offsetY * 0.5;
          const kneeX =
            cursor.x + side * (13 + leg * 2.8) + Math.sin(phase) * 3 + driftX;
          const kneeY = cursor.y + offsetY + Math.cos(phase) * 2 + driftY;
          const footX =
            cursor.x +
            side * (25 + leg * 3.5) +
            Math.sin(phase + 1.3) * 5 +
            driftX;
          const footY =
            cursor.y + offsetY * 1.55 + Math.cos(phase + 0.6) * 4 + driftY;

          context.beginPath();
          context.moveTo(hipX, hipY);
          context.quadraticCurveTo(kneeX, kneeY, footX, footY);
          context.strokeStyle = "rgba(226, 232, 240, 0.72)";
          context.lineWidth = 1.3;
          context.stroke();

          context.beginPath();
          context.arc(footX, footY, 1.15, 0, Math.PI * 2);
          context.fillStyle = "rgba(156, 178, 255, 0.65)";
          context.fill();
        }
      }
    };

    const drawBody = (cursor: CursorState) => {
      const pulseSize = cursor.pulse * 6;
      const bodyRadius = cursor.pressed ? 7 : 6;

      context.beginPath();
      context.ellipse(
        cursor.x,
        cursor.y + 1,
        bodyRadius,
        bodyRadius + 2,
        0,
        0,
        Math.PI * 2,
      );
      context.fillStyle = "rgba(9, 12, 31, 0.95)";
      context.fill();
      context.strokeStyle = "rgba(186, 156, 255, 0.9)";
      context.lineWidth = 1.2;
      context.stroke();

      context.beginPath();
      context.arc(cursor.x, cursor.y - 7, 4.5, 0, Math.PI * 2);
      context.fillStyle = "rgba(15, 23, 42, 0.96)";
      context.fill();
      context.strokeStyle = "rgba(229, 156, 255, 0.82)";
      context.stroke();

      context.beginPath();
      context.arc(cursor.x, cursor.y, 3, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.shadowColor = "rgba(156, 178, 255, 0.9)";
      context.shadowBlur = 12;
      context.fill();
      context.shadowBlur = 0;

      if (cursor.pulse > 0.02) {
        context.beginPath();
        context.arc(cursor.x, cursor.y, 16 + pulseSize, 0, Math.PI * 2);
        context.strokeStyle = `rgba(229, 156, 255, ${cursor.pulse * 0.35})`;
        context.lineWidth = 1.4;
        context.stroke();
      }
    };

    const draw = (time: number) => {
      const { width, height } = sizeRef.current;
      const cursor = cursorRef.current;

      context.clearRect(0, 0, width, height);

      if (cursor.visible) {
        cursor.x += (cursor.targetX - cursor.x) * 0.28;
        cursor.y += (cursor.targetY - cursor.y) * 0.28;
        cursor.pulse *= 0.86;

        trailRef.current.unshift({ x: cursor.x, y: cursor.y });
        trailRef.current = trailRef.current.slice(0, TRAIL_LENGTH);

        drawTrail(trailRef.current);
        drawWebThreads(cursor, trailRef.current);
        drawLegs(cursor, time);
        drawBody(cursor);
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    frameRef.current = window.requestAnimationFrame(draw);

    return () => {
      root.classList.remove("spider-cursor-enabled");
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70]"
    />
  );
};
