// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '✈️' : '🛸';
}

// Name pronunciation audio
const nameAudioBtn = document.getElementById('name-audio-btn');
const nameAudio = document.getElementById('name-audio');

if (nameAudioBtn && nameAudio) {
    nameAudioBtn.addEventListener('click', () => {
        if (nameAudio.paused) {
            nameAudio.play();
            nameAudioBtn.textContent = '🔊';
        } else {
            nameAudio.pause();
            nameAudio.currentTime = 0;
            nameAudioBtn.textContent = '🔇';
        }
    });

    // Reset button icon when audio ends
    nameAudio.addEventListener('ended', () => {
        nameAudioBtn.textContent = '🔊';
    });

    // Update icon based on playing state
    nameAudio.addEventListener('play', () => {
        nameAudioBtn.textContent = '🔊';
    });

    nameAudio.addEventListener('pause', () => {
        if (nameAudio.currentTime === 0) {
            nameAudioBtn.textContent = '🔊';
        } else {
            nameAudioBtn.textContent = '⏸️';
        }
    });
}

// Contact Modal functionality
const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const contactModalClose = document.querySelector('.contact-modal-close');

if (contactLink && contactModal) {
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    if (contactModalClose) {
        contactModalClose.addEventListener('click', () => {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside of it
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('show')) {
            contactModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

