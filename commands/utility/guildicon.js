module.exports = {
name: "setguildicon",
aliases: "setguildavatar",
code: `
$image[1;$servericon]
$color[1;$getVar[embed_color]]
$description[1;**Server icon has been changed**]
$setGuildIcon[$message]
$onlyIf[$isValidLink[$message]==true;Not a valid image link]
$onlyPerms[admin;Only server admins can do this]`
}