class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const alunoPaulo = new Aluno("Paulo César", 6);
const alunaJoana = new Aluno("Joana Marta", 6.5);
const alunoThiago = new Aluno("João Paulo", 7);
const alunaMaria = new Aluno("Maria Karen", 4);
const alunoYuri = new Aluno("Yuri Roslyakova", 4.5);
const alunaCarla = new Aluno("Carla Pires", 9);

const listaAlunos = [alunoPaulo, alunaJoana, alunoThiago, alunaMaria, alunoYuri, alunaCarla];
console.log("Resultado da prova:");
listaAlunos.forEach(lista => {
    console.log(`${lista.nome}, Nota: ${lista.nota}`);
})

const alunosAprovados = listaAlunos.filter(aluno => aluno.nota >= 6)
console.log("Alunos aprovados no primeiro semestre:");
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}, Nota: ${aluno.nota}`)
})