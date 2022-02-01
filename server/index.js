const express = require("express");
const fileupload = require('express-fileupload')
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
// const multer = require('multer')
const db=require('./database-mysql/index')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/public"));
app.use(fileupload())
// app.use('/api',itemRoutes);
// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//       callBack(null, './public')     // './public/images/' directory name where save the file
//   },
//   filename: (req, file, callBack) => {
    
//       callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// var upload = multer({
//   storage: storage
// });
app.get('/api/vid',(req,res)=>{
  var insertData = "SELECT * FROM vid"
    db.query(insertData, (err, result) => {
          if (err) throw err
          console.log("file uploaded")
          res.send(result)
    }) 
})
// app.post("/api/upload",upload.single('image'), (req, res) => {
//   console.log(req.body)
//   var imgsrc = 'http://127.0.0.1:3000/videos/' + req.body.name
//   var insertData = "INSERT INTO vid(file)VALUES(?)"
//   db.query(insertData, [imgsrc], (err, result) => {
//     if (err) throw err
//        console.log("file uploaded")
//     })
// });
app.post('/api/upload',(req,res )=>{
  if(req.files === null){
 return res.status(400).json({message:'No file file uploaded'})
  }
  const file=req.files.file
  console.log(file)
  if(file.mimetype == "video/quicktime" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){                           
    file.mv('public/images/upload_images/'+file.name, function(err) {            
      if (err){
        return res.status(500).send(err);
      }
        var imgsrc = 'http://127.0.0.1:3000/videos/' + file.name
        var insertData = "INSERT INTO vid(file)VALUES(?)"
        db.query(insertData, [imgsrc], (err, result) => {
          if (err) throw err
             console.log("file uploaded")
          })
   });
  }
})


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
