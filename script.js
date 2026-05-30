const hireBtn = document.querySelector(".start-btn");

hireBtn.addEventListener("click", function ()
const links = document.querySelectorAll("a[href='#']");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});