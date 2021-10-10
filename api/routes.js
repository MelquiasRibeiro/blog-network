import  express  from "express";
import UserController from "./controllers/userController.js"
import AuthController from "./controllers/authController.js"
import PostController from "./controllers/postController.js"
import CategoryController from "./controllers/categoryController.js"


const routes = express.Router();


routes.get("/",(_,res)=>{
    res.send({ok:true})
})

routes.post("/users",UserController.store)
routes.get("/users",UserController.index)
routes.get("/users/:id",UserController.show)
routes.put("/users/:id",UserController.update)
routes.delete("/users/:id",UserController.delete)

routes.post("/posts",PostController.store)
routes.get("/posts",PostController.index)
routes.get("/posts/:id",PostController.show)
routes.put("/posts/:id",PostController.update)
routes.delete("/posts/:id",PostController.delete)

routes.get("/categories",CategoryController.index)
routes.post("/categories",CategoryController.store)

routes.post("/login",AuthController.login)




export default routes;