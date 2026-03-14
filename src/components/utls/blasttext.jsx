import { useState, useRef } from "react";

export default function BlastText({
    children,
    className = "",
    sparkClass = "bg-accent",
}) {
    const [sparks, setSparks] = useState([]);
    const activeRef = useRef(false);
    const containerRef = useRef(null);

    const triggerBlast = (e) => {
        if (activeRef.current) return;
        activeRef.current = true;

        const rect = containerRef.current.getBoundingClientRect();

        // mouse position relative to element
        const originX = e.clientX - rect.left;
        const originY = e.clientY - rect.top;

        const count = 64;

        const newSparks = Array.from({ length: count }).map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 90 + 40;

            return {
                id: i,
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                size: Math.random() * 6 + 4,
                originX,
                originY,
            };
        });

        setSparks(newSparks);

        setTimeout(() => {
            setSparks([]);
            activeRef.current = false;
        }, 700);
    };

    return (
        <span
            ref={containerRef}
            onMouseEnter={triggerBlast}
            className={`
                relative inline-block font-bold cursor-pointer
                transition-colors hover:text-accent
                transition-transform duration-200 hover:scale-110
                ${className}
            `}
        >
            {children}

            {sparks.map((spark) => (
                <span
                    key={spark.id}
                    className={`absolute rounded-full ${sparkClass} animate-blast pointer-events-none`}
                    style={{
                        width: spark.size,
                        height: spark.size,
                        left: spark.originX,
                        top: spark.originY,
                        "--x": `${spark.x}px`,
                        "--y": `${spark.y}px`,
                    }}
                />
            ))}
        </span>
    );
}