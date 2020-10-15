const express = require("express");
const transferRouter = express.Router();
const transferController = require("../Controller/Transfer");
const authMiddleware = require("../Middleware/Auth");

transferRouter
    .get("/adm1n", authMiddleware.isAdmin,transferController.getTransferData)

    .post("/adm1n", authMiddleware.isAdmin,transferController.addTransferData)

    .patch("/adm1n/:id", authMiddleware.isAdmin,transferController.updateTransferData)

    .delete("/adm1n/:id", authMiddleware.isAdmin,transferController.deleteTransferData)

    .post("/", authMiddleware.isConsumerBeforePost,transferController.addTransferData)

    .get("/:id", authMiddleware.isConsumerCompareId,transferController.getTransferWhere)

    .get("/:id/pagination", authMiddleware.isConsumerCompareId,transferController.getTransferPagination)

module.exports = transferRouter;
