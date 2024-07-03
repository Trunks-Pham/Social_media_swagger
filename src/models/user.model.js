const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Validate name format (no numbers, can contain multiple words)
                return /^\p{L}+(\s\p{L}+)*$/u.test(v); 
            },
            message: props => `${props.value} is not a valid name!`
        }
    },
    nickName: {
        type: String,
        required: true,
        unique: true  // Ensure nickname is unique
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure email is unique
        validate: {
            validator: function(v) {
                // Validate email format
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,  // Ensure phone number is unique
        validate: {
            validator: function(v) {
                // Validate Vietnamese phone number format (10 digits, starts with 03, 07, 08, 09, 012, 016, 018, 019)
                return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: []
    }],
});

// Indexes to enforce uniqueness
userSchema.index({ name: 1 }, { unique: true, sparse: true });  // Sparse index for optional uniqueness
userSchema.index({ nickName: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ phoneNumber: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
