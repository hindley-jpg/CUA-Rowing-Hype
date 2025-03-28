const modal = document.getElementById("myModal");
const openButton = document.getElementById("open");

function handleOpenClick(){
    console.log("open button executed")
    modal.style.display = "block";
}
openButton.addEventListener("click", handleOpenClick);

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    else if(event.target==modal.children){/*make modal shut when you click anywhere within modal*/ 
        modal.style.display = "none";
    }
        
    /*add x button at top right to close modal*/
}
