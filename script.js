// Simple scroll to section functionality for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});


const nameElement = document.getElementById('name');
const fullName = "Erlangga Tresnamada Muliawan";
let index = 0;
let isDeleting = false;

function type() {
  const currentText = fullName.slice(0, index);
  nameElement.textContent = currentText;

  if (isDeleting) {
    index--;
    if (index < 0) {
      isDeleting = false;
      index = 0;
    }
  } else {
    index++;
    if (index > fullName.length) {
      isDeleting = true;
    }
  }

  const typingSpeed = isDeleting ? 100 : 200;
  setTimeout(type, typingSpeed);
}

type();