// Navbar color change on scroll with smooth animation
let lastScrollTop = 0;
let isScrolling = false;

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(function () {
            if (currentScroll > 100) {
                navbar.classList.remove('transparent');
                navbar.classList.add('solid');

                if (currentScroll > lastScrollTop && currentScroll > 200) {
                    // Scrolling down - add subtle slide effect
                    navbar.classList.add('scrolled');
                }
            } else {
                navbar.classList.remove('solid', 'scrolled');
                navbar.classList.add('transparent');
            }

            lastScrollTop = currentScroll;
            isScrolling = false;
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Funcionalidad de login pendiente de implementación en el backend');
});

// Animation on scroll for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and team members
document.querySelectorAll('.feature-card, .team-member, .icon-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Funcionalidad del navbar responsive
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace (móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Cambio de estilo del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.remove('transparent');
            navbar.classList.add('solid', 'scrolled');
        } else {
            navbar.classList.remove('solid', 'scrolled');
            navbar.classList.add('transparent');
        }
    });

    // Smooth scroll para los enlaces del navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destacar enlace activo según la sección visible
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Funcionalidad del formulario de login (opcional)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Aquí puedes añadir tu lógica de autenticación
            console.log('Email:', email);
            console.log('Password:', password);
            
            // Ejemplo de validación básica
            if (email && password) {
                alert('¡Inicio de sesión exitoso!');
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});