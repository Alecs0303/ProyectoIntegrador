const express = require('express');
const routerr = express.Router();
const { crearUsuario } = require('../controllers/usercontroller');
const { loginUser } = require('../controllers/loginController');

const {hashPasswordMiddleware} = require("../../middlewares/encriptar")
const multer = require("multer");
const {body} = require("express-validator");


const validations = [
    body("nombre").notEmpty().withMessage("Poner nombre de usuario"),
    body("apellido").notEmpty().withMessage("Poner apellido"),
    body("email").notEmpty().withMessage("E-mail requerido"),
    body("telefono").notEmpty().withMessage("Telefono requerido"),
    body("direccion").notEmpty().withMessage("Direccion requerida"),  
]

let storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, path.join(__dirname, "../../public/images/imgusers"));
    },
    filename: (req,file, cb ) =>{
        console.log(file);
        const newImage = "avatar" + Date.now() + path.extname(file.originalname);
        cb(null, newImage);
    }
})

const upload = multer({storage});


// Ruta para crear un usuario
routerr.post('/crearUsuario',upload.single("avatar"),validations,hashPasswordMiddleware, crearUsuario);
routerr.post('/loginUser',loginUser)


module.exports = routerr;

