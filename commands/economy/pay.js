module.exports = ({
name:"give",
aliases:"pay",
category:"Economy",
explanation:"Pay money to someone!",
bot:"Embed Links",
user:"None",
usage:"pay <amount> <user>",
example:"pay 1000 Stickman",
explain:"Pay 1000 money to the user Stickman!",
code:`$sendmessage[{newEmbed:{author:cash transfered}{description:**Successfully paid $numberSeparator[$get[amount];,]$getVar[symbol] to $username[$get[user]]\` }{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar}};no]
$setglobaluservar[cash;$sub[$getglobaluservar[cash];$get[amount]]]
$setglobaluservar[cash;$sum[$getglobaluservar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{newEmbed:{description:Cannot pay 0!}{color:FF0000}}]
$onlyif[$checkcontains[$get[amount];-]==false;{newEmbed:{description:Cannot pay negative amounts!}{color:FF0000}}]
$onlyif[$get[amount]<=$getglobaluservar[cash];{newEmbed:{description:You do not have that much to give!}{color:FF0000}}]
$onlyif[$isnumber[$get[amount]]==true;{newEmbed:{description:Not a number!}{color:FF0000}}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[cash;$authorID];1];max;$getglobalUserVar[cash;$authorID];1]]
$onlyif[$get[user]!=$authorid;{newEmbed:{description:Cannot pay yourself!}{color:FF0000}}]
$onlyif[$memberexists[$get[user]]==true;{newEmbed:{description:Member not found!}{color:FF0000}}]
$let[user;$findmember[$message[2];no]]


`})
