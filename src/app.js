const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ status: "success", message: "Despliegue automatizado seguro" });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}