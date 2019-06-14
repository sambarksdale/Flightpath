const express = require('express')
const router = express.Router()
const gameApi = require('../api/gameApi')

// router.route('/games').post((req,res)=>{
//     gameApi.getGamesByUserID(req.body.id)
//         .then(results=>{res.json(results.rows)})
// })

router
    .route('/games')
    .post((req,res)=>{
        gameApi.newGamae(req.body.game_type, req.body.p1_id, req.body.p2_id, req.body.result)
            .then((game)=>{
                console.log(game.rows)
                res.json(game.rows)
            })
    })

router.route('/games/table').post((req,res)=>{
    gameApi.getTableData(req.body.id)
        .then(games=>{res.json(games.rows)})
})




module.exports = router;