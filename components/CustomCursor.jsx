"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.1;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.1;

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.8;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.8;

      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 10}px, ${cursorPos.current.y - 10}px, 0)`;
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 2}px, ${dotPos.current.y - 2}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed z-[9999] transition transform duration-100 ease-in-out will-change-transform w-[20px] h-[20px] border-[1px] border-white rounded-[50%]" ref={cursorRef}></div>
      <div className="pointer-events-none fixed z-[9999] transition transform duration-100 ease-in-out will-change-transform w-[4px] h-[4px] bg-white rounded-[50%]" ref={dotRef}></div>
    </>
  );
};

export default CustomCursor;
