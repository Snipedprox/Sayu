module.exports = {
name: "daily",
code: `

$author[1;Daily claimed!]
$color[1;$getVar[embed_color]]
$description[1;**You claimed your daily and you got $random[1;$getGlobalUserVar[dacap]]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;$getGlobalUserVar[dacap]]]]
$globalCooldown[24h;Its daily so wait \`%time%\`]`}