const Alunos = require('./model/alunos');
const Professores = require('./model/professores');
const Disciplinas = require('./model/disciplinas');

async function run() {
  // Exemplo de uso dos métodos CRUD
  try {
    // Listar todos os alunos
    const allAlunos = await Alunos.getAll();
    console.log('Todos os alunos:', allAlunos);

    // Criar um novo aluno
    const newAluno = { nome: 'Emily', email: 'emily@example.com' };
    const createdAluno = await Alunos.create(newAluno);
    console.log('Aluno criado:', createdAluno);

    // Atualizar um aluno existente
    const updatedAluno = { nome: 'Emily Costa', email: 'emily.costa@example.com' };
    const idToUpdate = 1;
    const result = await Alunos.update(idToUpdate, updatedAluno);
    console.log('Aluno atualizado:', result);

    // Deletar um aluno
    const idToDelete = 2;
    const deleteResult = await Alunos.delete(idToDelete);
    console.log('Aluno deletado:', deleteResult);

    // Listar todos os professores
    const allProfessores = await Professores.getAll();
    console.log('Todos os professores:', allProfessores);

    // Listar todas as disciplinas
    const allDisciplinas = await Disciplinas.getAll();
    console.log('Todas as disciplinas:', allDisciplinas);
  }
 catch (error) {
    console.error("Erro, tente novamente", error);
 } finally {
    console.log("Done executing run function.");
}
}
run();