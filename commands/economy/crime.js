module.exports = {
name: "crime",
code: `
$author[1;Criminals be like]
$color[1;$getVar[embed_color]]
$description[1;<:slurpp:915621668754436126> **you commited a crime which is not so nice of you**
**You did get away with it and got [$numberSeparator[$random[1;100];,]]($getBotInvite)$getVar[symbol] **
]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;100]]]`}