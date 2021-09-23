const burger = document.querySelector(".humburger-menu"),
      menuElem = document.querySelector(".menu"),
      link = document.querySelectorAll(".menu-list__link");

const toggleMenu = () => {
    menuElem.classList.toggle("menu-active");
    burger.classList.toggle("humburger-menu-active")
}

burger.addEventListener("click", () => toggleMenu());

link.forEach(elem => {
    elem.addEventListener("click", () => toggleMenu());
})

