import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from 'fs';

const serverapp = express();
const items = JSON.parse(fs.readFileSync('./Mock-data.json', 'utf8'));
console.log(items);

dotenv.config();

serverapp.use(cors());
serverapp.use(express.json());
serverapp.use(express.urlencoded({ extended: true }));
serverapp.use(express.static("public"));

serverapp.get("/api", (req, res) => {
    console.log(res);
    return res.send(items)
});

serverapp.post('/api/additems', (req, res) => {
    const body = req.body;
    items.push({ ...body, id: items.length + 1 });
    fs.writeFileSync('./Mock-data.json', JSON.stringify(items), (err, data) => {
        return res.json({ status: "Sucess" })
    })
});

serverapp.put('/api/edititems/:id', (req, res) => {
    const { id } = req.params;  // Get item ID from URL params
    const updatedData = req.body;  // Get new data from request body
    const itemIndex = items.findIndex(item => item.id === parseInt(id));  // Find the item by ID
    if (itemIndex === -1) {
        return res.status(404).json({ status: "Error", message: "Item not found" });
    }
    // Update item
    items[itemIndex] = { ...items[itemIndex], ...updatedData };
    fs.writeFileSync('./Mock-data.json', JSON.stringify(items));  // Save updated items
    return res.json({ status: "Success", updatedItem: items[itemIndex] });
});

// Delete an item
serverapp.delete('/api/deleteitems/:id', (req, res) => {
    const { id } = req.params;  // Get item ID from URL params
    const itemIndex = items.findIndex(item => item.id === parseInt(id));  // Find the item by ID
    if (itemIndex === -1) {
        return res.status(404).json({ status: "Error", message: "Item not found" });
    }
    // Remove item from the array
    items.splice(itemIndex, 1);
    fs.writeFileSync('./Mock-data.json', JSON.stringify(items));  // Save updated items
    return res.json({ status: "Success", message: `Item with ID ${id} deleted successfully` });
});


const PORT = process.env.PORT || 3200;
serverapp.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
