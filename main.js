const card = document.querySelector(".card");
const shareButtons = document.querySelectorAll('[data-button="share"]');

let isPopupVisible = false;

shareButtons.forEach((elem) =>
  elem.addEventListener("click", () => {
    isPopupVisible = !isPopupVisible;
    card.classList.toggle("show-popup", isPopupVisible);
  })
);
