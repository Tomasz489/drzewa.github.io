const textImage = document.getElementsByClassName('tree-item');
const sections = ['apple', 'pear', 'peach', 'plum', 'cherry']; 
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

for (let i = 0; i < textImage.length; i++) {
    textImage[i].addEventListener('click', () => {
        const targetSection = document.getElementById(sections[i]); 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
}

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

