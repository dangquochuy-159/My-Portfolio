'use client';
import React, { useState } from 'react';

interface MousePosition {
    x: number | null;
    y: number | null;
}

const MouseTracker = ({ children }: { children: React.ReactNode }) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {mousePosition.x !== null && mousePosition.y !== null && (
                <div
                    className="hidden xl:block"
                    style={{
                        position: 'fixed',
                        left: mousePosition.x - 10,
                        top: mousePosition.y - 10,
                        width: '1px',
                        height: '1px',
                        boxShadow: '0 0 500px 40px rgba(255, 255, 255,1)',
                    }}
                />
            )}
            {children}
        </div>
    );
};

export default MouseTracker;
