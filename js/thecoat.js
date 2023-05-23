/* Size opitons */
const sizeOptions = document.querySelectorAll(".size-options");

for (let i = 0; i < sizeOptions.length; i++) {
  sizeOptions[i].addEventListener("click", function() {
    if (this.previousElementSibling.checked) {
      this.style.color = "white";
      this.style.backgroundColor = "#9CC1D9";
    } else {
      this.style.color = "black";
      this.style.backgroundColor = "white";
    }
  });
}

/* Add to chart animation */
const cartButton = document.querySelector(".chart_button");

cartButton.onclick = function() {
    cartButton.classList.add("clicked");
};



/* Dropdown info */
const dropDownOne = document.querySelector(".dbtn1");
const dropDownContent = document.querySelector("#mydropdown1");
const dropDownTwo = document.querySelector(".dbtn2");
const dropDownContentTwo = document.querySelector("#mydropdown2");
const dropDownThree = document.querySelector(".dbtn3");
const dropDownContentThree = document.querySelector("#mydropdown3");

dropDownContent.innerHTML = ""; 

dropDownOne.onclick = function() {
    dropDownContent.innerHTML = `<div class="dropdown-content">
                                    <p>The water-repellent surface has been technologically researched to find the perfect balance of air and water-repellent to give our users the best possible experience on a trip in nature.</p></div>`;
};  

dropDownContentTwo.innerHTML = ""; 

dropDownTwo.onclick = function() {
    dropDownContentTwo.innerHTML = `<div class="dropdown-content">
                                    <p>This is a jacket that warms on cooler days and keeps you dry in light rain showers.</p></div>`;
};

dropDownContentThree.innerHTML = ""; 

dropDownThree.onclick = function() {
    dropDownContentThree.innerHTML = `<div class="dropdown-content">
                                    <p>Lorem ipsum this is a normale size jacket.</p></div>`;
};


  


     

