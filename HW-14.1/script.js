const images = document.querySelectorAll('.slider-img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    dots[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    dots[index].classList.add('active');
    imageIndex = index;
    toggleButtons();
}

function toggleButtons() {
    prevButton.style.display = imageIndex === 0 ? 'none' : 'block';
    nextButton.style.display = imageIndex === images.length - 1 ? 'none' : 'block';
}

prevButton.addEventListener('click', () => { 
    let index = imageIndex - 1;
    if (index < 0) {
        index = images.length - 1;
    }
    show(index);
});

nextButton.addEventListener('click', () => { 
    let index = imageIndex + 1;
    if (index >= images.length) {
        index = 0;
    }
    show(index);
});

dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        show(dotIndex);
    });
});

show(imageIndex);
toggleButtons();
