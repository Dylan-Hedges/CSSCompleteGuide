//Find elements that have a class of 'backdrop' and saves it to a variable - only keeps the first element it finds
var backdrop = document.querySelector('.backdrop');

//Finds elements that have a class of 'modal' and saves it to a variable - only keeps the first element it finds
var modal = document.querySelector('.modal');

//Find elements that have a class of '.modal__action--negative' and saves it to a variable - only keeps the first element it finds
var modalNoButton = document.querySelector('.modal__action--negative');

//Find elements that have a class of 'plan' and are buttons - saves multiple elements as an array
var selectPlanButtons = document.querySelectorAll('.plan button');

//Loops over all select plan buttons
for (var i = 0; i < selectPlanButtons.length; i++){
  //Adds an event listener to each button that when clicked executes an anonymous function
  selectPlanButtons[i].addEventListener('click', function(){
    //Makes the modal (lightbox popup) visibile - changes style to block
    modal.style.display='block';
    //Makes the black transparent backdrop visible - changes style to block
    backdrop.style.display='block';
  });
}

//Adds an event listener to the black transparent background that when clicked executes the closeModal function
backdrop.addEventListener('click', closeModal);

//Adds an event listener to the No button that when clicked executes the closeModal function
modalNoButton.addEventListener('click', closeModal);

function closeModal(){
  //Hides the transparent black backdrop
  backdrop.style.display = "none";
  //Hides the modal (lightbox)
  modal.style.display = "none";
}
