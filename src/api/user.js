const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const {existOrError, notExistOrError, equalsOrError} = app.src.api.validation
    
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password,salt)
    }

    const save = async (request, response) => {
        
        const user = request.body

        if(request.params.id) user.id = request.params.id
        
        try {
            existOrError(user.nome,"nome não informado")
            existOrError(user.email,"E-mail não informado")
            existOrError(user.telefone,"Telefone não informado")
            existOrError(user.senha,"Senha não informada")
            existOrError(user.confirmSenha, "Confirmação de Senha Inválida")
            equalsOrError(user.password, user.confirmPassword, "Senhas não conferem")
            

            const  userFromEmailDB  = await app.db('users')
                .where({ email: user.email} ).first()
            
            if(!user.id){
                notExistOrError(userFromEmailDB, "Email já vinculado a um usuário")
            }

        } catch (msg) {
            return response.status(400).json({error: msg});
        }

        user.senha = encryptPassword(user.senha)
        delete user.confirmSenha

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        } else {
            app.db('users')
                    .insert(user)
                    .then(_ => response.status(204).send())
                    .catch(err => response.status(500).send(err))
        }
    }
    const get = async (request,response)=>{
        app.db('users')
            .select('id','nome','email','telefone','logradouro','numero','bairro','complemento','cep','cidade','estado')
            .then(users => response.json(users))
            .catch(err => response.status(500).send(err))
    }

    return { save, get }
}