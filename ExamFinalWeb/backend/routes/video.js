const router = require('express').Router();
const Video = require('../models/Video');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const video = await Video.create({ ...req.body, user: req.user });
  res.json(video);
});

router.get('/', auth, async (req, res) => {
  const video = await Video.find({ user: req.user });
  res.json(video);
});

router.get('/:id', auth, async (req, res) => {
  const video = await Video.findOne({ _id: req.params.id, user: req.user });
  if (!video) return res.status(404).send('Not found');
  res.json(video);
});

router.put('/:id', auth, async (req, res) => {
  const video = await Video.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );
  res.json(video);
});

router.delete('/:id', auth, async (req, res) => {
  await Video.findOneAndDelete({ _id: req.params.id, user: req.user });
  res.send('Deleted');
});

module.exports = router;
