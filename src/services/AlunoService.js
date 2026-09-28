const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoInvalidoError");
const PaginacaoInvalidaError = require("../errors/PaginacaoInvalidaError");

class AlunoService {

<<<<<<< HEAD
    async findMany(page, pageSize, orderBy, order) {
        //SELECT * FROM alunos

=======
    async findMany(page, pageSize) {
        //SELECT * FROM alunos
        
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40
        page = Number(page);
        pageSize = Number(pageSize);
        if(!page || !page < 1 || !pageSize || !pageSize < 1){
            throw new PaginacaoInvalidaError();
        }
<<<<<<< HEAD

        const alunos = await prisma.aluno.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            orderBy: {
                [orderBy]: order
            }
        });

        const total = await prisma.aluno.count();

        return { alunos, total };
=======
        const alunos = await prisma.aluno.findMany({
            skip: (page - 1) * pageSize,
            take: Number(pageSize)
        });
        return alunos;
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40
    }

    async create(aluno) {
        //create = insert
        //update = update
        //delete = delete
<<<<<<< HEAD
        //findMany = select *
=======
        //findMany = select * from
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40

        const {nome, email} = aluno;
        if(!nome || !email){
            throw new AlunoInvalidoError();
        }
        const novoAluno = await prisma.aluno.create({ data: aluno });
        return novoAluno;
    }
}

<<<<<<< HEAD
module.exports = new AlunoService();
=======
module.exports = new AlunoService();
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40
