import { useEffect, useRef, useState } from "react";

export const Counter = ({
    end,
    suffix = "",
    duration = 1500,
}) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;

                started.current = true;

                let start = 0;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;

                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 16);
            },
            {
                threshold: 0.5,
            }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={counterRef}>
            {count}
            {suffix}
        </span>
    );
};