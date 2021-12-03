module.exports = {
name: "bal",
aliases: ['money','cash','wallet','balance','coins'],
code: `
$title[1;**$username[$findUser[$message;yes]]'s balance**]
$thumbnail[1;$replaceText[$userAvatar[$findMember[$message;yes]];null;$userAvatar[$clientid]]]
$color[1;$getServerVar[embed_color]]
$footer[1;Balance of $getVar[money]]
$description[1;
**───────────────**
**💵 | Wallet:** $numberSeparator[$getGlobalUserVar[cash;$findUser[$message;yes]];,]$getVar[symbol]
**🏦 | Bank:** $numberSeparator[$getGlobalUserVar[bank;$findUser[$message;yes]];,]$getVar[symbol]
**💳 | Net Worth:** $numberSeparator[$sum[$getGlobalUserVar[bank;$findUser[$message;yes]];$getGlobalUserVar[cash;$findUser[$message;yes]]];,]$getVar[symbol]]`}