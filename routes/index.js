const express = require('express');
const router = express.Router();
const { getFiles } = require('../services/files');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const { FileNames:fileNames } = await getFiles();
  console.log(fileNames);
  res.render('index', { title: 'Fleek Assignment', fileNames });
});

module.exports = router;
