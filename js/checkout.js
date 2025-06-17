
function validate() {
		
	let valid = true;

	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");
	let fAddress = document.getElementById("fAddress");

	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	let errorAddress = document.getElementById("errorAddress");

	let nameRegex = /^[a-zA-Z\s]{3,}$/;
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
	let phoneRegex = /^\d{9}$/;

	if (!nameRegex.test(fName.value.trim())) {
		errorName.textContent = "Please enter at least 3 letters";
		fName.classList.add("is-invalid");
		valid = false;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
		errorName.textContent = "";
	}

	if (!nameRegex.test(fLastN.value.trim())) {
		errorLastN.textContent = "Please enter at least 3 letters";
		fLastN.classList.add("is-invalid");
		valid = false;
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
		errorLastN.textContent = "";
	}

	if (!emailRegex.test(fEmail.value.trim())) {
		errorEmail.textContent = "Please enter a valid email address";
		fEmail.classList.add("is-invalid");
		valid = false;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
		errorEmail.textContent = "";
	}

	if (!passwordRegex.test(fPassword.value.trim())) {
		errorPassword.textContent = "Password must include at least one letter and one number (4-8 characters)";
		fPassword.classList.add("is-invalid");
		valid = false;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
		errorPassword.textContent = "";
	}

	if (!phoneRegex.test(fPhone.value.trim())) {
		errorPhone.textContent = "Phone must contain exactly 9 digits";
		fPhone.classList.add("is-invalid");
		valid = false;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
		errorPhone.textContent = "";
	}

	if (fAddress.value.trim().length < 3) {
		errorAddress.textContent = "Address must be at least 3 characters long";
		fAddress.classList.add("is-invalid");
		valid = false;
	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
		errorAddress.textContent = "";
	}

	return valid;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (event) {
    const isValid = validate();
    if (!isValid) event.preventDefault();
  });
});


