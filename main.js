window.onbeforeunload = (event) => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
    // Optionally, you can return a string to display a confirmation message.
    // return "Are you sure you want to leave?";
};

// togle &responsivw nav
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();