"use strict";
const password = document.querySelector(".last-input input");

const hideBtn = document.querySelector(".hidebtn");

const showBtn = document.querySelector(".showbtn");

const passwordBtn = document.querySelectorAll(".last-input button");

passwordBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target;
    console.log(target);
    if (target.classList.contains("showbtn")) {
      password.type = "text";
      btn.classList.add("hidden");

      hideBtn.classList.remove("hidden");
    }
    if (target.classList.contains("hidebtn")) {
      password.type = "password";
      btn.classList.add("hidden");

      showBtn.classList.remove("hidden");
    }
  });
});
