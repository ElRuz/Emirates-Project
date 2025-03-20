const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Utility function to read the JSON file
function readData() {
  const data = fs.readFileSync('EKSdetUseCase.json', 'utf-8');
  return JSON.parse(data);
}

// Utility function to write the JSON file
function writeData(jsonData) {
  fs.writeFileSync('EKSdetUseCase.json', JSON.stringify(jsonData, null, 2));
}

// GET /records - Retrieve all records or filter by appName
app.get('/records', (req, res) => {
  const data = readData();
  const search = req.query.search || '';

  const filtered = search
    ? data.filter(item => item.appName.toLowerCase().includes(search.toLowerCase()))
    : data;

  res.json(filtered);
});

// PUT /records/:appName - Update appOwner or isValid
app.put('/records/:appName', (req, res) => {
  const data = readData();
  const appName = req.params.appName;
  const { appOwner, isValid } = req.body;

  const recordIndex = data.findIndex(d => d.appName === appName);
  if (recordIndex === -1) {
    return res.status(404).json({ error: 'Record not found' });
  }

  if (appOwner !== undefined) {
    data[recordIndex].appData.appOwner = appOwner;
  }
  if (isValid !== undefined) {
    data[recordIndex].appData.isValid = isValid;
  }

  writeData(data);
  res.json(data[recordIndex]);
});

// DELETE /records/:appName - Delete a record
app.delete('/records/:appName', (req, res) => {
  const data = readData();
  const appName = req.params.appName;

  const filtered = data.filter(d => d.appName !== appName);
  if (filtered.length === data.length) {
    return res.status(404).json({ error: 'Record not found' });
  }

  writeData(filtered);
  res.json({ success: true });
});

// Serve index.html file from public folder
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
