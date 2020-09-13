const express = require('express')

const DiaryCtrl = require('../controllers/diary-ctrl')

const router = express.Router()

// Crate diary entry
router.post('/diaries/create', DiaryCtrl.createDiary)

// Get array of all diary entries from db
router.get('/diaries', DiaryCtrl.getDiaries)

// Get a single diary entry from db
router.get('/diary/:id', DiaryCtrl.getDiaryById)

// Put a single diary entry to db
router.put('/diary/:id', DiaryCtrl.updateDiary)

// Delet a single diary entry from db
router.delete('/diary/:id', DiaryCtrl.deleteDiary)

module.exports = router