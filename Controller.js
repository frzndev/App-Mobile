const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models = require('./models');

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = models.User;
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


// ROTAS ADMIN
app.post('/registerequipamento', async (req,res) => {
    await equipamento.create({
        tipoequipamento: req.body.tipoequipamento,
        marca: req.body.marca,
        modelo: req.body.modelo,
        estado: req.body.estado
    })
});

app.post('/listagem', (req, res) => {
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