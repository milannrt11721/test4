const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleBtn.classList.toggle('rotated');
});

AOS.init();