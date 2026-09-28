const alunoService = require("../services/AlunoService");

class AlunoController {

    async findMany(request, response) {
        try{
<<<<<<< HEAD
            let { page, pageSize, orderBy, order } = request.query;
            page ||= 1;
            pageSize ||= 10;
            orderBy ||= "id";
            order ||= "asc";

            if (order !== "asc" && order !== "desc") {
                order = "asc";
            }

            const resultado = await alunoService.findMany(
                page,
                pageSize,
                orderBy,
                order
            );

            return response.status(200).json(resultado);
=======
            let { page, pageSize } = request.query;
            page ||= 1;
            pageSize ||= 10;
            
            const alunos = await alunoService.findMany(page, pageSize);
            return response.status(200).json({ alunos });
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40
        } catch(e){
            return response.status(e.statusCode).json({error: e.message});
        }
    }

    async create(request, response) {
        try{
            const aluno = await alunoService.create(request.body);
            return response.status(201).json({ aluno });
        } catch(e) {
            return response.status(e.statusCode).json({error: e.message});
        }
    }
}

<<<<<<< HEAD
module.exports = new AlunoController();
=======
module.exports = new AlunoController();
>>>>>>> 234bc499951ed8dcaff98b2eab2618213dc0ff40
