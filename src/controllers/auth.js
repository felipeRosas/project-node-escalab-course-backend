const User = require('../models/user')
const slugify = require('slugify')
exports.createOrUpdateUser = async (req,res) => {
    try {
        const { email } = req.user
        const userName = email.split('@')[0]
        console.log('EMAIL ', email, ' username ', userName)
        const user = await User.findOneAndUpdate(
            {email},
            {userName: userName},
            {new: true}
        )
    
        if(user){
            console.log('user updated', user)
            res.json(user)
        } else {
            const { name, lastName, address, rut, dateOfBirth, phone} = req.body
            const slug = slugify(`${name.toLowerCase()} ${lastName.toLowerCase()}`)
            const newUser = await new User({
                email, userName,name, lastName, address, rut, dateOfBirth, phone,slug
            }).save()
            console.log('new user', user)
            return res.json(newUser)
        }
    } catch (error) {
        return res.status(401).json({
            error: 'error',
            message: error.message
        })
    }


}

exports.currentUser = async (req,res) => {
    User.findOne({ email: req.user.email }).exec((err, user) => {
        if (err) throw new Error(err);
        res.json(user);
      });
}