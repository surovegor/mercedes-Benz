const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]"),
      tabsContentElems = document.querySelectorAll("[data-tabs-field]"),
      tabsDesign = document.querySelectorAll("design__title");

for(let btn of tabsHandlerElems) {
    btn.addEventListener("click", () => { 
        tabsHandlerElems.forEach(item => item.classList.remove("design-list__item_active"));
        btn.classList.add("design-list__item_active");

        tabsContentElems.forEach(content => {
            if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        });
    });
}