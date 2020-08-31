function validaçaoEmail(email) {
    nome = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
     
    if ((nome.length >=1) &&
        (dominio.length >=3) && 
        (nome.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (nome.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("alert").innerHTML="E-mail válido";
            alert("Bem vindo(a) " + email.value + "!");
        }else{
            alert("E-mail invalido!");
            document.getElementById('alert').innerHTML = " ";
        };
        
    
}   