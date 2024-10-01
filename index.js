const express = require('express');
const leaderboardRoute = require('./route/leaderboard');

const app = express();

app.get("/", (req, res) => {
    res.send({
      message: "Lu mau nyari apa?? mending join discord intens aja",
      author: "https://github.com/typicalsleepingboy",
      discord: "https://discord.gg/48intenscommunity",
    });
  });
  

app.get('/admin/intens/leaderboard', leaderboardRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});