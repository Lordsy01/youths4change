const express = require('express');
const router = express.Router();
const { submitVolunteer } = require('../controllers/volunteerController');
const { validateVolunteer } = require('../middleware/validateForm');

router.post('/', validateVolunteer, submitVolunteer);

module.exports = router;
