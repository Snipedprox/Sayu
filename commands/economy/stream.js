module.exports = {
name: "stream",
code: `
$title[1;**Live stream**]
$color[1;$getVar[embed_color]]
$description[1;**$randomText[You went live on youtube;You went live on twitch] and streamed yourself playing $randomText[minecraft;roblox;deez nuts] and your fans donated $random[1;50]$getVar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$globalCooldown[3m;your laptop is wayy to hot to stream now, so wait %time%]

$onlyIf[$getGlobalUserVar[laptop]>0;You wont own a laptop]`}