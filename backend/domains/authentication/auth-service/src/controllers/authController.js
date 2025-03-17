const db = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ message: "Usuario registrado exitosamente" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });

    if (results.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Inicio de sesión exitoso", token });
  });
};
