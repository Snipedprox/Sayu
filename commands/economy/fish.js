module.exports = {
name: "fish",
code: `
$author[1;Fishyyy]
$color[1;$getVar[embed_color]]
$description[1;**You went fishing and found a :fish: **
**And you sold that :fish:  and got [$random[1;50]]($getBotInvite)$getVar[symbol]**]
$onlyIf[$getGlobalUserVar[rod]>0;**You dont own a <:rod:915383213944356865>, care to buy one first?]`
}