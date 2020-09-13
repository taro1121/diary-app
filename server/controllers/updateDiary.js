const Diary = require('../models/diary-model')

updateDiary = async (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a body to update',
      })
  }

  Diary.findOne({ _id: req.params.id }, (err, diary) => {
      if (err) {
          return res.status(404).json({
              err,
              message: 'Entry not found!',
          })
      }
      diary.date = body.date
      diary.item1Desc = body.item1Desc
      diary.item1Value = body.item1Value

      // diary.items[1].desc = body.items[1].desc
      // diary.items[1].value = body.items[1].value

      // diary.items[2].desc = body.items[2].desc
      // diary.items[2].value = body.items[2].value

      // diary.items[3].desc = body.items[3].desc
      // diary.items[3].value = body.items[3].value

      // diary.items[4].desc = body.items[4].desc
      // diary.items[4].value = body.items[4].value

      // diary.items[5].desc = body.items[5].desc
      // diary.items[5].value = body.items[5].value

      diary
          .save()
          .then(() => {
              return res.status(200).json({
                  success: true,
                  id: diary._id,
                  message: 'Diary updated!',
              })
          })
          .catch(error => {
              return res.status(404).json({
                  error,
                  message: 'Diary not updated!',
              })
          })
  })
}

module.exports = {
  updateDiary,
}