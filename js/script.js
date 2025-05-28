// ==================== Aside Navigation ====================
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i=0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j=0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for(let i=0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// ==================== Website Items ====================
const quiz = document.getElementById('quiz');
quiz.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Quiz/quiz.html", "_blank");
})

const quiz2 = document.getElementById('quiz2');
quiz2.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Quiz/quiz2/quiz2.html", "_blank");
})

const kumpulanmatkul = document.getElementById('materikuliah');
kumpulanmatkul.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/materikuliah/login_form.html", "_blank");
})

const loginform = document.getElementById('loginform');
loginform.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/loginform/index_loginform.html", "_blank");
})

const parallex = document.getElementById('parallex');
parallex.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Home_page_parallex/index_home.html", "_blank");
})

const personality_test = document.getElementById('personality_test');
personality_test.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/personality_test/index_personality.html", "_blank");
})

const text_corrector = document.getElementById('text_corrector');
text_corrector.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/text_corrector/index_autocorrect_text.html", "_blank");
})

const web_magang = document.getElementById('web_magang');
web_magang.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/web_magang/index_webmagang.html", "_blank");
})

const memento_exercise = document.getElementById('memento_exercise');
memento_exercise.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/memento_exercise/index_mementoexercise.html", "_blank");
})

const sistem_BPBL = document.getElementById('sistem_BPBL');
sistem_BPBL.addEventListener("click", () => {
    window.open("https://aenjeaer.github.io/portfolio/pages/Sistem_BPBL/index_sistem_BPBL", "_blank");
})

// ==================== Drawing Data ====================
const drawingData = [
    {
        id: 1,
        title: "Timelapse Gambar Digital 1",
        date: "11/05/2025",
        mediaUrl: "https://aenjeaer.github.io/portfolio/videos/menggambar/timelapse110525.mp4",
        thumbnailUrl: "https://aenjeaer.github.io/portfolio/images/menggambar/110525.png",
        type: "video"
    },
    {
        id: 2,
        title: "Timelapse Gambar Digital 2",
        date: "13/05/2025",
        mediaUrl: "https://aenjeaer.github.io/portfolio/videos/menggambar/timelapse130525.mp4",
        thumbnailUrl: "https://aenjeaer.github.io/portfolio/images/menggambar/130525.png",
        type: "video"
    },
    {
        id: 3,
        title: "Gambar Digital 3",
        date: "28/05/2025",
        mediaUrl: "https://aenjeaer.github.io/portfolio/videos/menggambar/timelapse280525.mp4",
        thumbnailUrl: "https://aenjeaer.github.io/portfolio/images/menggambar/280525.png",
        type: "video"
    }
];

// ==================== Carousel ====================
function initCarousel() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let slideInterval;
    const slideDuration = 60000; // 2 detik
    
    // Add media to carousel
    drawingData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        if (item.type === 'video') {
            slide.innerHTML = `
                <video class="carousel-media" loop muted>
                    <source src="${item.mediaUrl}" type="video/mp4">
                    Browser Anda tidak mendukung video.
                </video>
                <div class="slide-caption">
                    <h3>${item.title}</h3>
                    <p>Rilis tanggal ${item.date}</p>
                </div>
                <button class="play-pause-btn">▶</button>
            `;
        } else {
            slide.innerHTML = `
                <img class="carousel-media" src="${item.mediaUrl}" alt="${item.title}">
                <div class="slide-caption">
                    <h3>${item.title}</h3>
                    <p>Rilis tanggal ${item.date}</p>
                </div>
            `;
        }
        
        carouselSlide.appendChild(slide);
        
        // Indicators
        const indicator = document.createElement('span');
        indicator.dataset.index = index;
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Set initial position
    updateCarousel();
    
    // Update carousel display
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        document.querySelectorAll('.carousel-indicators span').forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
        
        // Handle video playback
        handleVideoPlayback(slides[currentIndex]);
        
        resetInterval();
    }
    
    // Handle video playback
    function handleVideoPlayback(currentSlide) {
        // Pause all videos first
        document.querySelectorAll('.carousel-media').forEach(media => {
            if (media.tagName === 'VIDEO') {
                media.pause();
            }
        });
        
        const video = currentSlide.querySelector('video');
        const playPauseBtn = currentSlide.querySelector('.play-pause-btn');
        
        if (video) {
            // Auto-play video when slide is active
            video.play().catch(e => console.log("Autoplay prevented:", e));
            
            if (playPauseBtn) {
                playPauseBtn.addEventListener('click', () => {
                    if (video.paused) {
                        video.play();
                        playPauseBtn.textContent = '❚❚';
                    } else {
                        video.pause();
                        playPauseBtn.textContent = '▶';
                    }
                });
                
                video.addEventListener('play', () => {
                    if (playPauseBtn) playPauseBtn.textContent = '❚❚';
                });
                
                video.addEventListener('pause', () => {
                    if (playPauseBtn) playPauseBtn.textContent = '▶';
                });
            }
        }
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
    });
    
    // Pause on hover
    carouselSlide.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Resume on mouse leave
    carouselSlide.addEventListener('mouseleave', resetInterval);
    
    // Start auto-slide
    resetInterval();
}

// ==================== Gallery ====================
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const aside = document.querySelector('.aside');
    const navTogglerBtn = document.querySelector('.nav-toggler');
    const allSections = document.querySelectorAll('.section');
    const modal = document.querySelector('.modal');
    
    drawingData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.thumbnailUrl}" alt="${item.title}" 
                 data-media="${item.thumbnailUrl}" // Ubah ini dari mediaUrl ke thumbnailUrl
                 data-type="image" // Ubah type menjadi image
                 data-title="${item.title}">
            ${item.type === 'video' ? '' : ''}
        `;
        
        galleryGrid.appendChild(galleryItem);
    });

    // Gunakan event delegation untuk gallery items
    galleryGrid.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-item img')) {
            const img = e.target.closest('.gallery-item img');
            const mediaType = img.dataset.type;
            const mediaUrl = img.dataset.media;
            const title = img.dataset.title;
            
            // Close sidebar if open
            if(aside.classList.contains('open')) {
                aside.classList.remove('open');
                navTogglerBtn.classList.remove('open');
                allSections.forEach(section => {
                    section.classList.remove('open');
                });
            }
            
            // Hide nav toggler
            navTogglerBtn.style.display = 'none';
            
            // Prepare modal content
            modal.innerHTML = `
                <span class="close-modal">×</span>
                <div class="modal-content-container"></div>
                <div class="modal-caption">${title}</div>
            `;
            
            const container = modal.querySelector('.modal-content-container');
            
            // Selalu tampilkan gambar, bahkan untuk item yang aslinya video
            container.innerHTML = `<img class="modal-media" src="${mediaUrl}" alt="${title}">`;
            
            // Show modal
            document.body.style.overflow = 'hidden';
            modal.style.display = 'block';
            
            // Tambahkan event listener untuk close modal
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                navTogglerBtn.style.display = 'flex';
            });
        }
    });
    
    // Tetap pertahankan event listener untuk klik di luar modal
    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            navTogglerBtn.style.display = 'flex';
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            navTogglerBtn.style.display = 'flex';
        }
    });
}

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initGallery();
});