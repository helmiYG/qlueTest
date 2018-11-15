const router = require('express').Router()
const fs = require('fs');

function getData(cb) {
    fs.readFile('./data.json','utf8',function(err,data){
        if(err){
            throw err
        }
        cb(JSON.parse(data))
    })
}

router.get('/', (req, res) => {
    let result = {
        h: [],
        d: []
    }

    getData(function(data) {
       for (const i in data) {
           let temp = []
         for (const j in data[i]) {
             if (i == 0) {
                result.h.push(j)  
            } 
           temp.push(data[i][j])
         }
         result.d.push(temp)
       }
      res.send(result)
    })
})


module.exports = router

