let courses = document.getElementById("courseButton");
let coursesMenu = document.querySelector(".courses-menu-navigation");
let coursesArrow = document.getElementById("main-arrow");

let subCoursesMenu = document.getElementById("subCourses");
let tecnoCoursesMenu = document.getElementById("tecMenu");
let interCoursesMenu = document.getElementById("interMenu");

let tecCourse = document.getElementById("technology");
let interCourse = document.getElementById("interpesonal");

let tecArrow = document.getElementById("tecArrow");
let interArrow = document.getElementById("interArrow");

courses.addEventListener("click", function() {
    if(coursesMenu.style.display === "none") {
        coursesMenu.style.display = "flex";
        coursesArrow.style.transform = "rotate(180deg)";
    } else {
        coursesMenu.style.display = "none";
        coursesArrow.style.transform = "rotate(0deg)";
    }
})

tecCourse.addEventListener("click", function() {
    if(tecnoCoursesMenu.style.display === "none") {
        subCoursesMenu.style.display = "flex";
        tecnoCoursesMenu.style.display = "flex";
        tecArrow.style.transform = "rotate(180deg)";
    } else {
        subCoursesMenu.style.display = "none";
        tecnoCoursesMenu.style.display = "none";
        tecArrow.style.transform = "rotate(0deg)";
    }
})

interCourse.addEventListener("click", function() {
    if(interCoursesMenu.style.display === "none") {
        subCoursesMenu.style.display = "flex";
        interCoursesMenu.style.display = "flex";
        interArrow.style.transform = "rotate(180deg)";
    } else {
        subCoursesMenu.style.display = "none";
        interCoursesMenu.style.display = "none";
        interArrow.style.transform = "rotate(0deg)";
    }
})

function validate() {
    
}

let emailButton = document.getElementById("contact-button");

emailButton.addEventListener("click", function() {
    const email = document.getElementById('email').value;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const result = regex.test(email);

    let successMessage = document.getElementById("emailSuccess");
    let errorMessage = document.getElementById("emailError");

    if(result === false) {
        successMessage.style.display = "none";
        errorMessage.style.display = "flex";
    } else {
        errorMessage.style.display = "none";
        successMessage.style.display = "flex";;
    }
})
