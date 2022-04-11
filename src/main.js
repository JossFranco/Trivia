const user = document.getElementById("userName");
let nameRequired = document.getElementById("nameRequired");
const welcome= document.getElementById("welcome")
const btnStart = document.getElementById("start");
btnStart.addEventListener("click", () => {
  nameRequired.innerHTML = "";
  if (user.value === "") {
    nameRequired.innerHTML += `Para iniciar el juego debe ingresar su nombre`;
  } else {
    nameRequired.innerHTML = "";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    welcome.innerHTML += `Hola ${user.value}`;
  }
});