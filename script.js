function valida() {
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var data_de_nascimento = document.getElementById("Data").value;
    var tell = document.getElementById("tell").value;
    var cpf = document.getElementById("CPF").value;
    var cidade = document.getElementById("cidade").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var senha = document.getElementById("Senha").value;
    var repetir_Senha = document.getElementById("repetir").value;
    // var tell = document.getElementById('tell').value; -> Bug para pegar o valor

    if (email&&nome&&data_de_nascimento&&cpf&&cidade&&rua&&numero&senha&&repetir_Senha&&tell) {
        if (senha === repetir_Senha) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('As senha não estão iguais!');
        };
    } else {
        alert('Preencha todos os campos!');
    };
};