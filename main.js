// WhatsApp number (international format, no leading + or 0)
var WA_NUMBER = "6289602015445";

var DEFAULT_MSG = document.documentElement.lang === "id"
  ? "Halo Tapak Digital, saya ingin konsultasi pembuatan website."
  : "Hi Tapak Digital, I'd like to discuss building a website.";

document.querySelectorAll(".wa-link").forEach(function (a) {
  var msg = a.getAttribute("data-msg") || DEFAULT_MSG;
  a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  a.target = "_blank";
  a.rel = "noopener";
});

var menuBtn = document.querySelector(".menu-btn");
var nav = document.getElementById("nav-links");
menuBtn.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
