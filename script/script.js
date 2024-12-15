const textImage = document.getElementsByClassName('tree-item');
const sections = ['apple', 'pear', 'peach', 'plum', 'cherry']; // ID informacji o drzewkach
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

for (let i = 0; i < textImage.length; i++) {
    textImage[i].addEventListener('click', () => {
        const targetSection = document.getElementById(sections[i]); // Pobierz odpowiedni element na podstawie indeksu
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Płynne przewijanie
        }
    });
}

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

