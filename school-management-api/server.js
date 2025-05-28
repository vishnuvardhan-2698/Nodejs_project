const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());


const schoolRoutes = require('./routes/schoolRoutes');
app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
