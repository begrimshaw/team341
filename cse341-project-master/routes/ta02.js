//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const names = ['peter', 'james', 'john'];

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: names
  });
});

router.post('/addUser', (req, res, next) => {
  names.push(req.body.username);
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const  removeUser = req.body.removeUser;
  const index = names.indexOf(removeUser);
  if(index !== -1) {
    names.splice(index, 1);
  }
  res.redirect('/ta02');
});


module.exports = router;
