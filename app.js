const express =require("express");
const app = express();
require("./src/database/db")
const path = require("path");
const methodOverride = require('method-override');
app.use(express.static("public"));
const publicPath = path.resolve(__dirname, "./public");
const session = require("express-session");
const rutas = require("./src/routes/main");
const rutass = require("./src/routes/rutas")
const categoriesProduct = require("./src/routes/categorias");
const routerForms = require("./src/routes/formRoutes");
const routerProducts = require("./src/routes/productsRoutes");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
const morgan = require("morgan");
const { loguserMiddleware } = require("./middlewares/loguser");
app.use(morgan("dev"));


app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(methodOverride('_method'));
app.use(session({secret: "secreto",
resave: false,
saveUninitialized: false}));
app.use(loguserMiddleware);


app.use(rutas);
app.use(categoriesProduct); 
app.use(routerForms);
app.use(routerProducts);
app.use(rutass);

app.listen(3000, () =>{
    console.log("servidor corriendo")
});