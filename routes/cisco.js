const { Router } = require('express');
const { Msg, Comment } = require('../models/msgDB');
const router = Router();

router.get('/', async (req,res) => {
  const comments = await Comment.findAll(
    {include: [Msg]}
  );
  const msgs = await Msg.findAll(
   {include: [Comment]}
  );
  res.render('index', {
    msg:msgs,
    comment:comments
  });
});

router.post('/', async (req,res) =>{
  if(req.body.name==''||req.body.message==''){
    return res.send('fail');
  }
  const new_msg = await Msg.create({
    name: req.body.name,
    message: req.body.message
  });

  res.redirect('/');
});

router.post('/comment', async (req,res) =>{
  if(req.body.name==''||req.body.comment==''){
    return res.send('fail');
  }
  const new_comment = await Comment.create({
    name: req.body.name,
    comment: req.body.comment,
    MsgId: req.body.msgId
  });
  res.redirect('/');
});

module.exports = router;