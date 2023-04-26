const menuOpen = document.querySelector("#menu-icon");
const menuClose = document.querySelector("#menu-close");
const mobileNavSidebar = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

menuClose.addEventListener('click', ()=>{
	mobileNavSidebar.style.display = "none";
	overlay.style.display = "none";
});

menuOpen.addEventListener('click', ()=>{
	mobileNavSidebar.style.display = "flex";
	overlay.style.display = "block";
});