const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

/**
 * Middleware de autenticación
 */
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Token inválido" });
  }
};

/**
 * @swagger
 * /api/auth/protected:
 *   get:
 *     summary: Endpoint protegido con JWT
 *     description: Solo accesible con un token válido.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso autorizado.
 *       401:
 *         description: Acceso denegado.
 */
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Acceso autorizado", user: req.user });
});

module.exports = router;

