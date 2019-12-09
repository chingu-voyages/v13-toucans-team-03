const icons = document.querySelectorAll(".icon");
icons.forEach(icon=>{
  icon.addEventListener("click",toggleModal);
})

function toggleModal(){
  this.classList.toggle("icon--clicked");
  const modal = document.querySelector(`.modal[data-modal="${this.dataset.icon}"]`);
  modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
}
