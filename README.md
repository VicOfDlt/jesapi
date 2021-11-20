# vicjes API 
[![NPM Version][npm-image]][npm-url] 
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

A REST API providing information on the vicjes Minecraft server.

## Prerequisites
Install a fetch package such as [node-fetch](https://www.npmjs.com/package/node-fetch)
```bash
$ npm install node-fetch
```
Require the package
```js
var fetch = require("node-fetch")
```

## Example
```js
var town = await fetch("http://vicjes-api.herokuapp.com/towns/London").then(response => response.json()).catch(err => { return err }) 

console.log(town)

// => { area: 975, x: -352, z: -9904, name: 'TownName', nation: 'NationName', mayor: 'MayorName', residents: ['Resident', 'OtherResident', ...], pvp: false, mobs: false, public: false, explosion: false, fire: false, capital: true }
```

## Routes
<details>
<summary>Towns</summary>
<p>

All towns - [http://vicjes-api.herokuapp.com/towns/](http://vicjes-api.herokuapp.com/towns/)<br>
Get town - [http://vicjes-api.herokuapp.com/towns/townName](http://vicjes-api.herokuapp.com/towns/London)
</details>

<details>
<summary>Nations</summary>
<p>

All nations - [http://vicjes-api.herokuapp.com/nations/](http://vicjes-api.herokuapp.com/nations/)<br>
Get nation -[http://vicjes-api.herokuapp.com/nations/nationName](http://vicjes-api.herokuapp.com/nations/Britain)
</details>

<details>
<summary>Residents</summary>
<p>

All residents - [http://vicjes-api.herokuapp.com/residents/](http://vicjes-api.herokuapp.com/residents/)<br>
Get resident - [http://vicjes-api.herokuapp.com/residents/residentName](http://vicjes-api.herokuapp.com/residents/Warriorrr)
</details>

<details>
<summary>Online Players</summary>
<p>

All online players - [http://vicjes-api.herokuapp.com/onlineplayers/](http://vicjes-api.herokuapp.com/onlineplayers/)<br>
Get online player - [http://vicjes-api.herokuapp.com/onlineplayers/playerName](http://vicjes-api.herokuapp.com/onlineplayers/playerName)
</details>

<details>
<summary>Townless Players</summary>
<p>


[http://vicjes-api.herokuapp.com/townlessplayers](http://vicjes-api.herokuapp.com/townlessplayers)  (This is only townless players that are online)
</details>

<details>
<summary>All Players</summary>
<p>

This merges online players and residents.<br>
**NOTE** - The "town", "nation" and "rank" keys will not appear for townless players

All players - [http://vicjes-api.herokuapp.com/allplayers/](http://vicjes-api.herokuapp.com/allplayers/)<br>
Get player - [http://vicjes-api.herokuapp.com/allplayers/playerName](http://vicjes-api.herokuapp.com/allplayers/playerName)
</details>

<details>
<summary>Nearby</summary>
<p>  
Returns any players visible on the map in a radius to a certain point.<br>
Nearby - http://vicjes-api.herokuapp.com/nearby/xPos/zPos/xRadius/zRadius
</details>

<details>
<summary>Server Info</summary>
<p>

[http://vicjes-api.herokuapp.com/serverinfo/](http://vicjes-api.herokuapp.com/serverinfo/)
</details>

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/vicjes.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/vicjes
