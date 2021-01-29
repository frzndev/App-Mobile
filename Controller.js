const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models = require('./models');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = models.User;
let requisicao = models.Requisicao;
let equipamento = models.Equipamento;

// ROTAS AUTENTICAÇÃO
app.post('/login', async (req,res) => {
    let response = await user.findOne({
        where:{ login:req.body.login, password: req.body.password }
    });

    if(response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

app.post('/register', async (req,res) => {
    await user.create({
        login: req.body.login,
        password: req.body.password,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        escola: req.body.escola,
        tipodeutilizador: req.body.tipodeutilizador
    })
});

app.post('/verifyPassword', async (req,res) => {
    let response = await user.findOne({
        where:{ id:req.body.id, password: req.body.passwordAntiga }
    });

    if(response === null) {
        res.send(JSON.stringify('Password Antiga Incorreta'));
    } else {
        if(req.body.novaPassword === req.body.confPassword){
            response.password = req.body.novaPassword;
            response.save();
            res.send(JSON.stringify("Password Alterada com Sucesso !"));            
        } else {
            res.send(JSON.stringify("As Passwords Não Coincidem"));
        }
    }
});

// ROTAS USUARIO
app.post('/listEquipamments', (req, res) => {
    equipamento.findAll({
        where: {
            tipoequipamento: req.body.tipoequipamento,
            estado: 1
        },
        attributes: ['id', 'marca', 'modelo']
    }).then(equipamento => {
        res.status(200).json(equipamento)
    })
});

app.post('/registerRequisicao', async (req,res) => {
    await requisicao.create({
        utilizador_id: req.body.utilizador_id,
        equipamento_id: req.body.equipamento_id,
        data_requisicao: req.body.data_requisicao,
        data_devolucao: req.body.data_devolucao,
        descricao: req.body.descricao,
        tempo_necessario: req.body.tempo_necessario,
        estado: req.body.estado
    })
});

app.post('/listRequiredEquipamments', (req, res) => {
    requisicao.findAll({
        where: {
            utilizador_id: req.body.utilizador_id,
            data_devolucao: null
        },
        attributes: ['id', 'equipamento_id', 'data_requisicao', 'estado']
    }).then(requisicao => {
        res.status(200).json(requisicao)
        console.log(requisicao)
    })
});


// ROTAS ADMIN
    // GERIR USERS
    app.post('/userlist', (req, res) => {
        user.findAll({
            where: {
                tipodeutilizador: req.body.tipodeutilizador
            },
            attributes: ['id', 'login', 'password', 'nome', 'email', 'telefone', 'escola']
        }).then(user => {
            res.status(200).json(user)
        })
    });

    // GERIR REQUISIÇÕES

    // GERIR DEVOLUÇÕES

    // GERIR EQUIPAMENTOS
    app.post('/registerequipamento', async (req,res) => {
        await equipamento.create({
            tipoequipamento: req.body.tipoequipamento,
            marca: req.body.marca,
            modelo: req.body.modelo,
            estado: req.body.estado
        })
    });

    app.post('/equipamentlist', (req, res) => {
        equipamento.findAll({
            where: {
                tipoequipamento: req.body.tipoequipamento
            },
            attributes: ['marca', 'modelo', 'estado']
        }).then(equipamento => {
            res.status(200).json(equipamento)
        })
    });


let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('running...');
});