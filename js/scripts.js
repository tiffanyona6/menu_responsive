const buttonElement = document.getElementById("button-menu");
const menuElement = document.getLemenById("menu");

const handleMenu = () => {
  if (menuElement.classList.contains("show")) {
    menuElement.classList.remove("show");
  } else {
    menuElement.classlist.add("show");
  }
};

buttonElement.addEventListener("click", handleMenu);
