
function validarEmail() {
  const mensagem = document.getElementById("mensagem");
  const email = document.getElementById("email");

  if (email.validity.valid) {
    alert("E-mail enviado com sucesso! Muito obrigado, entraremos em contato!");
    mensagem.style.display = "block";
    mensagem.innerHTML = `Damos boas vindas a: ${email.value}`;
  } else {
    alert("E-mail inválido!");
  } 
}