var { coursesNavigation, subCoursesNavigation, subCoursesMenu, subCoursesArrow, courses, coursesMenu, mainCourseArrow, emailButton } = variables();

showSubCourses();

showCourses();

emailValidate();

function emailValidate() {
    emailButton.addEventListener("click", function () {
        const email = document.getElementById('email').value;
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const result = regex.test(email);

        let successMessage = document.getElementById("emailSuccess");
        let errorMessage = document.getElementById("emailError");

        if (result === false) {
            successMessage.style.display = "none";
            errorMessage.style.display = "flex";
        } else {
            errorMessage.style.display = "none";
            successMessage.style.display = "flex";;
        }
    });
}

function showCourses() {
    courses.addEventListener("click", function () {
        if (coursesMenu.style.display === "none") {
            coursesMenu.style.display = "flex";
            mainCourseArrow.classList.add("arrow-active");
        } else {
            coursesMenu.style.display = "none";
            subCoursesMenu.style.display = "none";
            mainCourseArrow.classList.remove("arrow-active");
        }
    });
}

function showSubCourses() {
    for (let i = 0; i < coursesNavigation.length; i++) {
        coursesNavigation[i].addEventListener("click", function () {
            if (window.getComputedStyle(subCoursesNavigation[i]).display === "none") {
                subCoursesMenu.style.display = "block";
                subCoursesNavigation[i].style.display = "flex";
                subCoursesArrow[i].classList.add("arrow-active");
            } else {
                subCoursesMenu.style.display = "none";
                subCoursesNavigation[i].style.display = "none";
                subCoursesArrow[i].classList.remove("arrow-active");
            }
        });
    }
}

function variables() {
    var coursesNavigation = document.querySelectorAll('.course-navigation');
    var subCoursesNavigation = document.querySelectorAll(".subMenu");
    var subCoursesMenu = document.getElementById("subCourses");
    let courses = document.getElementById("courseButton");
    let coursesMenu = document.querySelector(".courses-menu-navigation");
    let subCoursesArrow = document.querySelectorAll(".subArrow");
    let mainCourseArrow = document.getElementById("main-arrow");
    let emailButton = document.getElementById("contact-button");
    return { coursesNavigation, subCoursesNavigation, subCoursesMenu, subCoursesArrow, courses, coursesMenu, mainCourseArrow, emailButton };
}
