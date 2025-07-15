// Smooth scroll effect (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple form feedback animation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
});

// Hide video when scrolling past the hero section
 const hero = document.querySelector('.hero');
    const video = document.querySelector('.hero-bg-video');

    let wasOutOfView = false;

    window.addEventListener('scroll', function() {
      if (!hero || !video) return;
      const rect = hero.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && wasOutOfView) {
        video.currentTime = 0;
        video.play();
      }
      wasOutOfView = !inView;
    });

 // Words to loop through
    const words = [
      "Web Development",
      "Game Development",
      "Pawno Scripting",
      "Graphics Design",
      "SQL Data Management",
    ];
    const typedText = document.getElementById("typed-text");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let pauseTime = 1200;

    function typeLoop() {
      if (!typedText) return;
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        if (charIndex < currentWord.length) {
          charIndex++;
          setTimeout(typeLoop, typingSpeed);
        } else {
          setTimeout(() => { isDeleting = true; typeLoop(); }, pauseTime);
        }
      } else {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        if (charIndex > 0) {
          charIndex--;
          setTimeout(typeLoop, typingSpeed + 40);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeLoop, 600);
        }
      }
    }
    typeLoop();

     // Images for each project (add more as needed)
  const projectImages = [
    [
      "JolliBeng2.png",
      "JolliBeng1.png"
    ],
    [
      "RTS2.png",
      "RTS1.PNG"
    ]
  ];

  document.querySelectorAll('.project-card').forEach((card, idx) => {
    const img = card.querySelector('.project-image');
    const prevBtn = card.querySelector('.prev-btn');
    const nextBtn = card.querySelector('.next-btn');
    let current = 0;

    function updateImage() {
      img.src = projectImages[idx][current];
    }

    prevBtn.addEventListener('click', () => {
      current = (current - 1 + projectImages[idx].length) % projectImages[idx].length;
      updateImage();
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % projectImages[idx].length;
      updateImage();
    });

    // Show the first image immediately
    updateImage();
  });

// Reveal on scroll animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}
revealOnScroll();