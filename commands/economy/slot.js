module.exports = {
name: "slots",
$if: "v4",
aliases: "slot",
code: `
$if[$randomText[win;win;win;lost;lost;lost;win;lost;win;win;lost;lost]==lost]
$thumbnail[1;https://images-ext-1.discordapp.net/external/_AV-ODv4VkmNioop_RL-22hlKJwPS4chJxJOS5mj6o4/https/i.imgur.com/R5shqxg.png?width=421&height=421]
$color[1;RED]
$title[1;**$username**]
$description[1;
**You lost $numberSeparator[$get[amount];,]$getvar[symbol]**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$get[amount]]]
$onlyIf[$message[1]>=$get[amount];**Please enter an amount to bet**]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[cash;$authorID];1];max;$getGlobalUserVar[cash;$authorID];1]]
$onlyIf[$getGlobalUserVar[cash]>$multi[1;$get[amount]];You are too poor to gamble that amount]
$else
$if[$randomText[win;win;win;lost;lost;lost;win;lost;win;win;lost;lost]==win]
$thumbnail[1;https://images-ext-1.discordapp.net/external/_AV-ODv4VkmNioop_RL-22hlKJwPS4chJxJOS5mj6o4/https/i.imgur.com/R5shqxg.png?width=421&height=421]
$color[1;GREEN]
$title[1;**$username**]
$description[1;
**You won $numberSeparator[$get[amount];,]$getvar[symbol]**]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$get[amount]]]
$onlyIf[$message[1]>=$get[amount];**Please enter an amount to bet**]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[cash;$authorID];1];max;$getGlobalUserVar[cash;$authorID];1]]
$onlyIf[$getGlobalUserVar[cash]>=$multi[1;$get[amount]];You are too poor to gamble that amount]
$endif
$endif`}