let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel_cell');
let cellCount = 6;
let selectedIndex = 0;
let cellWidth;
let radius, theta, angle;

function changeCarousel() {
    angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
    selectedIndex--;
    changeCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
    selectedIndex++;
    changeCarousel();
});


function startCarousel() {
    theta = 360 / cellCount;
    cellWidth = carousel.offsetWidth;
    radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount));
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (i < cellCount) {
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            cell.style.transform = 'none';
        }
    }
    changeCarousel();
}
startCarousel();


window.addEventListener("resize", function() {
    cellWidth = carousel.offsetWidth;
    radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount));
    console.log("test");
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY(' + angle + 'deg)';
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (i < cellCount) {
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = 'rotateY(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            cell.style.transform = 'none';
        }
    }
})