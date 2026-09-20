// ========================================
// NAVBAR EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ========================================
// GALLERY LIGHTBOX
// ========================================

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxPrev = document.getElementById("lightboxPrev");

const lightboxNext = document.getElementById("lightboxNext");


let currentIndex = 0;


// Ambil semua gambar gallery

const galleryImages = Array.from(galleryItems).map(item => {

    return item.querySelector("img").src;

});


// Menampilkan gambar

function showImage(index) {

    currentIndex = index;

    lightboxImage.src = galleryImages[currentIndex];

}


// Buka lightbox

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        showImage(index);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Tutup lightbox

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener("click", closeLightbox);


// Klik area luar gambar

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// Next

lightboxNext.addEventListener("click", (event) => {

    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});


// Previous

lightboxPrev.addEventListener("click", (event) => {

    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    showImage(currentIndex);

});


// ========================================
// KEYBOARD LIGHTBOX
// ========================================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }


    if (event.key === "Escape") {

        closeLightbox();

    }


    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= galleryImages.length) {

            currentIndex = 0;

        }

        showImage(currentIndex);

    }


    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = galleryImages.length - 1;

        }

        showImage(currentIndex);

    }

});


// ========================================
// LETTER INTERACTIVE
// ========================================

const openLetterBtn = document.getElementById("openLetterBtn");

const letterBox = document.getElementById("letterBox");


openLetterBtn.addEventListener("click", () => {

    letterBox.classList.toggle("open");


    if (letterBox.classList.contains("open")) {

        openLetterBtn.innerHTML = "💌 Tutup Surat";

    } else {

        openLetterBtn.innerHTML = "💌 Buka Surat";

    }

});

// ========================================
// MUSIC PLAYER
// ========================================

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");


musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "❚❚";

    } else {

        music.pause();

        musicButton.innerHTML = "▶";

    }

});

// ========================================
// COUNTDOWN
// ========================================

// GANTI TANGGAL INI NANTI
// Format:
// Tahun-Bulan-TanggalTJam:Menit:Detik

const targetDate = new Date(
    "2027-08-02T00:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    // Jika waktu sudah lewat

    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    // Hitung waktu

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Tampilkan

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


// Jalankan pertama kali

updateCountdown();


// Update setiap detik

setInterval(updateCountdown, 1000);

// ========================================
// SURPRISE
// ========================================

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseContent =
    document.getElementById("surpriseContent");


surpriseButton.addEventListener("click", () => {

    surpriseContent.classList.add("show");

    surpriseButton.innerHTML =
        "❤️ Surprise Dibuka";

    surpriseButton.disabled = true;

    surpriseContent.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createHearts();

});


// ========================================
// FLOATING HEARTS
// ========================================

function createHearts() {

    const heartCount = 18;

    for (let i = 0; i < heartCount; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.innerHTML = "❤️";

        // Posisi horizontal acak

        heart.style.left =
            Math.random() * 100 + "%";


        // Ukuran acak

        const size =
            Math.random() * 15 + 12;

        heart.style.fontSize =
            size + "px";


        // Durasi animasi acak

        const duration =
            Math.random() * 3 + 3;

        heart.style.animationDuration =
            duration + "s";


        // Delay sedikit agar tidak muncul bersamaan

        heart.style.animationDelay =
            Math.random() * 0.8 + "s";


        document.body.appendChild(heart);


        // Hapus setelah animasi selesai

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}
