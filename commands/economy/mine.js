module.exports = {
name: "mine",
code: `
**" $username you went mining and found"**
**Silver** <:silverore:915398370854572063> x $random[1;15]
**Crystal** <:crystal:915398448675696640> x $random[1;6]
**Ruby** <:ruby:915398513725173811> x $random[1;7]
**uranium** <:uranium:915398578728480828> x $random[1;4]
**Sulphur** <:sulphur:915398728477716503> x $random[1;5]

**and you also found $random[1;150]$getVar[symbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;150]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$random[1;15]]]

$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$random[1;6]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$random[1;7]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$random[1;5]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$random[1;4]]]

$onlyIf[$getGlobalUserVar[pickaxe]>0;**Go buy <:pickaxee:915383399424868363>**]`}
