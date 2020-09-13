const Diary = require('../models/diary-model')

deleteDiary = async (req, res) => {
  await Diary.findOneAndDelete({ _id: req.params.id }, (err, diary) => {
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

module.exports = {
  deleteDiary,
}