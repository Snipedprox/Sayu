module.exports = {
name: "inv",
$if: "v4",
aliases: "inventory",
code: `
$if[$message[1]==]
$thumbnail[1;$replaceText[$userAvatar[$findMember[$message[2]]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findMember[$message[2]
]]'s inventory**]
$description[1;
<:rod:915383213944356865>**Fishing rod ─ **$getGlobalUserVar[rod;$findMember[$message[2]]]
**ID** \`rod\` **- Tool**

<:pcc:915383344106184795>**Laptops ─ **$getGlobalUserVar[laptop;$findMember[$message[2]]]
**ID** \`laptop\` **- Tool**

<:gunn:915383291765473330>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findMember[$message[2]]]
**ID** \`rifle\` **- Tool**

<:pickaxee:915383399424868363>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findMember[$message[2]]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 3]
$else

$if[$message[1]==1]
$thumbnail[1;$replaceText[$userAvatar[$findMember[$message[2]]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findMember[$message[2]
]]'s inventory**]
$description[1;
<:rod:915383213944356865>**Fishing rod ─ **$getGlobalUserVar[rod;$findMember[$message[2]]]
**ID** \`rod\` **- Tool**

<:pcc:915383344106184795>**Laptops ─ **$getGlobalUserVar[laptop;$findMember[$message[2]]]
**ID** \`laptop\` **- Tool**

<:gunn:915383291765473330>**Hunting rifle ─ **$getGlobalUserVar[rifle;$findMember[$message[2]]]
**ID** \`rifle\` **- Tool**

<:pickaxee:915383399424868363>**Pickaxe ─ **$getGlobalUserVar[pickaxe;$findMember[$message[2]]]
**ID** \`pickaxe\` **- Tool**]
$footer[1;Page 1 of 3]
$else
$if[$message[1]==2]
$thumbnail[1;$replaceText[$userAvatar[$findMember[$message[2]]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findMember[$message[2]
]]'s inventory**]
$description[1;

<:common:913557310486482974>**Common lootbox ─ **$numberSeparator[$getGlobalUserVar[common;$findMember[$message[2]]];,]
**ID** \`common\` **- Lootbox**

<:uncommonly:913557451800993852>**Uncommon lootbox ─ **$numberSeparator[$getGlobalUserVar[uncommon;$findMember[$message[2]]];,]
**ID** \`uncommon\` **- Lootbox**

<:rare:913557619547979787>**Rare lootbox ─ **$numberSeparator[$getGlobalUserVar[rare;$findMember[$message[2]]];,]
**ID** \`rare\` **- Lootbox**

<:legendary:913557686623273001>**Legendary lootbox ─ **$numberSeparator[$getGlobalUserVar[legendary;$findMember[$message[2]]];,]
**ID** \`legendary\` **- Lootbox**]
$else
$if[$message[1]==3]

$thumbnail[1;$replaceText[$userAvatar[$findMember[$message[2]]];null;$userAvatar[$clientid]]]
$color[1;$getVar[embed_color]]
$title[1;**$username[$findMember[$message[2]
]]'s inventory**]
$description[1;

<:silverore:915398370854572063>**Silver gem ─ **$numberSeparator[$getGlobalUserVar[silver;$findMember[$message[2]]];,]
**ID** \`common\` **- Lootbox**

<:crystal:915398448675696640>**Crystal gem ─ **$numberSeparator[$getGlobalUserVar[crystal;$findMember[$message[2]]];,]
**ID** \`uncommon\` **- Lootbox**

<:ruby:915398513725173811>**Ruby gem ─ **$numberSeparator[$getGlobalUserVar[ruby;$findMember[$message[2]]];,]
**ID** \`rare\` **- Lootbox**

<:uranium:915398578728480828>**Uranium gem ─ **$numberSeparator[$getGlobalUserVar[uranium;$findMember[$message[2]]];,]
**ID** \`rare\` **- Lootbox**

<:sulphur:915398728477716503>**Sulphur gem ─ **$numberSeparator[$getGlobalUserVar[sulphur;$findMember[$message[2]]];,]
**ID** \`legendary\` **- Lootbox**]
$endif
$endif
$endif
$endif`}