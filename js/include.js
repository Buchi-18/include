"use strict";
getHeader();
// getFooter();

async function getHeader() {
  const getHeader = await fetch("../include/header.html");
  const data = await getHeader.text();
  document.getElementById("header").innerHTML += data;

  const headerLists = document.getElementById("headerLists");
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.addEventListener("click", function () {
    headerLists.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
}

async function getFooter() {
  const getFooter = await fetch("./include/footer.html");
  const data = await getFooter.text();
  document.getElementById("footer").innerHTML = data;
}
