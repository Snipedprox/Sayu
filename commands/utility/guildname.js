module.exports = {
name: "setguildname",
code: `
$color[1;$getVar[embed_color]]
$author[1;Guild name]
$description[1;**Server name has been changed to** \`$message\`]
$setGuildName[$message]
$onlyPerms[admin;Only admins can do this]`
}