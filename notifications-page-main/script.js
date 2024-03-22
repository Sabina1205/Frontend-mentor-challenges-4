let markBtn = document.getElementById("markBtn");
let notification = document.querySelectorAll(".notification");
let red_dot = document.querySelectorAll(".red_dot");
let numOfNotif = document.getElementById("number");

numOfNotif.innerHTML = 3;

markBtn.addEventListener("click", () => {
  notification.forEach((notification) => {
    if (notification.classList.contains("unread")) {
      notification.classList.remove("unread");
      red_dot.forEach((dot) => {
        dot.style.display = "none";
      });

      numOfNotif.innerHTML = 0;
    }
  });
});

notification.forEach((not) => {
  not.addEventListener("click", () => {
    if (not.classList.contains("unread")) {
      not.classList.remove("unread");
      numOfNotif.innerHTML = numOfNotif.innerHTML - 1;

      let removeCircle = not.querySelector(".red_dot");
      if (removeCircle) {
        removeCircle.style.display = "none";
      }
    }
  });
});
