import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast"
          ? "20s"
          : speed === "normal"
          ? "40s"
          : speed === "slow"
          ? "80s"
          : "40s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const [paused, setPaused] = useState(false);

  const isMobileDevice = () =>
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  const handleClick = () => {
    if (isMobileDevice()) {
      setPaused((prev) => !prev);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-90 md:max-w-190 xl:max-w-320 overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        onClick={handleClick}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 md:gap-13 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          paused && "[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[398px] max-w-full shrink-0 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(150deg,_#04071d_0%,_#0c0e23_100%)] px-5 py-6 lg:px-12.5 lg:py-12.5 md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[910px] dark:border-[rgba(255,255,255,0.1)] dark:bg-[linear-gradient(150deg,_#04071d_0%,_#0c0e23_100%)]"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)] user-select-none"
              />
              <span
                style={{ fontFamily: "var(--font-family)" }}
                className="font-normal text-[clamp(1rem,0.894rem+0.4vw,1.25rem)] leading-[150%] tracking-[-0.01em] text-white"
              >
                {item.quote}
              </span>
              <div className="relative z-20 mt-7.5 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <div className="flex gap-2.5">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-[clamp(2.75rem,2.59rem+0.59vw,3.125rem)] h-[clamp(2.75rem,2.59rem+0.59vw,3.125rem)] rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-[clamp(1rem,0.947rem+0.2vw,1.125rem)] leading-[140%] tracking-[-0.01em] text-white">
                        {item.name}
                      </span>
                      <span className="font-normal text-[clamp(0.75rem,0.697rem+0.2vw,0.875rem)] leading-[150%] tracking-[-0.01em] text-[#c1c2d3]">
                        {item.job}
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
