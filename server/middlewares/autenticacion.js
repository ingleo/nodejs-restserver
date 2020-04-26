const jwt = require("jsonwebtoken");

//verificar token

let verificaToken = (req, res, next) => {
  console.log("1");
  let token = req.get("token");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token inválido",
        },
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

//verifica role admin
let verificaAdminRole = (req, res, next) => {
  console.log("2");
  let usuario = req.usuario;

  if (usuario.role === "ADMIN_ROLE") {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: {
        message: "El usuario no posee privilegios suficientes",
      },
    });
  }
};

module.exports = {
  verificaToken,
  verificaAdminRole,
};
