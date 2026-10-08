const contas = require("../contas.json")

const login = (req, res) => {
    const { email, senha } = req.body;
    if (email == contas.email && senha == contas.senha) {
        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            acesso: true
        });
    }
    return res.status(401).json({
        mensagem: "Email ou senha incorretos",
        acesso: false
    });
};

module.exports = {
    login
}