const db = require("../data/db");
const Categoria = db.categorias;

/* Lista todas categorias */
exports.findAll = (req, res) => {
    Categoria.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Deu erro"
            });
        });
};

/* Cria uma categoria */
exports.create = async(req, res) => {
    const categoria = {
        nome: req.body.nome
    };
    await Categoria.create(categoria)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erro ao cadastrar a categoria"
            });
        });
};

/* Retorna uma categoria */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Categoria.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            }else{
                res.status(404).send({
                    message: `Não foi possível encontrar a categoria com o id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500),send({
                message: "Erro ao recuperar categoria com o id=" + id
            });
        });
};

/* Deleta um registro de categoria */

exports.delete = (req, res) => {
    const id = req.params.id;
    Categoria.destroy({
        where: { id: id }
    })
    .then(num => {
        if(num == 1){
            res.send({ 
                message: "Categoria excluído com sucesso!"
            });
        }else{
            res.send({
                message: `Não foi possível excluir o id ${id}. Não foi encontrado.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Não foi possível excluir a categoria com o id= "+id
        });
    });
};

/* Atualiza uma categoria */

exports.update = (req, res) => {
    const id = req.params.id;
    Categoria.update(req.body, {
        where: {id:id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: "Categoria atualizada com sucesso!"
            });
        }else{
            res.send({
                message: `Não foi possível atualizar categoria com o id=${id}. Não foi encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Não foi possível atualizar a categoria com o id="+id
        });
    });
};