document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector(".age-input-details");
  const calculateBtn = document.querySelector(".calculate-button");

  const yearsDiv = document.querySelector(".years");
  const monthsDiv = document.querySelector(".months");
  const daysDiv = document.querySelector(".days");

  // Initialize inner HTML for cards
  yearsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Years</div>`;
  monthsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Months</div>`;
  daysDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Days</div>`;

  // Create an error card element
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-card");
  errorMsg.style.display = "none";
  document.querySelector(".age-input-container").appendChild(errorMsg);

  // Function to update card with animation
  function updateCard(card, value, label) {
    card.innerHTML = `<div class="age-value">${value}</div><div class="age-label">${label}</div>`;
    card.classList.add("animate");
    setTimeout(() => card.classList.remove("animate"), 400);
  }

  calculateBtn.addEventListener("click", () => {
    const dobValue = dateInput.value;

    if (!dobValue) {
      errorMsg.textContent = "⚠️ Please enter your date of birth.";
      errorMsg.style.display = "block";
      yearsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Years</div>`;
      monthsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Months</div>`;
      daysDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Days</div>`;
      return;
    }

    const dob = new Date(dobValue);
    const today = new Date();

    if (dob > today) {
      errorMsg.textContent = "⚠️ Invalid DOB! Please select a past date.";
      errorMsg.style.display = "block";
      yearsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Years</div>`;
      monthsDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Months</div>`;
      daysDiv.innerHTML = `<div class="age-value">--</div><div class="age-label">Days</div>`;
      return;
    }

    errorMsg.style.display = "none"; // clear error

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    updateCard(yearsDiv, years, "Years");
    updateCard(monthsDiv, months, "Months");
    updateCard(daysDiv, days, "Days");
  });
});
