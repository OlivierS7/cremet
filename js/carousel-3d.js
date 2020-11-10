let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel_cell');
let cellCount = 6;
let selectedIndex = 0;
let cellWidth = carousel.offsetWidth;
let radius, theta;

function rotateCarousel() {
    let angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function() {
    selectedIndex--;
    rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
    selectedIndex++;
    rotateCarousel();
});


function changeCarousel() {
    theta = 360 / cellCount;
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

    rotateCarousel();
}
changeCarousel();