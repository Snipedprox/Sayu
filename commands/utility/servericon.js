module.exports = {
name: "servericon",
aliases: ['guildicon','serveravatar'],
code: `
$color[1;$getVar[embed_color]]
$description[1;**$servername's server icon]
$image[1;$servericon]`
}