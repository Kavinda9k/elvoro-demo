"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Seconds to stagger this element behind its siblings. */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<"div">, "style" | "className" | "children">;

/**
 * Fades its children up the first time they scroll into view.
 *
 * The starting state is inline `opacity: 0`, which would strand content if the
 * animation never ran. Two CSS rules override it with `!important` instead of
 * being handled here: a reduced-motion rule in `globals.css`, and a `<noscript>`
 * rule in the root layout.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
