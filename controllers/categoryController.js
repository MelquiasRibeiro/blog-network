
import Category from "../models/Category.js";



class CategoryController{

    async store(req, res){
        const newCategory = new Category(req.body);
        try {
          const savedCategory = await newCategory.save();
          res.status(200).json(savedCategory);
        } catch (error) {
          res.status(500).json(error);
        }
    }
    async index(_,res){
        try {
            const categories = await Category.find();
            res.status(200).json(categories);
          } catch (error) {
            res.status(500).json(error);
          }
    }

}



export default new CategoryController();