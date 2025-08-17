//Pre-loader
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    preloader.classList.add('loaded');
});

//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});


//Spotify Player Embutido
const trackItems = document.querySelectorAll('.setlist-tracks li');

const playerContainer = document.getElementById('spotify-player-container');

trackItems.forEach(item => {
    item.addEventListener('click', () => {
        const spotifyUri = item.dataset.spotifyUri;

        if (!spotifyUri) {
            console.error('URI do Spotify não encontrado para este item.');
            return;
        }

        const trackId = spotifyUri.split(':')[2];

        const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

        const iframe = `
            <iframe
                style="border-radius:12px"
                src="${embedUrl}"
                width="100%"
                height="80"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        `;

        playerContainer.innerHTML = iframe;
    });
});

// Contador regressivo para o evento
const countdownDate = new Date("October 4, 2025 21:00:00").getTime();

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const countdownInterval = setInterval(() => {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-container").innerHTML = "<h2>O GRANDE DIA CHEGOU!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');

}, 1000); 

//Discografia Modal
const albumCards = document.querySelectorAll('.album-card');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');

const modalCover = document.getElementById('modal-album-cover');
const modalTitle = document.getElementById('modal-album-title');
const modalYear = document.getElementById('modal-album-year');
const modalTracks = document.getElementById('modal-album-tracks');

albumCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.dataset.title;
        const year = card.dataset.year;
        const tracksString = card.dataset.tracks;
        const coverSrc = card.querySelector('img').src;

        modalCover.src = coverSrc;
        modalTitle.textContent = title;
        modalYear.textContent = `Ano de lançamento: ${year}`;
        modalTracks.innerHTML = '';

        const tracksArray = tracksString.split(',');
        tracksArray.forEach(trackName => {
            const li = document.createElement('li');
            li.textContent = trackName;
            modalTracks.appendChild(li);
        });

        modalOverlay.classList.add('open');
    });
});

function closeModal() {
    modalOverlay.classList.remove('open');
}

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

//Galeria
const galleryContainer = document.getElementById('lightgallery-container');

if (galleryContainer) {
    lightGallery(galleryContainer, {
        plugins: [lgVideo], 
        speed: 500, 
        download: false, 
        selector: '.gallery-item' 
    });
}

AOS.init();