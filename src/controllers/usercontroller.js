const UserModel = require("../model/userModel.js")

async function crearUsuario(req, res){

    const{name, email, password, last_name, phone, address, avatar } = req.body;

    try{

        const img = req.file.filename; 

        if(img.length > 0){
            avatar = `images/imgusers/${img}`
        }

        const newUser = await UserModel.create({
            name,
            email,
            password,
            last_name,
            phone,
            address,
            avatar
        })

        res.status(200).json({ message: "Usuario creado exitosamente", user: newUser });

    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error al crear usuario" });
    }
}

module.exports = {crearUsuario}