const Diary = require('../models/diary-model')

createDiary = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an entry',
        })
    }

    const diary = new Diary(body)

    if (!diary) {
        return res.status(400).json({ success: false, error: err })
    }

    diary
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: diary._id,
                message: 'Diary created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Diary not created!',
            })
        })
}

module.exports = {
  createDiary,
}