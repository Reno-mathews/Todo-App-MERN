const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/todos");

const app = express();

