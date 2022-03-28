const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Expand Left
left.addEventListener('mouseenter', ()=>container.classList.add('hover-left'));
left.addEventListener('mouseleave', ()=>container.classList.remove('hover-left'));

// Expand Right
right.addEventListener('mouseenter', ()=>container.classList.add('hover-right'));
right.addEventListener('mouseleave', ()=>container.classList.remove('hover-right'));