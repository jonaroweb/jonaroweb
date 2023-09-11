const navBarEffect = () => {
    let lastScroll;
    const navMenuDropdown = document.querySelector(".navMenuDropdown");
    const drpIcon = document.querySelector(".drpIcon");
    const drpIcon2 = document.querySelector(".drpIcon2");
    const onBarAccueil = document.querySelector(".onBarAccueil");
    const onBarServices = document.querySelector(".onBarServices");
    const onBarContact = document.querySelector(".onBarContact");
    const collapseMenuDrpdown = document.querySelector(".collapseMenuDrpdown");
    const collapseMenu = document.querySelector(".collapseMenu");
    const hambBtn = document.querySelector(".hambBtn");
    const main = document.querySelector("main");
    const hambSpan1 = document.querySelector(".hambSpan1");
    const hambSpan2 = document.querySelector(".hambSpan2");
    const hambSpan3 = document.querySelector(".hambSpan3");
    const navBar = document.querySelector(".navBar");

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
            navBar.style.transition = "0.4s";
        } else {
            navBar.style.top = 0;
            navBar.style.transition = "0.4s";
        }
        lastScroll = window.scrollY;
    });
    collapseMenuServices.addEventListener("click", () => {
        collapseMenuDrpdown.classList.toggle("collapseMenuDrpdownShow");
        drpIcon2.classList.toggle("drpIconShow");
    });
    hambBtn.addEventListener("click", () => {
        collapseMenu.classList.toggle("collapseMenuOn");
        main.classList.toggle("mainSlide");
        hambSpan1.classList.toggle("hambSpan1On");
        hambSpan2.classList.toggle("hambSpan2On");
        hambSpan3.classList.toggle("hambSpan3On");
    });
    main.addEventListener("click", () => {
        collapseMenuDrpdown.classList.remove("collapseMenuDrpdownShow");
        drpIcon2.classList.remove("drpIconShow");
        collapseMenu.classList.remove("collapseMenuOn");
        hambSpan2.classList.remove("hambSpan2On");
        hambSpan3.classList.remove("hambSpan3On");
        hambSpan1.classList.remove("hambSpan1On");
    });
    window.addEventListener("load", () => {
        setTimeout(() => {
            navBar.style.top = 0;
            navBar.style.opacity = "1";
        }, 3000);
    });
};
navBarEffect();
const descriTextH1 = document.querySelector(".descriText h1");
const descriTextH2 = document.querySelector(".descriText h2");
const descriTextP = document.querySelector(".descriText p");

const descriImg = document.querySelector(".descriImg");
window.addEventListener("load", () => {
    setTimeout(() => {
        descriTextH2.style.opacity = "1";
        descriTextH2.style.transform = "none";
    }, 400);
    descriTextH1.style.transform = "none";
    setTimeout(() => {
        descriTextP.classList.add("descriTextPShow");
    }, 800);
    setTimeout(() => {
        descriImg.classList.add("descriImgShow");
    }, 1000);
});
