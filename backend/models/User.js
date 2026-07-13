const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }
});

userSchema.methods.comparePassword = function(password) {
  return bcryptjs.compare(password, this.password);
};

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcryptjs.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);