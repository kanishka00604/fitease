const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).send('Email already in use');

  const user = new User({ name, email, password }); // Pre-save will hash
  await user.save();

  res.redirect('/login');
});

// Login Route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) return res.status(401).send(info?.message || 'Login failed');
    req.logIn(user, (err) => {
      if (err) return res.status(500).send('Login error');
      return res.redirect('/index');
    });
  })(req, res, next);
});

module.exports = router;
