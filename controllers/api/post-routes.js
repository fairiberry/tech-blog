const router = require('express').Router();
const postjs = require('../../models/Post');


router.post('/', async (req, res) => {
  try { 
    const postData = await postjs.create({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
