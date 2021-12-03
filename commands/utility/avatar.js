module.exports = {
name: "avatar",
aliases: "av",
code: `
$description[1;**$username[$findUser[$message]] avatar]
$color[1;$getVar[embed_color]]
$image[1;$userAvatar[$findUser[$message]]]`
}