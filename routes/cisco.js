const { Router } = require('express');
const { msg, comment } = require('../db');
const router = Router();

router.get('/', async (req,res) => {
  //const comments = await comment.findAll();
  const msgs = await msg.findAll(
   //{include: [comment]}
  );
  res.render('index', {
    msg:msgs,
    //comment:comments
  });
});

router.post('/', async (req,res) =>{
  if(req.body.name==""||req.body.message==""){
    return res.send('fail');
  }
  const new_msg = await msg.create({
    name: req.body.name,
    message: req.body.message
  });
 /* const new_comment = await comment.create({
    name: req.body.nameComment,
    comment: req.body.comment
  });*/
  res.redirect('/');
});

module.exports = router;