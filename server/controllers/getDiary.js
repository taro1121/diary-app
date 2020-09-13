const Diary = require('../models/diary-model')

getDiaryById = async (req, res) => {
  await Diary.findOne({ _id: req.params.id }, (err, diary) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }

      if (!diary) {
          return res
              .status(404)
              .json({ success: false, error: `Diary not found` })
      }
      return res.status(200).json({ success: true, data: diary })
  }).catch(err => console.log(err))
}

getDiaries = async (req, res) => {
  await Diary.find({}, (err, diaries) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!diaries.length) {
          return res
              .status(404)
              .json({ success: false, error: `Diary not found` })
      }
      // return res.status(200).json({ success: true, data: diaries })
      return res.status(200).json({ success: true, data: diaries.sort((a,b) => new Date(a.date) - new Date(b.date)) })
  }).catch(err => console.log(err))
}

module.exports = {
  getDiaries,
  getDiaryById,
}