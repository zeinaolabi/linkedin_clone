const {Router} = require('express');
const {searchForJob} = require('../controllers/jobs.controller')
const router = Router();

router.post('/search_for_job', searchForJob);

module.exports = router;