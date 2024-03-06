const initApp = () => {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownIcon = document.getElementById("drop-icon");
    const dropdown = document.getElementById("dropdown");

    const sideNav = document.getElementById("side-navbar");
    const menuButton = document.getElementById("menu-icon");

    const sbDropdown = document.getElementById("dropdown-sidebar");
    const sbDropdownBtn = document.getElementById("dropdownBtn-sidebar");
    const sbDropdownIcon = document.getElementById("drop-icon-sidebar");

    const toggleDropdown = () => {
        dropdown.classList.toggle("dropdown-content-show");
        dropdownIcon.classList.toggle("rotate");
    };

    const sidebarToggleDropdown = () => {
        sbDropdown.classList.toggle("dropdown-content-show")
        sbDropdownIcon.classList.toggle("rotate")
    };

    window.onclick = function (event) {
        if (!event.target.matches("#dropdownBtn")) {
            if (dropdown.classList.contains("dropdown-content-show")) {
                dropdown.classList.remove("dropdown-content-show");
            }

            if (dropdownIcon.classList.contains("rotate")) {
                dropdownIcon.classList.remove("rotate");
            }
        }
        if (!event.target.matches("#dropdownBtn-sidebar")) {
            if (sbDropdown.classList.contains("dropdown-content-show")) {
                sbDropdown.classList.remove("dropdown-content-show");
            }

            if (sbDropdownIcon.classList.contains("rotate")) {
                sbDropdownIcon.classList.remove("rotate");
            }
        }

        if (
            !event.target.matches("#menu-icon") &&
            !event.target.matches("button") && 
            !event.target.matches('input') &&
            !event.target.matches('#side-navbar')&&
            !event.target.matches('nav')
        ) {
            if (sideNav.classList.contains("active")) {
                sideNav.classList.remove("active");
            }
            if (!sideNav.classList.contains("unactive")) {
                sideNav.classList.add("unactive");
            }

            if (menuButton.classList.contains("menu-icon-active")) {
                menuButton.classList.remove("menu-icon-active");
            }
        }
    };

    dropdownBtn.addEventListener("click", toggleDropdown);
    dropdownIcon.addEventListener("click", toggleDropdown);
    sbDropdownBtn.addEventListener('click', sidebarToggleDropdown)
};

document.addEventListener("DOMContentLoaded", initApp);

const toggleNav = () => {
    const menuButton = document.getElementById("menu-icon");
    const sideNav = document.getElementById("side-navbar");
    menuButton.classList.toggle("menu-icon-active");
    sideNav.classList.toggle("active");
    sideNav.classList.toggle("unactive");
};


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}