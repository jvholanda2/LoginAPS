function adicionarH1() {
  const buttonDiv = document.getElementById("loggedin");
  const h1Element = document.createElement("h1");

  h1Element.textContent = "Você está logado!";
  buttonDiv.appendChild(h1Element);
}

function handleCredentialResponse(response) {
  adicionarH1()
}

window.onload = function () {
  const clientID = "283368179196-a321uf7rh6n0sm6gdod7omvj3qltu21d.apps.googleusercontent.com"

  google.accounts.id.initialize({
    client_id: clientID,
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
      theme: "filled_black",
    }
  );
}