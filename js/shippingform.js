/*const form = document.querySelector("form");
const firstName = document.querySelector("#shippingName");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#shippingLastName");
const lastNameError = document.querySelector("#last-name-error");
const shippingAddress = document.querySelector("#shippingAddress");
const shippingAddressError = document.querySelector("#address-error");
const shippingZip = document.querySelector("#shippingZip");
const shippingZipError = document.querySelector("#zip-error");
const shippingCity = document.querySelector("#shippingCity");
const shippingCityError = document.querySelector("#city-error");
const shippingCountry = document.querySelector("#shippingCountry");
const shippingCountryError = document.querySelector("#country-error");
const validateButton = document.querySelector(".validate_button");

function formValidation(event) {
  let isError = false;

  if (!checkLenght(firstName.value, 2)) {
    firstNameError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    firstNameError.style.display = "none";
    validateButton.disabled = false;
  }

  if (!checkLenght(lastName.value, 2)) {
    lastNameError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    lastNameError.style.display = "none";
    validateButton.disabled = false;
  }

  if (!checkLenght(shippingAddress.value, 4)) {
    shippingAddressError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    shippingAddressError.style.display = "none";
    validateButton.disabled = false;
  }

  if (!checkLenght(shippingZip.value, 4)) {
    shippingZipError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    shippingZipError.style.display = "none";
    validateButton.disabled = false;
  }

  if (!checkLenght(shippingCity.value, 4)) {
    shippingCityError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    shippingCityError.style.display = "none";
    validateButton.disabled = false;
  }

  if (!checkLenght(shippingCountry.value, 4)) {
    shippingCountryError.style.display = "block";
    isError = true;
    validateButton.disabled = true;
  } else {
    shippingCountryError.style.display = "none";
    validateButton.disabled = false;
  }

  if (isError) {
    event.preventDefault();
  }
  
console.log("funker?");
}
 //Noe her er feil... Pokker! 

 form.addEventListener("submit", formValidation);

 function checkLenght(value, len) {
    return value.trim().length >= len;
  }
 
/*
  const form = document.querySelector("form");
const firstName = document.querySelector("#shippingName");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#shippingLastName");
const lastNameError = document.querySelector("#last-name-error");
const shippingAddress = document.querySelector("#shippingAddress");
const shippingAddressError = document.querySelector("#address-error");
const shippingZip = document.querySelector("#shippingZip");
const shippingZipError = document.querySelector("#zip-error");
const shippingCity = document.querySelector("#shippingCity");
const shippingCityError = document.querySelector("#city-error");
const shippingCountry = document.querySelector("#shippingCountry");
const shippingCountryError = document.querySelector("#country-error");
const validateButton = document.querySelector(".validate_button");

function formValidation(event) {
  event.preventDefault(); // Prevent form submission for testing purposes

  let isError = false;

  if (!checkLength(firstName.value, 2)) {
    firstNameError.style.display = "block";
    isError = true;
  } else {
    firstNameError.style.display = "none";
  }

  if (!checkLength(lastName.value, 2)) {
    lastNameError.style.display = "block";
    isError = true;
  } else {
    lastNameError.style.display = "none";
  }

  if (!checkLength(shippingAddress.value, 4)) {
    shippingAddressError.style.display = "block";
    isError = true;
  } else {
    shippingAddressError.style.display = "none";
  }

  if (!checkLength(shippingZip.value, 4)) {
    shippingZipError.style.display = "block";
    isError = true;
  } else {
    shippingZipError.style.display = "none";
 }

 if (isError) {
    event.preventDefault();
  }

 console.log("funker");
  }

  form.addEventListener("submit", formValidation);

  function checkLenght(value, len) {
    return value.trim().length >= len;
  } */

const form = document.querySelector(".shipping-form");
const firstName = document.querySelector("#shippingName");
const firstNameError = document.querySelector("#first-name-error");
const lastName = document.querySelector("#shippingLastName");
const lastNameError = document.querySelector("#last-name-error");
const shippingAddress = document.querySelector("#shippingAddress");
const shippingAddressError = document.querySelector("#address-error");
const shippingZip = document.querySelector("#shippingZip");
const shippingZipError = document.querySelector("#zip-error");
const shippingCity = document.querySelector("#shippingCity");
const shippingCityError = document.querySelector("#city-error");
const shippingCountry = document.querySelector("#shippingCountry");
const shippingCountryError = document.querySelector("#country-error");
const validateButton = document.querySelector(".validate_button");

function formValidation(event) {
    
  let isError = false;
  console.log(shippingCountry.length);

  if (!checkLength(firstName.value, 2)) {
    firstNameError.style.display = "block";
    isError = true;
  } else {
    firstNameError.style.display = "none";
  }

  if (!checkLength(lastName.value, 2)) {
    lastNameError.style.display = "block";
    isError = true;
  } else {
    lastNameError.style.display = "none";
  }

  if (!checkLength(shippingAddress.value, 2)) {
    shippingAddressError.style.display = "block";
    isError = true;
  } else {
    shippingAddressError.style.display = "none";
  }

  if (!checkLength(shippingZip.value, 2)) {
    shippingZipError.style.display = "block";
    isError = true;
  } else {
    shippingZipError.style.display = "none";
  }

  if (!checkLength(shippingCity.value, 2)) {
    shippingCityError.style.display = "block";
    isError = true;
  } else {
    shippingCityError.style.display = "none";
  }

  if (!checkLength(shippingCountry.value, 8)) {
    console.log(shippingCountry.length);
    shippingCountryError.style.display = "block";
    isError = true;
  } else {
    shippingCountryError.style.display = "none";
  }

  if (isError) {
    event.preventDefault();
  }
}

form.addEventListener("submit", formValidation);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;  
    }
}