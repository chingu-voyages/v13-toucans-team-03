const icon_team = document.querySelectorAll(".team");
const modal_teamInfo = document.getElementById("teamInfo");

icon_team.forEach(icon => {
  icon.addEventListener("click",toggleTeamInfo);
});

function toggleTeamInfo(){
  this.classList.toggle("icon--clicked")
  modal_teamInfo.classList.toggle("teamInfo--hide");
}