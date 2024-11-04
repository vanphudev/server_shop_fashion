"use strict";
const express = require("express");
const publicRouter = express.Router();

publicRouter.use("/nhom_loai", require("./nhomLoaiAPI"));

module.exports = publicRouter;
