document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    document.querySelector(".prev-button").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next-button").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Inicialmente, muestra la primera imagen
    showImage(currentIndex);
});
