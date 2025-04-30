//FUNÇÃO CONSTRUTORA
function Pessoa (nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    this.dizerOla = function() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
}
//FUNÇÃO CONSTRUTORA COM HERANÇA
function Funcionario(nome, idade, sexo, cargo, salario) {
    // Chama o construtor da classe Pessoa
    Pessoa.call(this, nome, idade, sexo);
    // Inicializa as propriedades específicas do Funcionario
    this.cargo = cargo; //atributo público  
    let _salario = salario; //atributo privado

    this.retornaSalario = function() {
        return _salario; //retorna o valor do atributo privado _salario
    }
    this.atribuiSalario = function(novoSalario) {
        //validate numbe
        if (typeof novoSalario === 'number') {
            _salario = novoSalario; //atribui o valor ao atributo privado _salario
        }
        else {
            console.log("O valor inserido (" + novoSalario + ") do salário deve ser um número.");
        }
    }

    this.dizerCargo = function() {
        console.log("Eu sou " + this.cargo + " e trabalho aqui.");
    }
}

const funcionario1 = new Funcionario("Maria", 28, "Feminino", "Desenvolvedora", 5000);
funcionario1.dizerOla(); // Olá, meu nome é Maria e eu tenho 28 anos.
funcionario1.dizerCargo(); // Eu sou Desenvolvedora e trabalho aqui.
const pessoa1 = new Pessoa("João", 30, "Masculino");

//Alterando valor do salário
funcionario1._salario = 6000; 
//Aqui não está alterando o valor do atributo privado _salario, pois ele não é acessível diretamente, 
// fazendo isso ele cria outra variável pública chamada _salario
console.log(funcionario1._salario); // 6000, mas não é o valor do atributo privado _salario
//recuperando o valor do atributo privado _salario através do método retornaSalario()
console.log(funcionario1.retornaSalario()); // 5000
//Alterando valor do atributo privado _salario através do método retornaSalario()
funcionario1.atribuiSalario(7000); // atribui o valor 6000 ao atributo privado _salario

console.log(funcionario1.retornaSalario()); // 7000, agora o valor do atributo privado _salario foi alterado