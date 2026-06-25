const express = require('express');

const professionals = require('./data/professional');
const app = express();
app.use(express.json())
const PORT = 3000;

//naming convention for api endpoints is to use plural nouns
app.get('/api/professionals', (req, res) => {
  res.status(200).json(professionals);
});

app.get('/api/professionals/:id', (req, res) => {
    const professionalId = parseInt(req.params.id,10);
    const professional = professionals.find((p) => p.id === professionalId);

    if (!professional){
        return res.status(404).json({message: 'Professional not found'});
    }
    res.status(200).json(professional);
});

app.post('/api/professionals', (req, res) => {
    const {name, category} = req.body;

    if (!name || !category){
        return res.status(400).json({message: 'Name and category are required'});
    }

    const newProfessional = {
        id: professionals.length + 1,
        name,
        category
    }

    professionals.push(newProfessional);
    res.status(201).json({message: 'Professionals created successfully', category, name});
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 