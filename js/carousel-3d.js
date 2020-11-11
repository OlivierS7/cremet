let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel_cell');
let cellCount = 5;
let selectedIndex = 0;
let cellWidth;
let radius, theta, angle;
let counter = 0;

function changeCarousel() {
    if (selectedIndex > 4) {
        selectedIndex = 0;
    } else if (selectedIndex < 0) {
        selectedIndex = 4;
    }
    let nextSlide = selectedIndex + 1;
    let previousSlide = selectedIndex - 1;
    if (nextSlide > 4) {
        nextSlide = 0;
    }
    if (previousSlide < 0) {
        previousSlide = 4;
    }
    angle = theta * counter * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY(' + angle + 'deg)';
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (i == nextSlide || i == previousSlide || i == selectedIndex) {
            cell.style.opacity = 1;
        } else {
            cell.style.opacity = 0;
        }
    }
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
    counter--;
    changeCarousel(selectedIndex--);
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
    counter++;
    changeCarousel(selectedIndex++);
});


function startCarousel() {
    theta = 360 / cellCount;
    cellWidth = carousel.offsetWidth;
    radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount));
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (i < cellCount) {
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            cell.style.transform = 'none';
        }
    }
    changeCarousel(1);
}
startCarousel();


window.addEventListener("resize", function() {
    cellWidth = carousel.offsetWidth;
    radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount));
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY(' + angle + 'deg)';
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (i < cellCount) {
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            cell.style.transform = 'none';
        }
    }
})