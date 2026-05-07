const SQUARE_COUNT = 30;
const TIMER_SPEED = 16.6;
const SPEED = 7;
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#square").addEventListener("mouse", () => {
        alert("OMG YOU CLICKED ME!");
    });
    let box = document.querySelector("#box");

    for (let i = 0; i < SQUARE_COUNT; i++) {
        let square = document.createElement('img');
        square.src = "laughing_man.jpg";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";
        square.addEventListener("mouseover", () => {
            square.src = "orochimaru_50x50.jpg";
        });
        square.addEventListener("mouseout", () => {
            square.src = "laughing_man.jpg";
        });

        square.style.left = Math.random() * 450 + "px";
        square.style.top = Math.random() * 350 + "px";


        box.appendChild(square);
    }
    Array.from(box.children).forEach((element) => {
        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random() * 2 - 1);
        let dy = SPEED * (Math.random() * 2 - 1);

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;

        setInterval(() => {

            if (x <= 0 || x >= maxX) {
                dx *= -1;
                element.style.borderColor = newColor();
                element.style.backgroundColor = getColor();

            }

            if (y <= 0 || y >= maxY) {
                dy *= -1;
                element.style.borderColor = newColor();
                element.style.backgroundColor = getColor();

            }
            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";

        }, TIMER_SPEED)
    });
});
function newColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}