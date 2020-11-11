module.exports = app => {

    const save = async (request,response) => {

        const {existOrError} = app.src.api.validation
        const item = request.body
        
        if(request.params.id) item.id = request.params.id

        try {
            existOrError(item.titulo,"Titulo não informado")
            existOrError(item.descricao, "Digite uma breve descrição")
        } catch (msg) {

            return response.status(400).json({error: msg});
        }
        if(item.id) {
            console.log(item)
            app.db('item')
                .update(item)
                .where({ id: item.id })
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send({error: err}))
        } else {
            app.db('item')
                .insert(item)
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send({error: err}))   
        }
    }

    const get = (request,response)=>{
        app.db('item')
            .select('id','titulo','descricao')
            .then(item => response.json(item))
            .catch(err => response.status(500).send(err))
    }
    return { save, get}
}