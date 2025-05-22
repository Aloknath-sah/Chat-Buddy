import express from 'express'
import { getProfile, login, logout, register } from '../controllers/user.controller.js'
import { isAuthenticated } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/getProfile', isAuthenticated, getProfile)
router.post('/logout', isAuthenticated, logout)

export default router