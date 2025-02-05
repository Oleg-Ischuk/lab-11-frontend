document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    let activeIndex = -1;
    const circles = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    container.addEventListener('click', (event) => {
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;
        const radius = getRandom(10, 30);
        const color = `hsl(${getRandom(0, 360)}, 100%, 50%)`;
        addCircle(x, y, radius, color);
    });

    function addCircle(x, y, radius, color) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${radius * 2}px`;
        circle.style.height = `${radius * 2}px`;
        circle.style.backgroundColor = color;
        circle.style.left = `${x - radius}px`;
        circle.style.top = `${y - radius}px`;

        circle.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            removeCircle(circle);
        });

        container.appendChild(circle);
        circles.push(circle);
        setActiveCircle(circles.length - 1);
    }

    function removeCircle(circle) {
        const index = circles.indexOf(circle);
        if (index > -1) {
            circles.splice(index, 1);
            container.removeChild(circle);
            if (index === activeIndex) {
                setActiveCircle(circles.length > 0 ? (index % circles.length) : -1);
            } else if (index < activeIndex) {
                activeIndex--;
            }
        }
    }

    function setActiveCircle(index) {
        if (activeIndex >= 0) {
            circles[activeIndex].classList.remove('active');
        }
        activeIndex = index;
        if (activeIndex >= 0) {
            circles[activeIndex].classList.add('active');
        }
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'Tab':
                event.preventDefault();
                if (event.shiftKey) {
                    setActiveCircle(activeIndex - 1 < 0 ? circles.length - 1 : activeIndex - 1);
                } else {
                    setActiveCircle((activeIndex + 1) % circles.length);
                }
                break;
            case 'ArrowUp':
                moveCircle(0, -10);
                break;
            case 'ArrowDown':
                moveCircle(0, 10);
                break;
            case 'ArrowLeft':
                moveCircle(-10, 0);
                break;
            case 'ArrowRight':
                moveCircle(10, 0);
                break;
        }
    });

    function moveCircle(dx, dy) {
        const circle = circles[activeIndex];
        const currentX = parseInt(circle.style.left, 10);
        const currentY = parseInt(circle.style.top, 10);

        let newX = currentX + dx;
        let newY = currentY + dy;
        const radius = circle.offsetWidth / 2;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;

        if (newX + radius * 2 > container.clientWidth) newX = container.clientWidth - radius * 2;
        if (newY + radius * 2 > container.clientHeight) newY = container.clientHeight - radius * 2;

        circle.style.left = `${newX}px`;
        circle.style.top = `${newY}px`;
    }
});
