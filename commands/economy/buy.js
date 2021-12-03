module.exports = {
name: "buy",
$if: "v4",
code: `
$if[$message[1]==rod]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:rod:915383213944356865> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[rod;$sum[$getGlobalUserVar[rod];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else
$if[$message[1]==rifle]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:gunn:915383291765473330> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]
$setGlobalUserVar[rifle;$sum[$getGlobalUserVar[rifle];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==laptop]

$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:pcc:915383344106184795> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else
$if[$message[1]==pickaxe]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased 1 <:pickaxee:915383399424868363> for 2,500$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>2499;**You dont have enough $getVar[symbol]**]

$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==common]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:common:913557310486482974> for $numberSeparator[$multi[2000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];2000]]]

$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];1999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==uncommon]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:uncommonly:913557451800993852> for $numberSeparator[$multi[5000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];5000]]]

$setGlobalUserVar[uncommon;$sum[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];4999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==rare]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:rare:913557619547979787> for $numberSeparator[$multi[7500;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];7500]]]

$setGlobalUserVar[rare;$sum[$getGlobalUserVar[rare];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];7499];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]

$else

$if[$message[1]==legendary]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You successfully purchased $message[2] <:legendary:913557686623273001> for $numberSeparator[$multi[15000;$message[2]];,]$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]

$setGlobalUserVar[legendary;$sum[$getGlobalUserVar[legendary];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];14999];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]
$else
$if[$message[1]==income]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You paid [$numberSeparator[$multi[$message[2];750];,]]($getBotInvite)$getVar[symbol] and increased your 3s earnings by [$numberSeparator[$multi[5;$message[2]];,]]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];750]]]

$setGlobalUserVar[alcap;$sum[$getGlobalUserVar[alcap];$multi[5;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];749];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]
$else
$if[$message[1]==daily]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You paid [$numberSeparator[$multi[$message[2];1500];,]]($getBotInvite)$getVar[symbol] and increased your 3s earnings by [$numberSeparator[$multi[15;$message[2]];,]]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];1500]]]

$setGlobalUserVar[dacap;$sum[$getGlobalUserVar[dacap];$multi[15;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>$multi[$message[2];1499];**You dont have enough $getVar[symbol]**]
$onlyIf[$message[2]>=1;**please specify an amount**]
$else
$if[$message[1]==cring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:cocring:916288282994819072> and paid [500]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash]500]]

$setGlobalUserVar[coring;$sum[$getGlobalUserVar[coring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>499;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[coring]<1;Already purchased]
$else

$if[$message[1]==uring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:ucring:916288340158984192> and paid [1,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000]]

$setGlobalUserVar[uncoring;$sum[$getGlobalUserVar[uncoring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>999;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[uncoring]<1;Already purchased]
$else

$if[$message[1]==ering]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:epiccc:916288471419736094> and paid [1,500]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1500]]

$setGlobalUserVar[epring;$sum[$getGlobalUserVar[epring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>1499;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[epring]<1;Already purchased]

$else

$if[$message[1]==mring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<:mringg:916288561576292352> and paid [5,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]

$setGlobalUserVar[myring;$sum[$getGlobalUserVar[myring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>4999;**You dont have enough $getVar[symbol]**]
$onlyIf[$getGlobalUserVar[myring]<1;Already purchased]



$else
$if[$message[1]==lring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<a:legendaryring:916288587203506198> and paid [10,000]($getBotInvite)$getVar[symbol]**]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]

$setGlobalUserVar[lering;$sum[$getGlobalUserVar[lering];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[lering]<1;Already purchased]
$onlyIf[$getGlobalUserVar[cash]>9999;**You dont have enough $getVar[symbol]**]
$else
$if[$message[1]==fring]
$thumbnail[1;$userAvatar[$clientid]]
$color[1;$getVar[embed_color]]
$title[1;**Purchase successful**]
$description[1;**You bought [1]($getBotinvite)<a:fabled:916288646196379709> and paid [15,000]($getBotInvite)$getVar[symbol]** ]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]

$setGlobalUserVar[faring;$sum[$getGlobalUserVar[faring];1]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[faring]<1;Already purchased]

$onlyIf[$getGlobalUserVar[cash]>14999;**You dont have enough $getVar[symbol]**]
$else
**:x: not a valid item check the shop again**
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif`}