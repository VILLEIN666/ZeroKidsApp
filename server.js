const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ডেমো ডাটাবেস (মেমরিতে)
let devices = [];

// Kids App থেকে লোকেশন আসার API
app.post('/api/location', (req, res) => {
    const { device_id, lat, lng } = req.body;
    const existingDevice = devices.find(d => d.device_id === device_id);
    
    if (existingDevice) {
        existingDevice.lat = lat;
        existingDevice.lng = lng;
        existingDevice.last_seen = new Date().toLocaleTimeString();
    } else {
        devices.push({
            device_id: device_id,
            lat: lat,
            lng: lng,
            last_seen: new Date().toLocaleTimeString()
        });
    }
    console.log(`📍 Location received from ${device_id}: ${lat}, ${lng}`);
    res.status(200).json({ status: "success" });
});

// Parent Dashboard এর জন্য ডিভাইস লিস্ট API
app.get('/api/devices', (req, res) => {
    res.json(devices);
});

// সার্ভার চালু করা
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
