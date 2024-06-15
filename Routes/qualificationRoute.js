const express = require('express');
const router = express.Router();
const Qualification = require('../Model/qualificationModel');

router.post('/', async (req, res) => {
  try {
    const qualifications = req.body.qualifications.map(q => ({
      name: req.body.name,
      email: req.body.email,
      ...q
    }));

    const result = await Qualification.insertMany(qualifications);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedQualification = await Qualification.findByIdAndDelete(req.params.id);
    if (!deletedQualification) {
      return res.status(404).json({ message: 'Qualification not found' });
    }
    res.json({ message: 'Qualification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
