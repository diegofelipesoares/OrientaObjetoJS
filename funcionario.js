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
    this.cargo = cargo;
    this.salario = salario;

    this.dizerCargo = function() {
        console.log("Eu sou " + this.cargo + " e trabalho aqui.");
    }
}

function Especializacao(nome, idade, sexo, cargo, salario, especialidade, atividades) {
    // Chama o construtor da classe Funcionario
    Funcionario.call(this, nome, idade, sexo, cargo, salario);
    // Inicializa a propriedade específica do Especializacao
    this.especialidade = especialidade;
    this.atividades = atividades;

    this.dizerEspecialidade = function() {
        console.log("Eu sou especialista em " + this.especialidade + "e realizo essas atividades: " + this.atividades.join(", ") + ".");
    }
}

//INSTANCIAS
const pessoa1 = new Pessoa("João", 30, "Masculino");
pessoa1.dizerOla(); // Olá, meu nome é João e eu tenho 30 anos. 
const funcionario1 = new Funcionario("Maria", 28, "Feminino", "Desenvolvedora", 5000);
funcionario1.dizerOla(); // Olá, meu nome é Maria e eu tenho 28 anos.
funcionario1.dizerCargo(); // Eu sou Desenvolvedora e trabalho aqui.
const especialista1 = new Especializacao("Carlos", 35, "Masculino", "Analista de Sistemas", 7000, "JavaScript", ["Desenvolvimento de aplicações web", "Análise de requisitos"]);
especialista1.dizerOla(); // Olá, meu nome é Carlos e eu tenho 35 anos.
especialista1.dizerCargo(); // Eu sou Analista de Sistemas e trabalho aqui.
especialista1.dizerEspecialidade(); // Eu sou especialista em JavaScript e realizo essas atividades: Desenvolvimento de aplicações web, Análise de requisitos.
