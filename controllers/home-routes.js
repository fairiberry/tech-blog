const router = require('express').Router();
const postjs = require('../models/post');

// route to get all dishes
router.get('/', async (req, res) => {
  const postData = await postjs.findAll().catch((err) => { 
      res.json(err);
    });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('loggedin', { posts });
    });


router.get('/posts', async (req, res) => {
    res.render('loggedin');
});

router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard');
});

router.get('/newpost', async (req, res) => {
    res.render('newPost');
});

// route to get one dish
router.get('/post/:id', async (req, res) => {
  try{ 
      const postData = await postjs.findByPk(req.params.id);
      if(!postData) {
          res.status(404).json({message: "error: post not found"});
          return;
      }
      const post = postData.get({ plain: true });
      res.render('post', post);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
