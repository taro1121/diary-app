const express = require('express')

const DiaryCtrl = require('../controllers/diary-ctrl')

const router = express.Router()

router.post('/diary', DiaryCtrl.createDiary)
router.put('/diary/:id', DiaryCtrl.updateDiary)
router.delete('/diary/:id', DiaryCtrl.deleteDiary)
router.get('/diary/:id', DiaryCtrl.getDiaryById)
router.get('/diaries', DiaryCtrl.getDiaries)

module.exports = router