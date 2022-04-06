function onSubmit(){
    var nome = document.getElementsByTagName("input")[0];
    if(nome.value === "") {
        alert("Informe nome");
        nome.focus();
        return;
    }
    var fone = document.getElementById("input")[1];
    if(fone.value === "") {
        alert("Informe telefone");
        fone.focus();
        return;
    }
    var email = document.getElementsByTagName("input")[2];
    if(email.value === "") {
        alert("Informe e-mail");
        email.focus();
        return;
    }
    var logradouro = document.getElementById("input")[3];
    if(logradouro.value === "") {
        alert("Informe logradouro");
        logradouro.focus();
        return;
    }
    var bairro = document.getElementById("input")[3];
    if(bairro.value === "") {
        alert("Informe bairro");
        bairro.focus();
        return;
    }

    var cidade = document.getElementById("input")[3];
    if(cidade.value === "") {
        alert("Informe cidade");
        cidade.focus();
        return;
    }
    var cep = document.getElementById("input")[3];
    if(cep.value === "") {
        alert("Informe cep");
        cep.focus();
        return;
    }
    var limiteDeCredito = document.getElementById("input")[3];
    if(limiteDeCredito.value === "") {
        alert("Informe limite de crédito");
        limiteDeCredito.focus();
        return;
    }
    var foto = document.getElementById("input")[3];
    if(foto.value === "") {
        alert("Insira a imagem");
        foto.focus();
        return;
    }
    
    

    document.getElementsByTagName("form")[0].submit();
    document.getElementById("dadosPessoais").innerHTML =
    nome.value + " " + "seu e-mail: "  + Email + " " + "seu endereço: " +
    Rua + " " + Bairro + " " + Cidade + " " + Cep + " " + "você tem o limite de: " +
    Limite de credito + " " + Foto;

