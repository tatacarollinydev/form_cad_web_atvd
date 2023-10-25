document.getElementById("cep").addEventListener("blur", () => verificarCep(document.getElementById("cep").value));

function verificarCep(cep) {
    let regex = /[0-9]/;
    if (regex.test(cep) == true) {
        if (cep.length == 8) {
            procurarLocal(cep);
        } else {
            alert('Cep inválido!'); 
        };
    } else {
        alert('Cep inválido!');
    };
};


function procurarLocal(cidade) {
    fetch(`https://viacep.com.br/ws/${cidade}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message);
        })
        .then(response => {
            displayResults(response, cidade);
        });
};

const displayResults = (data, city) => {
    console.log(data)

    document.getElementById("cidade").value = data.localidade
    document.getElementById("estado").value = data.uf
    document.getElementById("rua").value = data.logradouro

};


function valida() {
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var data_de_nascimento = document.getElementById("Data").value;
    var cpf = document.getElementById("CPF").value;
    var cidade = document.getElementById("cidade").value;
    var rua = document.getElementById("rua").value;
    var numero = document.getElementById("numero").value;
    var senha = document.getElementById("Senha").value;
    var repetir_Senha = document.getElementById("repetir").value;

    if (email && nome && data_de_nascimento && cpf && cidade && rua && numero && senha && repetir_Senha) {
        if (senha === repetir_Senha) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('As senha não estão iguais!');
        };
    } else {
        alert('Preencha todos os campos!');
    };
};