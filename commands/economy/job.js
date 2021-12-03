module.exports = {
name: "job",
$if: "v4",
code: `
$if[$message==]
$title[1;**Job list**]
$color[1;$getVar[embed_color]]
$description[1;
Thank you for coming to check out the job list to get a job run the \`$getServerVar[prefix]job <id>\`


1. **Waiter**
**Salary:** **[1-50]($getBotInvite)$getVar[symbol]**
**ID:** **[waiter]($getBotInvite)**
**Balance needed:** **[1,000]($getBotInvite)**$getVar[symbol]

2. **Developer**
**Salary:** **[1-100]($getBotInvite)$getVar[symbol]**
**ID:** **[developer]($getBotInvite)**
**Balance needed:** **[2,500]($getBotInvite)**$getVar[symbol]

3. **Actor**
**Salary:** **[1-250]($getBotInvite)$getVar[symbol]**
**ID:** **[actor]($getBotInvite)**
**Balance needed:** **[5,000]($getBotInvite)**$getVar[symbol]
]
$else
$if[$message==waiter]
**You now work as a waiter**

$setGlobalUserVar[job;waiter]



$onlyIf[$getGlobalUserVar[cash]>=999;{newEmbed: {color:RED} {description:**You do not meet the requirements of [1,000]($getBotInvite)$getVar[symbol] you currentl have [$numberSeparator[$geGlobalUserVar[cash];,]]($getBotInvite)$getVar[symbol]**}}]
$else
$if[$message==developer]
**You now work as a developer**

$setGlobalUserVar[job;developer]



$onlyIf[$getGlobalUserVar[cash]>=2499;{newEmbed: {color:RED} {description:**You do not meet the requirements of [2,500]($getBotInvite)$getVar[symbol] you currentl have [$numberSeparator[$geGlobalUserVar[cash];,]]($getBotInvite)$getVar[symbol]**}}]
$else
$if[$message==actor]
**You now work as an actor**

$setGlobalUserVar[job;actor]



$onlyIf[$getGlobalUserVar[cash]>4999;{newEmbed: {color:RED} {description:**You do not meet the requirements of [5,000]($getBotInvite)$getVar[symbol] you currentl have [$numberSeparator[$geGlobalUserVar[cash];,]]($getBotInvite)$getVar[symbol]}}]
$endif
$endif
$endif
$endif`}