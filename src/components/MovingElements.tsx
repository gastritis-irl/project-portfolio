import {useEffect} from 'react';
import '../style/MovingElements.css';

const MovingElements = () => {
    useEffect(() => {
        // Create 100 small elements
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.className = 'small-element';
            document.body.appendChild(div);
        }

        // Apply initial random positions and speeds
        const elements = document.querySelectorAll('.small-element');
        const elementData = Array.from(elements).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
        }));

        // Update positions in an animation loop
        function animate() {
            elementData.forEach((data, index) => {
                data.x += data.speedX;
                data.y += data.speedY;
                elements[index].style.transform = `translate(${data.x}px, ${data.y}px)`;
            });
            requestAnimationFrame(animate);
        }

        animate();

        // Change direction towards cursor on mousemove
        window.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            elementData.forEach((data) => {
                const dx = clientX - data.x;
                const dy = clientY - data.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                data.speedX = dx / distance;
                data.speedY = dy / distance;
            });
        });

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('mousemove', () => {
            });
        };
    }, []);

    return null;
};

export default MovingElements;