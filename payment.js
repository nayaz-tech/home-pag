// 1️⃣ Select elements
const form = document.getElementById("paymentForm");
const cn = document.getElementById("cardNumber");
const ed = document.getElementById("expiryDate");
const cv = document.getElementById("cvv");
const msg = document.getElementById("message");

// 2️⃣ Reset errors
function resetErrors() {
  document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");
  document.querySelectorAll(".input").forEach(i => i.classList.remove("error"));
  msg.textContent = "";
}

// 3️⃣ Card number input (numbers only, max 19)
cn.addEventListener("input", () => {
  let value = "";
  for (let char of cn.value) {
    if (!isNaN(char)) value += char;
  }
  cn.value = value.slice(0, 19);
});

// 4️⃣ CVV input (numbers only, max 3)
cv.addEventListener("input", () => {
  let value = "";
  for (let char of cv.value) {
    if (!isNaN(char)) value += char;
  }
  cv.value = value.slice(0, 3);
});

// 5️⃣ Submit form
form.addEventListener("submit", e => {
  e.preventDefault();
  resetErrors();

  let valid = true;

  // 6️⃣ Card validation
  if (cn.value.length !== 19) {
    cn.classList.add("error");
    document.getElementById("cardError").textContent = "Card must be 16 digits";
    valid = false;
  }

  // 7️⃣ Expiry validation
  if (ed.value.length !== 5 || ed.value[2] !== "/") {
    ed.classList.add("error");
    document.getElementById("expError").textContent = "Use MM/YY";
    valid = false;
  } else {
    const month = ed.value.slice(0, 2);
    const year = ed.value.slice(3, 5);

    if (isNaN(month) || isNaN(year)) {
      ed.classList.add("error");
      document.getElementById("expError").textContent = "Invalid date";
      valid = false;
    }
  }

  // 8️⃣ CVV validation
  if (cv.value.length !== 3) {
    cv.classList.add("error");
    document.getElementById("cvvError").textContent = "CVV must be 3 digits";
    valid = false;
  }

  // 9️⃣ Final message
  msg.style.color = valid ? "green" : "red";
  msg.textContent = valid ? "Payment Successful ✅" : "Please fix errors";
});


