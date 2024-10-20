import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const ScrollProgressBar = () => {
    const [maxScrollPercentage, setMaxScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScrollProgress = (scrollTop / scrollHeight) * 100;

        if (currentScrollProgress > maxScrollPercentage) {
            setMaxScrollPercentage(currentScrollProgress);
            localStorage.setItem("maxScrollProgress", currentScrollProgress); // Store max progress in localStorage
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [maxScrollPercentage]);

    useEffect(() => {
        const savedProgress = localStorage.getItem("maxScrollProgress");
        if (savedProgress) {
            setMaxScrollPercentage(parseFloat(savedProgress));
        }
    }, []);

    return (
        <div>
            <ProgressBar
                now={maxScrollPercentage}
                label={`${Math.round(maxScrollPercentage)}%`}
                style={{ height: "8px", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
            />
            <p>Scroll Progress: {Math.round(maxScrollPercentage)}%</p> {/* Display the numerical value */}
        </div>
    );
};

export default ScrollProgressBar;
