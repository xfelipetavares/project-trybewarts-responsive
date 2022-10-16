const email = document.getElementsByName(`email`)[0];
const password = document.getElementsByName(`password`)[0];
const submitLogin = document.getElementById(`submitLogin`);

const login = () => {
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
};

submitLogin.addEventListener(`click`, login)
// window.onload = {
// };
