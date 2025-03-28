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
}
