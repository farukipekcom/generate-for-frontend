"use client";
import React, { useEffect, useRef } from "react";
interface Props {
  p1x: number;
  p1y: number;
  p2x: number;
  p2y: number;
}
export default function BezierPreview(Props: Props) {
  const { p1x, p1y, p2x, p2y } = Props;
  const ballRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;
    ball.style.animation = "none";
    // Force reflow so the browser picks up the new timing function.
    void ball.offsetWidth;
    ball.style.animation = "bezier-slide 2s infinite";
    ball.style.animationTimingFunction = `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`;
  }, [p1x, p1y, p2x, p2y]);
  const path = `M 0 100 C ${p1x * 100} ${100 - p1y * 100}, ${p2x * 100} ${100 - p2y * 100}, 100 0`;
  return (
    <div className="flex w-full flex-col gap-y-6">
      <svg
        viewBox="0 0 100 100"
        className="h-40 w-full rounded-small border border-borderLight bg-white dark:border-border dark:bg-dark_input_bg"
        aria-hidden="true"
      >
        <line x1="0" y1="100" x2="100" y2="0" stroke="#EAECF0" strokeWidth="0.5" />
        <line x1="0" y1="0" x2="0" y2="100" stroke="#EAECF0" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="100" stroke="#EAECF0" strokeWidth="0.5" />
        <line
          x1="0"
          y1="100"
          x2={p1x * 100}
          y2={100 - p1y * 100}
          stroke="#B9B9B9"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <line
          x1="100"
          y1="0"
          x2={p2x * 100}
          y2={100 - p2y * 100}
          stroke="#B9B9B9"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
        <circle cx={p1x * 100} cy={100 - p1y * 100} r="2" fill="#BFFD52" />
        <circle cx={p2x * 100} cy={100 - p2y * 100} r="2" fill="#BFFD52" />
        <path d={path} fill="none" stroke="#131313" strokeWidth="2" className="dark:stroke-white" />
      </svg>
      <div className="relative h-10 rounded-small bg-borderLight dark:bg-border">
        <div
          ref={ballRef}
          className="bezier-ball absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-primary dark:bg-white"
        />
      </div>
    </div>
  );
}
