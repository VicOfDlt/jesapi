const express = require("express"),
      router = express.Router(),
      emc = require("vicjes"),
      cache = require("memory-cache"),
      cacheTimeout = require("../..").cacheTimeout

router.get("/", async (req, res, next) => 
{
    var cachedPlayers = cache.get(req.url)
    if (cachedPlayers) {
        res.status(200).json(cachedPlayers)
    } else {
        var allPlayers = await emc.getAllPlayers().then(players => { return players })

        res.status(200).json(allPlayers)
        cache.put(req.url, allPlayers, cacheTimeout*1000)
    }
})

router.get("/:playerName", async (req, res, next) => 
{
    var cachedPlayer = cache.get(req.url)
    if (cachedPlayer) {
        res.status(200).json(cachedPlayer)
    } else {
        var playerName = req.params.playerName
        var foundPlayer = await emc.getPlayer(playerName).then(players => { return players })

        if (!foundPlayer) res.status(404).json("That player does not exist!")
        else {
            res.status(200).json(foundPlayer)
            cache.put(req.url, foundPlayer, cacheTimeout*1000)
        }
    }
})

module.exports = router