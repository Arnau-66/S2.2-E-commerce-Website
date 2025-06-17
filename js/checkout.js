

const isValidName = (name) => /^[a-zA-Z\s]{3,}$/.test(name.trim());
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const isValidPassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/.test(password.trim());
const isValidPhone = (phone) => /^\d{9}$/.test(phone.trim());
const isValidAddress = (address) => address.trim().length >= 3;


function setupValidation(inputId, errorId, validationFunction, errorMessage) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.addEventListener("blur", () => {
    const value = input.value.trim();
    if (!validationFunction(value)) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      error.textContent = errorMessage;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      error.textContent = "";
    }
  });
}



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

	if (!isValidName(fName.value.trim())) {
		errorName.textContent = "Please enter at least 3 letters";
		fName.classList.add("is-invalid");
		valid = false;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
		errorName.textContent = "";
	}

	if (!isValidName(fLastN.value.trim())) {
		errorLastN.textContent = "Please enter at least 3 letters";
		fLastN.classList.add("is-invalid");
		valid = false;
	} else {
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
		errorLastN.textContent = "";
	}

	if (!isValidEmail(fEmail.value.trim())) {
		errorEmail.textContent = "Please enter a valid email address";
		fEmail.classList.add("is-invalid");
		valid = false;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
		errorEmail.textContent = "";
	}

	if (!isValidPassword(fPassword.value.trim())) {
		errorPassword.textContent = "Password must include at least one letter and one number (4-8 characters)";
		fPassword.classList.add("is-invalid");
		valid = false;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
		errorPassword.textContent = "";
	}

	if (!isValidPhone(fPhone.value.trim())) {
		errorPhone.textContent = "Phone must contain exactly 9 digits";
		fPhone.classList.add("is-invalid");
		valid = false;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
		errorPhone.textContent = "";
	}

	if (!isValidAddress(fAddress.value)) {
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
	
	setupValidation("fName", "errorName", isValidName, "Please enter at least 3 letters");
  	setupValidation("fLastN", "errorLastN", isValidName, "Please enter at least 3 letters");
  	setupValidation("fEmail", "errorEmail", isValidEmail, "Please enter a valid email address");
  	setupValidation("fPassword", "errorPassword", isValidPassword, "Password must include at least one letter and one number (4-8 characters)");
  	setupValidation("fPhone", "errorPhone", isValidPhone, "Phone must contain exactly 9 digits");
  	setupValidation("fAddress", "errorAddress", isValidAddress, "Address must be at least 3 characters long");
	
	const form = document.querySelector(".form");
	if(form){
		form.addEventListener("submit", (event)=> {
			if(!validate()) event.preventDefault();
		});
	}

});


