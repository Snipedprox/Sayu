module.exports = {
name: "shop",
$if: "v4",
code: `
$if[$message==]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**This is the shop**]
$description[1;
<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:rod:915383213944356865>**Fishing rod**
**ID | ** \`rod\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:gunn:915383291765473330>**Hunting rifle**
**ID | ** \`rifle\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pcc:915383344106184795>**Laptop**
**ID | ** \`laptop\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pickaxee:915383399424868363>**Pickaxe**
**ID | ** \`pickaxe\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]]
$footer[1;Shop page 1 of 4]
$else
$if[$message==1]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**This is the shop**]
$description[1;
<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:rod:915383213944356865>**Fishing rod**
**ID | ** \`rod\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:gunn:915383291765473330>**Hunting rifle**
**ID | ** \`rifle\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pcc:915383344106184795>**Laptop**
**ID | ** \`laptop\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]

<:pickaxee:915383399424868363>**Pickaxe**
**ID | ** \`pickaxe\`
**Buy:** **[2,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[1,500]($getBotInvite)**$getVar[symbol]]
$footer[1;Shop page 1 of 4]
$else

$if[$message==2]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**This is the shop**]
$description[1;
<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:common:913557310486482974> **Common lootbox**
**ID | ** \`common\`
**Buy:** **[2,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**$getVar[symbol]

<:uncommonly:913557451800993852> **Uncommon lootbox**
**ID | ** \`uncommon\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**$getVar[symbol]

<:rare:913557619547979787> **Rare lootbox**
**ID | ** \`rare\`
**Buy:** **[7,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**$getVar[symbol]

<:legendary:913557686623273001>**Legendary lootbox**
**ID | ** \`legendary\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not sellable]($getBotInvite)**$getVar[symbol]]
$footer[1;Shop page 2 of 4]
$else
$if[$message==3]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$footer[1;page 3 of 4]
$title[1;**This is the shop**]
$description[1;
<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:robotit:915697139206742087>**Automation upgrade**
**ID | ** \`income\`
**Buy:** **[750]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases earning $getVar[symbol] by 5$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<:expp:916080985102245898>**Daily upgrade**
**ID | ** \`daily\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Upgrade:** **Increases daily earning by 15$getVar[symbol]**
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]]
$else
$if[$message==4]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$footer[1;page 4 of 4]
$title[1;**This is the shop**]
$description[1;
<:shopelo:915383155177951292> **"Helo, Welcome to my Shop, $username!"**
You can buy something here! Just do \`$getServerVar[prefix]buy <item> <amount>\` to buy it!
**──────────────
❖ Shop Items ❖
──────────────**

<:cocring:916288282994819072>**Common ring**
**ID | ** \`cring\`
**Buy:** **[500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<:ucring:916288340158984192>**Uncommon ring**
**ID | ** \`urring\`
**Buy:** **[1,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<:epiccc:916288471419736094>**Epic ring**
**ID | ** \`ering\`
**Buy:** **[1,500]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<:mringg:916288561576292352>**Mythical ring**
**ID | ** \`mring\`
**Buy:** **[5,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<a:legendaryring:916288587203506198>**Legendary ring**
**ID | ** \`lring\`
**Buy:** **[10,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]

<a:fabled:916288646196379709>**Fabled ring**
**ID | ** \`fring\`
**Buy:** **[15,000]($getBotInvite)**$getVar[symbol]
**Sell:** **[Not Sellable]($getBotInvite)**$getVar[symbol]
]
$endif
$endif
$endif
$endif
$endif`}