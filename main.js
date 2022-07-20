const searchButton = document.querySelector(".header-menu__search");
const searchInput = document.querySelector(".header-input__search");
const closeButton = document.querySelector(".header-menu__close");
const expandClass = "is-active";

searchButton.addEventListener("click", function(){
    searchInput.classList.add(expandClass);
    searchButton.classList.remove(expandClass);
    closeButton.classList.add(expandClass);
})

closeButton.addEventListener("click", function(){
    searchInput.classList.remove(expandClass);
    searchButton.classList.add(expandClass);
    closeButton.classList.remove(expandClass);
})