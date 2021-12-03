module.exports = {
name: "open",
$if: "v4",
aliases: ['crate','crates','opencrate'],
code: `
$if[$message[1]==common]
<:common:913557310486482974> **|** **You are now opening $message[2]<:common:913557310486482974>**

$editIn[3s;<:common:913557310486482974> **|** **You are now opening $message[2]<:common:913557310486482974>** and got

$multi[$message[2];$random[1;500]]$getVar[symbol]

$multi[$message[2];$random[1;5]]<:silverore:915398370854572063>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;500]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;5]]]]
$setGlobalUserVar[common;$sub[$getGlobalUserVar[common];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[common]>=$multi[1;$message[2]];You dont have that many to open]
$else

$if[$message[1]==uncommon]
<:uncommonly:913557451800993852> **|** **You are now opening $message[2]<:uncommonly:913557451800993852>**

$editIn[3s;<:uncommonly:913557451800993852> **|** **You are now opening $message[2]<:uncommonly:913557451800993852>** and got

$multi[$message[2];$random[1;1500]]$getVar[symbol]

$multi[$message[2];$random[1;5]]<:silverore:915398370854572063>
$multi[$message[2];$random[1;10]]<:crystal:915398448675696640>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;1500]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;50]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;10]]]]
$setGlobalUserVar[uncommon;$sub[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[uncommon]>=$multi[1;$message[2]];You dont have that many to open]

$else

$if[$message[1]==rare]
<:rare:913557619547979787> **|** **You are now opening $message[2]<:rare:913557619547979787>**

$editIn[3s;<:rare:913557619547979787> **|** **You are now opening $message[2]<:rare:913557619547979787>** and got

$multi[$message[2];$random[1;2500]]$getVar[symbol]

$multi[$message[2];$random[1;11]]<:silverore:915398370854572063>
$multi[$message[2];$random[1;10]]<:crystal:915398448675696640>
$multi[$message[2];$random[1;4]] <:ruby:915398513725173811>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;2500]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;11]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;10]]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$multi[$message[2];$random[1;4]]]]
$setGlobalUserVar[rare;$sub[$getGlobalUserVar[rare];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[rare]>=$multi[1;$message[2]];You dont have that many to open]

$else

$if[$message[1]==legendary]
<:legendary:913557686623273001> **|** **You are now opening $message[2]<:legendary:913557686623273001>**

$editIn[3s;<:legendary:913557686623273001> **|** **You are now opening $message[2]<:legendary:913557686623273001>** and got

$multi[$message[2];$random[1;5000]]$getVar[symbol]

$multi[$message[2];$random[1;11]]<:silverore:915398370854572063>
$multi[$message[2];$random[1;12]]<:crystal:915398448675696640>
$multi[$message[2];$random[1;13]] <:ruby:915398513725173811>
$multi[$message[2];$random[1;14]] <:uranium:915398578728480828>
$multi[$message[2];$random[1;15]] <:sulphur:915398728477716503>]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1;5000]]]
$setGlobalUserVar[silver;$sum[$getGlobalUserVar[silver];$multi[$message[2];$random[1;11]]]]
$setGlobalUserVar[crystal;$sum[$getGlobalUserVar[crystal];$multi[$message[2];$random[1;12]]]]
$setGlobalUserVar[ruby;$sum[$getGlobalUserVar[ruby];$multi[$message[2];$random[1;13]]]]
$setGlobalUserVar[uranium;$sum[$getGlobalUserVar[uranium];$multi[$message[2];$random[1;14]]]]
$setGlobalUserVar[sulphur;$sum[$getGlobalUserVar[sulphur];$multi[$message[2];$random[1;15]]]]
$setGlobalUserVar[legendary;$sub[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]

$onlyIf[$message[2]>0;Specify an amount]
$onlyIf[$getGlobalUserVar[legendary]>=$multi[1;$message[2]];You dont have that many to open]
$endif
$endif
$endif
$endif`}