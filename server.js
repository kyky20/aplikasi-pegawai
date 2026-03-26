const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory Database
let employees = [
    { id: 1, name: 'John Doe', position: 'Rekayasa Perangkat Lunak', office: 'Jakarta', salary: 'Rp 12.000.000' },
    { id: 2, name: 'Jane Smith', position: 'Manajer Produk', office: 'Bandung', salary: 'Rp 15.000.000' },
    { id: 3, name: 'Budi Santoso', position: 'Pengembang Junior', office: 'Surabaya', salary: 'Rp 6.000.000' }
];
let nextId = 4;

// API Routes

// Read All
app.get('/api/employees', (req, res) => {
    // DataTables expects data in a specific format if we use the default dataSrc
    res.json({ data: employees });
});

// Read One
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) return res.status(404).json({ error: 'Pegawai tidak ditemukan' });
    res.json(employee);
});

// Create
app.post('/api/employees', (req, res) => {
    const { name, position, office, salary } = req.body;
    if (!name || !position || !office || !salary) {
        return res.status(400).json({ error: 'Semua kolom wajib diisi' });
    }
    const newEmployee = {
        id: nextId++,
        name,
        position,
        office,
        salary
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

// Update
app.put('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, position, office, salary } = req.body;
    const index = employees.findIndex(e => e.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Pegawai tidak ditemukan' });
    }
    
    if (!name || !position || !office || !salary) {
        return res.status(400).json({ error: 'Semua kolom wajib diisi' });
    }
    
    employees[index] = { id, name, position, office, salary };
    res.json(employees[index]);
});

// Delete
app.delete('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = employees.length;
    employees = employees.filter(e => e.id !== id);
    
    if (employees.length === initialLength) {
        return res.status(404).json({ error: 'Pegawai tidak ditemukan' });
    }
    
    res.status(204).send();
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
