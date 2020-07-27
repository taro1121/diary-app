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
        diary.item = body.item
        diary.value = body.value
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
                    message: 'Entry not updated!',
                })
            })
    })
}

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
        return res.status(200).json({ success: true, data: diaries })//diary ? diaries
    }).catch(err => console.log(err))
}

module.exports = {
    createDiary,
    updateDiary,
    deleteDiary,
    getDiaries,
    getDiaryById,
}