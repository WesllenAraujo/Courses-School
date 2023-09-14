let courses = document.getElementById("courseButton");
let coursesMenu = document.querySelector(".courses-menu-navigation");
let coursesArrow = document.getElementById("main-arrow");

courses.addEventListener("click", function() {
    if(coursesMenu.style.display === "none") {
        coursesMenu.style.display = "flex";
        coursesArrow.style.transform = "rotate(180deg)";
    } else {
        coursesMenu.style.display = "none";
        coursesArrow.style.transform = "rotate(0deg)";
    }
})
