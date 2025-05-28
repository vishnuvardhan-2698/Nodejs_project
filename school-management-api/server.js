const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
});

// POST route to add a school
app.post('/add-school', (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error inserting school');
    }
    res.status(201).send('School added successfully');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
