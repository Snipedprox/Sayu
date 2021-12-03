module.exports = {
name: "pdelete",
code: `
$title[1;**Promocode has been deleted**]
$description[1;**The promocode $getservervar[promocode] with the worth of [$getservervar[worth]]($getBotInvite)$getVar[symbol] has been deleted**]
$setServerVar[promocode;%NaN%]
$setServerVar[worth;%NaN%]
$onlyForIDs[$botownerid;896846485805744168;]`}

