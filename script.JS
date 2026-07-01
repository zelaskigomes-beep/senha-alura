function gerarSenha(){

    const tamanho = document.getElementById("tamanho").value;

    let caracteres = "";

    if(document.getElementById("maiusculas").checked)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("minusculas").checked)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numeros").checked)
        caracteres += "0123456789";

    if(document.getElementById("simbolos").checked)
        caracteres += "!@#$%^&*()_+-={}[]<>?/";

    if(caracteres.length === 0){
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for(let i=0;i<tamanho;i++){
        const indice = Math.floor(Math.random()*caracteres.length);
        senha += caracteres[indice];
    }

    document.getElementById("senha").value = senha;
}

function copiarSenha(){

    const campo = document.getElementById("senha");

    campo.select();
    campo.setSelectionRange(0,99999);

    navigator.clipboard.writeText(campo.value);

    alert("Senha copiada!");
}

gerarSenha();