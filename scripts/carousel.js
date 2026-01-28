const script = document.currentScript;
const jsonFile = script.dataset.jsonPath;

let currentIndex = 0;

initCarousel();
setInterval(() => advanceCarousel(1), 5000);

function initCarousel() {
    const carousel = document.getElementById("Carousel");
    fetch(jsonFile)
    .then(res => res.json())
    .then(data => {
        if (!data.length) return;
        buildSlides(carousel, data);
        buildDots(data.length);
        initNavigation(data.length);
    });
}

function buildSlides(carousel, data) {
    data.forEach(slide => {
    const carouselSlide = document.createElement("div");
    carouselSlide.classList.add("carousel-slide");

    if (slide.backgroundImage) {
        const img = document.createElement("img");
        img.src = slide.backgroundImage;
        img.alt = slide.title || "";
        img.loading = "lazy";
        img.classList.add("carousel-bg");
        carouselSlide.appendChild(img);
    }

    const slideTitle = document.createElement("h3");
    slideTitle.classList.add("carousel-title");
    slideTitle.textContent = slide.title;

    const slideDesc = document.createElement("p");
    slideDesc.classList.add("carousel-desc");
    slideDesc.textContent = slide.description;

    // Button as a link
    const slideLink = document.createElement("a");
    slideLink.classList.add("carousel-btn");
    slideLink.textContent = slide.buttonText;

    if (slide.buttonLink) {
        slideLink.href = slide.buttonLink;
    } else {
        slideLink.href = "#";
    }

    carouselSlide.append(slideTitle, slideDesc, slideLink);
    carousel.appendChild(carouselSlide);
    });
}


function buildDots(count) {
    const dotsContainer = document.getElementById("Dots");

    for (let i = 0; i < count; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.dataset.index = i;
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
}

function initNavigation(slideCount) {
    const carousel = document.getElementById("Carousel");
    const dots = document.querySelectorAll(".dot");

    document.getElementById("Prev").onclick = () => move(-1, slideCount);
    document.getElementById("Next").onclick = () => move(1, slideCount);

    dots.forEach(dot => {
    dot.onclick = () => {
        currentIndex = Number(dot.dataset.index);
        update(carousel, dots);
    };
    });
}

function advanceCarousel(dir) {
    const dots = document.querySelectorAll(".dot");
    move(dir, dots.length);
}

function move(dir, count) {
    currentIndex = (currentIndex + dir + count) % count;
    const carousel = document.getElementById("Carousel");
    const dots = document.querySelectorAll(".dot");
    update(carousel, dots);
}

function update(carousel, dots) {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((d, i) =>
    d.classList.toggle("active", i === currentIndex)
    );
}
