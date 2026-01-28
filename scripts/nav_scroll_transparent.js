window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        document.body.classList.remove("transparent-nav");
    } else {
        document.body.classList.add("transparent-nav");
    }
});
