//Selects the back transparent backdrop - find elements that have a class of 'backdrop' and saves it to a variable - only keeps the first element it finds
var backdrop = document.querySelector('.backdrop');
//Selects the modal (lightbox popup)
var modal = document.querySelector('.modal');
//Selects the No button inside the modal
var modalNoButton = document.querySelector('.modal__action--negative');
//Selects the CHOOSE PLAN buttons - finds elements that have a class of 'plan' and are buttons - saves multiple elements as an array
var selectPlanButtons = document.querySelectorAll('.plan button');
//Selects the hamburger icon
var toggleButton = document.querySelector('.toggle-button');
//Selects the side nav used for mobiles
var mobileNav = document.querySelector('.mobile-nav');

//Loops over all select plan buttons
for (var i = 0; i < selectPlanButtons.length; i++){
  //Adds an event listener to each button that when clicked executes an anonymous function
  selectPlanButtons[i].addEventListener('click', function(){
    //Makes the modal (lightbox popup) visibile - adds the open class to it which changes style to block
    modal.classList.add('open');
    //Makes the black transparent backdrop visible - adds the open class to it which changes style to block
    backdrop.classList.add('open');

  });
}

//Adds an event listener to the black transparent background that when clicked executes the closeModal function
backdrop.addEventListener('click', function(){
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

//Checks if No button in the modal exists - prevents errors on Packages and Customers pages that do not have the modal
if(modalNoButton){
  //Adds an event listener to the No button that when clicked executes the closeModal function
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal(){
  //If the modal exists - prevents errors on Packages and Customers pages that do not have the modal
  if(modal){
    //Hide the modal (lightbox popup) - removes the open class which changes style back to none
    modal.classList.remove('open');
  }
  //Hide the transparent black backdrop - removes the open class which changes style back to none
  backdrop.classList.remove('open');
}

//Adds an event listener to the hamburger icon that when clicked executes a function
toggleButton.addEventListener('click', function(){
  //Opens the side nav used for mobile devices- adds the open class to it which changes style to block
  mobileNav.classList.add('open');
  //Shows the black transparent backdrop - adds the open class to it which changes style to block
  backdrop.classList.add('open');
})
