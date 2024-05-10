let linkBtn = document.querySelectorAll(".dropbtn");
let dropdown_content = document.querySelectorAll(".dropdown-content");
// mobile
let linkBtn_mobile = document.querySelectorAll(".dropbtn_mobile");
let dropdown_content_mobile = document.querySelectorAll(
  ".dropdown-content_mobile"
);

linkBtn.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Close all dropdowns
    dropdown_content.forEach((item) => {
      item.classList.remove("active");
    });

    // Open the dropdown
    dropdown_content[index].classList.toggle("active");

    // Reset
    document.querySelectorAll(".arrow-up").forEach((arrowUp) => {
      arrowUp.style.display = "none";
    });
    document.querySelectorAll(".arrow-down").forEach((arrowDown) => {
      arrowDown.style.display = "inline-block";
    });

    // Toggle arrow icon
    let arrowDown = link.querySelector(".arrow-down");
    let arrowUp = link.querySelector(".arrow-up");
    if (arrowDown && arrowUp) {
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline-block";
    }
  });
});

linkBtn_mobile.forEach((link, index) => {
  link.addEventListener("click", () => {
    dropdown_content_mobile.forEach((item) => {
      item.classList.remove("active");
    });

    dropdown_content_mobile[index].classList.toggle("active");
    // reset
    document.querySelectorAll(".arrow-up-mobile").forEach((arrowUp) => {
      arrowUp.style.display = "none";
    });
    document.querySelectorAll(".arrow-down-mobile").forEach((arrowDown) => {
      arrowDown.style.display = "inline-block";
    });

    // Toggle arrow icon for the clicked dropdown button
    let arrowDown = link.querySelector(".arrow-down-mobile");
    let arrowUp = link.querySelector(".arrow-up-mobile");
    if (arrowDown && arrowUp) {
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline-block";
    }
  });
});

let open = document.querySelector(".openMenu");
let close = document.querySelector(".closeMenu");

let overflow = document.querySelector(".overflow");
let left = document.querySelector(".left");

function openCloseMenu() {
  open.addEventListener("click", () => {
    open.classList.add("hide");
    close.classList.add("active");
    overflow.classList.add("active");
    left.classList.add("active");
  });

  close.addEventListener("click", () => {
    open.style.display = "block";
    close.classList.remove("active");
    overflow.classList.remove("active");
    left.classList.remove("active");
  });
}

openCloseMenu();
