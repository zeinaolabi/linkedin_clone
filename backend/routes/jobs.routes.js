const {Router} = require('express');
const {addJob, searchForJob} = require('../controllers/jobs.controller')
const router = Router();

router.post('/add_job', addJob);
router.get('/search_for_job', searchForJob);

module.exports = router;