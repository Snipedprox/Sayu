module.exports = {
    name: "rob",
    code: `
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[0;2500]];$authorID]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];$random[0;2500]];$mentioned[1]]
$color[1;$getVar[color]]
$thumbnail[1;$userAvatar[$clientid]]
$title[1;$username stole from $username[$mentioned[1]]]
$description[1;
\` you stole a total of $random[0;2500]$getVar[symbol] from $username[$mentioned[1]]\`]
$globalCooldown[60s;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[cash;$authorID]>=2500;\`Your wallet needs to contain at least 2500$getvar[symbol] to rob someone.\`]
$onlyIf[$getGlobalUserVar[cash;$mentioned[1]]>=2500;\`Their wallet needs to contain at least 2500$getvar[symbol]\`]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**:x: You can't rob bots**]
$onlyIf[$mentioned[1]!=$authorID;**:x: You can't rob yourself???**]
$onlyIf[$mentioned[1]!=;**:x: Mention someone to rob**]`}