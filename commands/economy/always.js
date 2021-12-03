module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[allowence;$sum[$getGlobalUserVar[allowence];$getGlobalUserVar[alcap]]]
$wait[3s]
$globalCooldown[3s;$setVar[color;$getVar[color]]]
`}