document.addEventListener("DOMContentLoaded", function() {
    const cardsImages = document.querySelector(".images");
    if (cardsImages) {
        const cardListImages = cardsImages.querySelector(".images__list");
        const apiUrl = "images.json";

        const createCard = (imageUrl, imageAlt, imageWidth) => {
            return `
                <li class="images__item">
                    <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                    <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
                </li>
            `;
        };

        fetch(apiUrl)
            .then((response) => response.json())
            .then((images) => {
                images.forEach((item) => {
                    const cardElement = createCard(
                        item.imageUrl,
                        item.imageAlt,
                        item.imageWidth
                    );
                    cardListImages.insertAdjacentHTML("beforeend", cardElement);
                });

                const pictures = cardListImages.querySelectorAll(".images__item");
                pictures.forEach(item => {
                    item.addEventListener("click", () => {
                        const imgs = item.querySelectorAll(".images__picture");
                        imgs.forEach(img => {
                            img.style.display = (img.style.display === "none") ? "block" : "none";
                        });
                    });
                });
            });
    }
});