module.exports = {
name: "hunt",
code: `
$author[1;Hunting]
$color[1;$getVar[embed_color]]
$description[1;**You went hunting and found a $randomText[:tiger:;:bear:;:boar:] **
**And you sold that $randomText[:tiger:;:bear:;:boar:]  and got [$random[1;50]]($getBotInvite)$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[rifle]>0;**You dont own a <:gunn:915383291765473330> , care to buy one first?]`
}