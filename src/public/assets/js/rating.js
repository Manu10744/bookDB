let stars = document.querySelectorAll(".stars-wrapper .fa-star");

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", () => {
        let ratingValue = stars[i].getAttribute("value");

        for (let i = 0; i < ratingValue; i++) {
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.remove("active-rating");
            }

            // Fill the stars at click event
            stars[i].classList.remove("far");
            stars[i].classList.add("fas");

            for (let i = ratingValue; i < stars.length; i++) {
                // Reset stars from earlier clicks
                stars[i].classList.remove("fas");
                stars[i].classList.add("far");
            }
        }

        // Mark the star that was rated for getting the value later
        stars[i].classList.add("active-rating");
    });
}