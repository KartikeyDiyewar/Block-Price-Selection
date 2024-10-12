const form = document.getElementById("bogoForm");
const totalPriceElement = document.getElementById("total");

form.addEventListener("change", () => {
  const selectedUnit = form.unit.value;

  // Remove 'popular' class from all options and hide the second child
  const options = document.querySelectorAll(".option2");
  options.forEach((option) => {
    option.classList.remove("popular");
    option.children[1].classList.add("hidden");
  });

  // Add 'popular' class and show the second child of the selected option
  if (selectedUnit === "1") {
    totalPriceElement.textContent = "$10.00 USD";
    options[0].classList.add("popular");
    options[0].children[1].classList.remove("hidden");
  } else if (selectedUnit === "2") {
    totalPriceElement.textContent = "$18.00 USD";
    options[1].classList.add("popular");
    options[1].children[1].classList.remove("hidden");
  } else if (selectedUnit === "3") {
    totalPriceElement.textContent = "$24.00 USD";
    options[2].classList.add("popular");
    options[2].children[1].classList.remove("hidden");
  }
});
