const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API Tasks goes here');
});

module.exports = router;