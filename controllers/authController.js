import User from "../models/User.js";
import bcrypt from "bcrypt";


class AuthController {
    async login(req,res){
        try {
            const {email} = req.body

            const user = await User.findOne({ email: email });
            !user && res.status(400).json("Wrong credentials!");
            
            const validated = await bcrypt.compare(req.body.password, user.password);
            !validated && res.status(400).json("Wrong credentials!");
            
            const { password, ...others } = user._doc;

            res.status(200).json(others)

        } catch (error) {
            res.status(500).json(err);
        }

    } 
}

export default new AuthController();