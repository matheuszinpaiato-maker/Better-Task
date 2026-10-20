const contas = require("../contas.json");

const login = (req, res) => {
    const { email, senha } = req.body;
    const contaEncontrada = contas.find((conta) => {
        return conta.email === email && conta.senha === senha;
    });
    if (contaEncontrada) {
        console.log({
            mensagem: "Login realizado com sucesso!",
            acesso: true,
            nome: contaEncontrada.nome,
        });
        return res.redirect("http://127.0.0.1:5500/client/inicioALUNO.html");
    }
    return res.status(401).json({
        mensagem: "Email ou senha incorretos",
        acesso: false
    });
};

module.exports = {
    login
};