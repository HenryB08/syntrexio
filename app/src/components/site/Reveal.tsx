import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("in-view");
    };

    // If the element is already in (or near) the viewport at mount - which is
    // the case for above-the-fold content right after a client-side route
    // change - reveal it synchronously before paint. Waiting for the async
    // IntersectionObserver left the whole new page hidden for ~100ms, which
    // showed up as a blank/distorted transition frame.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) {
      reveal();
      return;
    }

    // Otherwise reveal on scroll - the moment any part enters the viewport,
    // so content is never left blank while partially visible.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
