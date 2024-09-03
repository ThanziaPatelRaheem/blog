const express = require("express");
const app = express();
const PORT = process.env.port || 8000;

app.use(express.json({ extended: false }));

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});
app.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
});
