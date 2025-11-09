const categoryContainer = document.querySelector(".category-container");

let isDown = false;
let startX;
let scrollLeft;

categoryContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    categoryContainer.classList.add('active-drag');

    startX = e.pageX - categoryContainer.offsetLeft;
    scrollLeft = categoryContainer.scrollLeft;
});

categoryContainer.addEventListener('mouseup', () => {
    isDown = false;
    categoryContainer.classList.remove('active-drag');
});

categoryContainer.addEventListener('mouseleave', () => {
    isDown = false;
    categoryContainer.classList.remove('active-drag');
});

categoryContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - categoryContainer.offsetLeft;
    const walk = (x - startX) * 2;
    categoryContainer.scrollLeft = scrollLeft - walk;
});