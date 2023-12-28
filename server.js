const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.json());

app.post('/verify-recaptcha', async (req, res) => {
    const { token } = req.body;

    const secretKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const response = await fetch(verificationURL, { method: 'POST' });
        const data = await response.json();

        if (data.success) {
            res.json({ success: true, message: 'reCAPTCHA verification passed' });

        } 
        
        else { 
            res.status(400).json({ success: false, message: 'reCAPTCHA verification failed' });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error verifying reCAPTCHA' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
