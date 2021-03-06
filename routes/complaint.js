const express = require('express')
const router = express.Router();
const {addComplaintController} = require('../controllers/complaintController')
const {updateComplaintStatusController} = require('../controllers/complaintController')
const {userComplaintsController} = require('../controllers/complaintController')
const {uploadComplaintPicsController} = require('../controllers/complaintController')
const {allComplaintsController} = require('../controllers/complaintController')
const auth = require('../middlewares/auth')

router.post('/add', auth, addComplaintController )
router.post('/updatestatus',auth,updateComplaintStatusController)
router.get('/all', auth, userComplaintsController)
router.post('/uploadimages',auth,uploadComplaintPicsController)
router.get('/allcomplaints',auth, allComplaintsController)

module.exports = router