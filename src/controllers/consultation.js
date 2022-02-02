const Consultation = require('../models/consultation')


exports.create = async (req, res) => {
    try {
        // const { date, annotation, veterinarian, 
        //         patient, weightPatient,dateNextConsultation,vaccine} = req.doby
                res.json( await new Consultation(req.body)
                            .save()
                        )
    } catch (error) {
        console.log(error)
        res.status(400).send('create consultation failed')
    }
}

exports.update = async (req, res) => {
    
}
exports.softRemove = async (req, res) => {
    
}

exports.hardRemove = async (req, res) => {

}

exports.read = async (req, res) => {

}