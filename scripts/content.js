const gallery = document.getElementById("gallery")
const modal1 = document.getElementById("myModal1")
const modal2 = document.getElementById("myModal2")
gallery.addEventListener("click", function(Event) {
  if (Event.target.id === 'open1') {
    // Open Modal 1
    modal1.style.display ='block';
  } else if (Event.target.id === 'open2') {
    // Open Modal 2
    modal2.style.display = 'block';
  }
});


document.querySelectorAll('.xButton').forEach(button => {
  button.addEventListener('click', function() {
    closeModals();
  });
});

// Function to close all modals
function closeModals() {
  modal1.style.display = 'none';
  modal2.style.display = 'none';

}






/*const modals = document.querySelectorAll(".gallery_modal");
 
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".xButton");

open.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

modals.forEach(modal => {
  const closeButton = modal.querySelector('.xButton');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});


const modal = document.getElementById("myModal");
const openButton = document.getElementById("open");
const xButton = document.getElementById("x");
function handleOpenClick(){
    console.log("open button executed")
    modal.style.display = "block";
    modal.style.overflow = "scroll";
}
openButton.addEventListener("click", handleOpenClick);

window.onclick = function(event) {
    if (event.target == xButton) {
      modal.style.display = "none";
    }
}*/