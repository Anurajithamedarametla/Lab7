const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/', (req, res) => {
  const { noun, adjective, verb, adverb, place } = req.body;

  // Create a mad lib using the provided inputs
  const madLib = `The ${adjective} ${noun} ${verb} ${adverb} to the ${place}.`;

  const resultHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mad Libs Result</title>
      <link rel="stylesheet" href="result.css">
    </head>
    <body>
      <div class="result-container">
        <h1>Your Mad Lib Result</h1>
        <div class="mad-lib" id="madLibResult"><strong>${madLib}</strong></div>
        <br>
        <a href="/" class="back-link">Go back to the form</a>
      </div>
    </body>
    </html>
  `;

  res.send(resultHTML);
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
