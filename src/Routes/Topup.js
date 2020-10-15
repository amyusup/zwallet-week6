const express = require("express");
const topupRouter = express.Router();
const topupController = require("../Controller/Topup");
const authMiddleware = require("../Middleware/Auth");

topupRouter.get("/", authMiddleware.isConsumer, topupController.getInstructions);

topupRouter.get("/adm1n", authMiddleware.isAdmin, topupController.getInstructions);

topupRouter.post("/adm1n", authMiddleware.isAdmin, topupController.addInstructions);

topupRouter.patch("/adm1n/:id", authMiddleware.isAdmin,topupController.updateIntructions)

topupRouter.delete("/adm1n/:id", authMiddleware.isAdmin,topupController.deleteIntructions)

module.exports = topupRouter;
