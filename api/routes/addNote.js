const router = require('express').Router(),
{ models: { Notes } } = require("../services/postgres");
  // TODO - add future validation
  // postFormValidation = require("../middlewares/postFormValidation");

// the route here is replaced by the route passed within ./index.js
router.post('/', async (req, res) => {
  console.log('/addNote request', req.body);
  const { subject, note } = req.body;
  
  // TODO - user_id will be dynamic after phase 3
  const addNote = await Notes.create({user_id: 1, subject, note})
  
  res.status(200).json(addNote);
});

module.exports = router;