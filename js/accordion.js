const btns = document.querySelectorAll(".feature__link"),
      lists = document.querySelectorAll(".feature-sub");

btns.forEach((btnItem, index) => {
    btnItem.addEventListener("click", () => {
        btns.forEach((btnI, i) => {
            if(btnItem === btnI) {
                btnItem.classList.toggle("feature__link_active")
                lists[i].classList.toggle("hidden")
            } else {
                btnI.classList.remove("feature__link_active");
                lists[i].classList.add("hidden");
            }
         });
    });
});

