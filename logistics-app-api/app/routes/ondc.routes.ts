import express from 'express'
import OndcController from '../controllers/ondc.controller'

const router = express.Router()
const ondcController = new OndcController()

router.post('/search', ondcController.agentSearch)
router.post('/init', ondcController.orderInit)
router.post('/confirm', ondcController.orderConfirm)
router.post('/update', ondcController.orderUpdate)
router.post('/status', ondcController.orderStatus)
router.post('/support', ondcController.support)
router.post('/cancel', ondcController.cancel)
router.post('/track', ondcController.track)
router.post('/issue', ondcController.issue)
router.post('/issue_status', ondcController.issueStatus)

export default router
