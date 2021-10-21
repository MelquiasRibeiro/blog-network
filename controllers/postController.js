import Post from "../models/Posts.js";

class PostContoller {
    async index(req, res){
        const {userName,categoryName} =req.query
        try {
          let posts;
          if (userName) {
            posts = await Post.find({ userName });
          } else if (categoryName) {
            posts = await Post.find({
              categories: {
                $in: [categoryName],
              },
            });
          } else {
            posts = await Post.find();
          }
          res.status(200).json(posts);
        } catch (error) {
          res.status(500).json(error);
        }
    }
    async update(req, res){
      try{
          const {body, params} = req;
          const post = await Post.findByIdAndUpdate(params.id,{
          $set:body
        },{new:true});
        res.status(200).json(post);
        } catch (error) {
          res.status(400).json({error:"something wrong with your request"})
        }
    }
    async store(req, res){
        const {body}=req
          
        const newPost = new Post({
            title:body.title,
            description:body.description,
            userName:body.userName,
            photo:body.photo||"",
            categories:body.categories||[],
        })
        try {
            const post = await newPost.save();
            res.status(201).json(post);

        } catch (error) {
          res.status(400).json({error:`something wrong with your request ${error}`})
        }
    }
    async delete(req, res){
      try{
        const {id} = req.params;
          await Post.findByIdAndDelete(id);
          res.status(200).json("Post has been deleted...");
      } catch (error) {
        res.status(404).json(
          {
          error
      })
      }
    }
    async show(req,res){
      try {
        const{id}=req.params
        const post = await Post.findById(id)
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json(error)
      }
    }
}

export default new PostContoller();