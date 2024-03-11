let displayCardNum = document.getElementById("number");
displayCardNum.innerHTML = "0000 0000 0000 0000";

let displayName = document.getElementById("display_name");
displayName.innerHTML = "Jane Appleseed";

let displayMonth = document.getElementById("display_month");
displayMonth.innerHTML = "0";

let displayYear = document.getElementById("display_year");
displayYear.innerHTML = "0";

let displayCvc = document.getElementById("display_cvc");
displayCvc.innerHTML = "000";

/* INPUTS */

let number = document.getElementById("card_number");
let holderName = document.getElementById("name");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvc = document.getElementById("cvc_input");

let errorName = document.querySelector(".error_name");
let errorNum = document.querySelector(".error_num");
let errorCvc = document.querySelector(".error_cvc");
let errorDate = document.querySelector(".error_date");

function displayFromInp(e) {
  e.preventDefault();
  let formattedCardNum = number.value
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();

  if (number.value === number.value) {
    displayCardNum.innerHTML = formattedCardNum;
  }

  if (holderName.value === holderName.value) {
    displayName.innerHTML = holderName.value;
  }

  if (month.value === month.value) {
    displayMonth.innerHTML = month.value;

    if (month.value < 10) {
      displayMonth.innerHTML = "0" + month.value;
    }
  }

  if (year.value === year.value) {
    displayYear.innerHTML = year.value;

    if (year.value < 10) {
      displayYear.innerHTML = "0" + year.value;
    }
  }

  if (cvc.value === cvc.value) {
    displayCvc.innerHTML = cvc.value;
  }

  // Validate card number
  if (formattedCardNum.value < 16) {
    errorNum.innerHTML = "Card number is required";
    number.style.border = "1px solid var(--red-input-errors)";
  } else {
    errorNum.innerHTML = "";
    number.style.border = "";
  }
}

function inputErrors(e) {
  e.preventDefault();
  console.log("The functions being called");
  errorName.innerHTML = "";
  errorNum.innerHTML = "";
  errorCvc.innerHTML = "";
  errorDate.innerHTML = "";

  if (holderName.value === "") {
    errorName.innerHTML = "Name is required";
    holderName.style.border = "1px solid var(--red-input-errors)";
  }

  if (number.value === "") {
    errorNum.innerHTML = "Card number is required";
    number.style.border = "1px solid var(--red-input-errors)";
  } else if (!/^\d{16}$/.test(number.value)) {
    errorNum.innerHTML = "Card number must be 16 digits";
  }

  if (month.value === "" || year.value === "") {
    errorDate.innerHTML = "Expiration date is required";
    month.style.border = "1px solid var(--red-input-errors)";
    year.style.border = "1px solid var(--red-input-errors)";
  }

  if (cvc.value === "") {
    errorCvc.innerHTML = "CVC is required";
    cvc.style.border = "1px solid var(--red-input-errors)";
  }
}

let confirm = document.querySelector(".confirm");
let form_container = document.querySelector(".form_container");
let completed_state = document.querySelector(".completed-state");

function continueForm() {
  form_container.classList.toggle("active");
  if (form_container.classList.contains("active")) {
    completed_state.style.display = "flex";
    form_container.style.display = "none";
  } else {
    form_container.style.display = "flex";
    completed_state.style.display = "none";
  }
}

confirm.addEventListener("click", (e) => {
  displayFromInp(e);
  continueForm();
});
confirm.addEventListener("click", inputErrors);

// Updating card details in real-time

number.addEventListener("input", displayFromInp);
holderName.addEventListener("input", displayFromInp);
month.addEventListener("input", displayFromInp);
year.addEventListener("input", displayFromInp);
cvc.addEventListener("input", displayFromInp);
