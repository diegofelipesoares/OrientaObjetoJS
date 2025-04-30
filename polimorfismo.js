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

    //MÉTODOS PÚBLICOS
    this.getSalario = function() {
        return _salario; //retorna o valor do atributo privado _salario
    }
    this.setSalario = function(novoSalario) {
        //validate number
        if (typeof novoSalario === 'number') {
            _salario = novoSalario; //atribui o valor ao atributo privado _salario
        }
        else {
            console.log("O valor inserido (" + novoSalario + ") do salário deve ser um número.");
        }
    }

    this.aumento = function(){
        const novoSalário = _salario *1.1; //aumento de 10%
        console.log("O novo salário é: " + novoSalário);
        _salario = novoSalário; //atualiza o salário
    }

    this.dizerCargo = function() {
        console.log("Eu sou " + this.cargo + " e trabalho aqui.");
    }
}

function Estagiario(nome, idade, sexo) {
    // Chama o construtor da classe Funcionario com valores fixos para cargo e salario
    Funcionario.call(this, nome, idade, sexo, "Estagiário", 2000);

    // Sobrescrevendo o método de aumento para 7%
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07; // aumento de 7%
        console.log("O novo salário é: " + novoSalario);
        this.setSalario(novoSalario); // atualiza o salário
    };
}

// Estabelece a herança do protótipo
Estagiario.prototype = Object.create(Funcionario.prototype);
Estagiario.prototype.constructor = Estagiario;

// Testando
const funcionario1 = new Funcionario("Maria", 28, "Feminino", "Desenvolvedora", 5000);
funcionario1.aumento(); // O novo salário é: 5500

const funcionario2 = new Estagiario("Pedro", 22, "Masculino");
console.log(funcionario2.getSalario()); // 2000
funcionario2.aumento(); // O novo salário é: 2140