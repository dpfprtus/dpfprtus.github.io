const loginform = document.querySelector("#login_form");
const logininput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){
  event.preventDefault();
  loginform.classList.add(HIDDEN);
  const username = logininput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintgreeting();
}
function paintgreeting(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello,${username}`;
  greeting.classList.remove(HIDDEN);
}

const savedusername = localStorage.getItem(USERNAME_KEY);
if(savedusername === null){
  loginform.classList.remove(HIDDEN);
  loginform.addEventListener("submit",onSubmit);
}else{
  paintgreeting();
}
