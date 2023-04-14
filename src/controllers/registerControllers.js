
const UserModel = require("../model/userModel.js");


const register = (req, res) => {
    res.render("register");
};


const formRegister = (req, res) => {
    const errors = validationResult(req);  //codigo de validacion
    if (errors.isEmpty()) {
    const data =  req.body;
     
    const img = req.file.filename; 
        const newIdUser =  users[users.length - 1].id + 1;
        let newImage;
        if(img.length > 0){
            newImage = `images/imgusers/${img}`
        } 
        const obj = {
            id: newIdUser,
            ...data, 
            img : newImage
        }
     /*    let jsonString =  JSON.stringify(data); */
        users.push(obj);
        fs.writeFile(path.join(__dirname,'../database/users.json'), JSON.stringify(users,null," "), (err) => {
            if (err) {
                res.send("Error"); //writefilesync cambiar  users.push data. 
                return;
            }
            res.render("login"); 
        })
        } else{
            res.render(path.join(__dirname, '../views/register'), {errors: errors.array()});// No hay errores, seguimos adelante
   }
}; 