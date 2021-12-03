module.exports = {
name: "beg",
code: `
$title[1;**Beggar**]
$color[1;$getVar[embed_color]]
$description[1;**You begged $randomText[another beggar which is terrible but he gave you $random[1;50]$getVar[symbol];Your mom for some money she said gtfo and get a job and she gave you $random[1;50]$getVar[symbol];Yourself for some $getVar[symbol] and you gave yourself $random[1;50]$getVar[symbol];God for some $getVar[symbol] even though your an atheist... god somehow gave you $random[1;50]$getVar[symbol] now do you belive in miracles?;Deez nuts and deez nuts gave you $random[1;50]$getVar[symbol];My owner who gave you $random[1;50]$getVar[symbol];nobody today wait what... well nobody gave you $random[1;50]$getVar[symbol]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;50]]]
$globalCooldown[30s;Mhm try again in %time%]`}