const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");

const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//Set up parsing into req.body
app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/messages", messageRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});