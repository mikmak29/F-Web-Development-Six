document.addEventListener("DOMContentLoaded", () => {
    const menuBarButton = document.getElementById("menuBarButton");
    const header_list = document.getElementById("header_list");
    const about_list = document.getElementById("about_list");
    const dropdown_list_arrow = document.getElementById("dropdown_list_arrow");
    const dropdown_list = document.getElementById("dropdown_list");

    const setupMenuBarButton = () => {
        if(menuBarButton) {
            menuBarButton.addEventListener("click", () => {
                header_list.classList.toggle("menu-bar")
            })
        }
    }

    const setupAboutList = () => {
        if (about_list) {
            about_list.addEventListener("mouseleave", () => {
                dropdown_list.classList.remove("dropdown-list");
            })
        }
    }

    const setupDropdown_list_arrow = () => {
        if (dropdown_list_arrow) {
            dropdown_list_arrow.addEventListener("mouseover", () => {
                dropdown_list.classList.toggle("dropdown-list");
            })  
        }   
    }

    const setupDropdown_list = () => {
        if (dropdown_list) {
            dropdown_list.addEventListener("mouseleave", () => {
                dropdown_list.classList.remove("dropdown-list");
            })  
        }   
    }

    setupMenuBarButton();
    setupAboutList();
    setupDropdown_list_arrow();
    setupDropdown_list();
}) 