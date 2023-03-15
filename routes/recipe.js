const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipesController = require("../controllers/recipe");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id

router.get("/:id", ensureAuth, recipesController.getRecipe);

//Enables user to create post w/ cloudinary for media uploads
router.post("/createRecipe", upload.single("file"), recipesController.createRecipe);

router.post("/favoriteRecipe/:id", recipesController.favoriteRecipe);

//Enables usert to like post. In controller, uses POST model to update likes by 1
router.put("/likeRecipe/:id", recipesController.likeRecipe);

//Enables usert to delete post. In controller, uses POST model to delete post from MongoBD collection
router.delete("/deleteRecipe/:id", recipesController.deleteRecipe);

module.exports = router;
