const gallery = document.getElementById("gallery")
const modal1 = document.getElementById("myModal1")
const modal2 = document.getElementById("myModal2")
const resultsModal1= document.getElementById("resultsModal1")
const raceSection = document.getElementById("races")

gallery.addEventListener("click", function(Event) {
  if (Event.target.id === 'open1') {
    // Open Modal 1
    modal1.style.display ='block';
    modal1.style.overflow ='auto';
  } else if (Event.target.id === 'open2') {
    // Open Modal 2
    modal2.style.display = 'block';
    modal2.style.display = 'auto';
  }
});

raceSection.addEventListener("click",function(Event){
  if (Event.target.id === 'openResults1'){
    resultsModal1.style.display='block';
}});

document.querySelectorAll('.xButton').forEach(button => {
  button.addEventListener('click', function() {
    closeModals();
  });
});

// Function to close all modals
function closeModals() {
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  resultsModal1.style.display = 'none';

}





