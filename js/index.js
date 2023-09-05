const navBarEffect = () => {
    let lastScroll;
    const navMenuDropdown = document.querySelector(".navMenuDropdown");
    const drpIcon = document.querySelector(".drpIcon");
    const onBarAccueil = document.querySelector(".onBarAccueil");
    const onBarServices = document.querySelector(".onBarServices");
    const onBarContact = document.querySelector(".onBarContact");
    const collapseMenuDrpdown = document.querySelector(".collapseMenuDrpdown");
    const collapseMenu = document.querySelector(".collapseMenu");
    const hambBtn = document.querySelector(".hambBtn");

    services.addEventListener("click", () => {
        navMenuDropdown.classList.toggle("navMenuDropdownShow");
        drpIcon.classList.toggle("drpIconShow");
    });
    services.addEventListener("mouseover", () => {
        navMenuDropdown.classList.add("navMenuDropdownShow");
        drpIcon.classList.add("drpIconShow");
    });
    services.addEventListener("mouseout", () => {
        navMenuDropdown.classList.remove("navMenuDropdownShow");
        drpIcon.classList.remove("drpIconShow");
    });
    navMenuDropdown.addEventListener("mouseover", () => {
        navMenuDropdown.classList.add("navMenuDropdownShow");
    });
    navMenuDropdown.addEventListener("mouseout", () => {
        navMenuDropdown.classList.remove("navMenuDropdownShow");
    });
    accueil.addEventListener("mouseover", () => {
        onBarAccueil.classList.add("onBarAll");
    });
    accueil.addEventListener("mouseout", () => {
        onBarAccueil.classList.remove("onBarAll");
    });
    services.addEventListener("mouseover", () => {
        onBarServices.classList.add("onBarAll");
    });
    services.addEventListener("mouseout", () => {
        onBarServices.classList.remove("onBarAll");
    });
    contact.addEventListener("mouseover", () => {
        onBarContact.classList.add("onBarAll");
    });
    contact.addEventListener("mouseout", () => {
        onBarContact.classList.remove("onBarAll");
    });
    window.addEventListener("scroll", () => {
        if (lastScroll < window.scrollY) {
            navBar.style.top = "-90px";
        } else {
            navBar.style.top = 0;
        }
        lastScroll = window.scrollY;
    });
    collapseMenuServices.addEventListener("click", () => {
        collapseMenuDrpdown.classList.toggle("collapseMenuDrpdownShow");
    });
    hambBtn.addEventListener("click", () => {
        collapseMenu.classList.toggle("collapseMenuOn");
    });
};
navBarEffect();
