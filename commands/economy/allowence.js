module.exports = {
name: "collect",
code: `
$setGlobalUserVar[allowence;$sub[$getGlobalUserVar[allowence];$getGlobalUserVar[allowence]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getGlobalUserVar[allowence]]]
$color[1;$getvar[color]]
$description[1;**You claimed $getGlobalUserVar[allowence]$getVar[symbol]**]
$globalCooldown[15s;wait %time%]`
}