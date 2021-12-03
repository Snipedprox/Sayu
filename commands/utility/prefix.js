module.exports = {
name: "prefix",
code: `
$setServerVar[prefix;$message]
Prefix changed from \`$getServerVar[prefix]\` to \`$message\`
$onlyIf[$charCount[$message]=<5;Prefix has to be 5 or less charactars long]
$onlyIf[$charcount[$message]>=1;Prefix cant be empty ]
$onlyPerms[manageserver;missing perms \`MANAGE_SERVER\`]`
}