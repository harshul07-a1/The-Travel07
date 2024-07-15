document.addEventListener("DOMContentLoaded", function() {
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = 'translateX(-100px)';
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = 1;
            section.style.transform = 'translateX(0)';
        }, index * 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const trails = document.querySelectorAll('.trail');
    let cursorX = 0,
        cursorY = 0;
    let trailCoords = Array(trails.length).fill({ x: 0, y: 0 });
    const trailSpeed = 0.1;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX + window.pageXOffset;
        cursorY = e.clientY + window.pageYOffset;
    });

    function animate() {
        let prevX = cursorX;
        let prevY = cursorY;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        trails.forEach((trail, index) => {
            let trailX = trailCoords[index].x;
            let trailY = trailCoords[index].y;

            trailX += (prevX - trailX) * trailSpeed;
            trailY += (prevY - trailY) * trailSpeed;

            trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
            trailCoords[index] = { x: trailX, y: trailY };

            prevX = trailX;
            prevY = trailY;
        });

        requestAnimationFrame(animate);
    }

    animate();
});