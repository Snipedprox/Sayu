module.exports = {
name: "weekly",
code: `

$author[1;Weekly claimed!]
$color[1;$getVar[embed_color]]
$description[1;**You claimed your weekly and you got $random[70;$getGlobalUserVar[wecap]]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[70;$getGlobalUserVar[wecap]]]]
$globalCooldown[7d;Its weekly so wait \`%time%\`]`}