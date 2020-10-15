const express = require("express");
const usersRouter = express.Router();
const usersController = require("../Controller/Users");
const authMiddleware = require("../Middleware/Auth");

usersRouter.get("/" ,(req,res)=>res.send("No content available"))

usersRouter.get("/search", usersController.getUsersLike);

usersRouter.get("/:id", authMiddleware.isConsumerCompareId ,usersController.getUsersWhere)

usersRouter.get("/adm1n", authMiddleware.isAdmin ,usersController.getUsers)

usersRouter.post("/adm1n", authMiddleware.isAdmin, usersController.addUsers);

usersRouter.get("/adm1n/:id", authMiddleware.isAdmin , usersController.getUsersWhere);

usersRouter.patch("/adm1n/:id", authMiddleware.isAdmin , usersController.updateUsers);

usersRouter.delete("/adm1n/:id", authMiddleware.isAdmin, usersController.deleteUsers);




module.exports = usersRouter;
