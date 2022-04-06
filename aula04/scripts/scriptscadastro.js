function onSubmit(){
    var nome = document.getElementsByTagName("input")[0];
    if(nome.value === "") {
        alert("Informe nome");
        nome.focus();
        return;
    }
    var idade = document.getElementById("input")[1];
    if(nome.value === "") {
        alert("Informe idade");
        idade.focus();
        return;
    }
    var email = document.getElementsByTagName("input")[2];
    if(email.value === "") {
        alert("Informe e-mail");
        email.focus();
        return;
    }
    var data = document.getElementById("input")[3];
    if(data.value === "") {
        alert("Informe data");
        data.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
}