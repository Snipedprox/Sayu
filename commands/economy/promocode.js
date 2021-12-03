module.exports = {

name: "promocode",
aliases: ['pclaim','pc'],
code: `

$setServerVar[worth;0]

$setServerVar[promocode;@#€_&-+@#€_&-+#€_&-+++#+++++]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[worth]]]

$color[1;$getVar[embed_color]]

$description[1;**<:arroww:915299668555096076> you claimed the promocode which was worth $numberSeparator[$getServerVar[worth];,]$getVar[symbol]
**]

$onlyIf[$toLowerCase[$message]==$getServerVar[promocode];Not a valid promocode]`

}