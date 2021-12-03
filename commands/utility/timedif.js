module.exports = ({
 name:"timedif",
 aliases:'snowflake',
 code:`
$title[1;Snowflake]
$description[1;$replaceText[$roundTenth[$divide[$round[$sub[$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[1]").timestamp);yes];$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[2]").timestamp);yes]]];1000];1];-;] second(s)]

$addField[1;$message[1];Creation Date: <t:$round[$divide[$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[1]").timestamp);yes];1000]]:D>, <t:$round[$divide[$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[1]").timestamp);yes];1000]]:T>]
$addField[1;$message[2];Creation Date: <t:$round[$divide[$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[2]").timestamp);yes];1000]]:D>, <t:$round[$divide[$djsEval[const Snowflake = require("snowflake-util");
const snowflake = new Snowflake();
 
(snowflake.deconstruct("$message[2]").timestamp);yes];1000]]:T>]

$color[1;#00fc11]
$addTimestamp[1]
$onlyIf[$isNumber[$message[2]]!=false;{newEmbed: {title:Timedif}{field:__Description__:Calculates the time between 2 specified ids.}{field:__Usage__: timedif [userID¹ | messageID¹ | guildID¹] [userID² | messageID² | guildID²]

⚠: You must put 2 valid IDs.}{color:#0000FF}}]
$onlyIf[$isNumber[$message[1]]!=false;{newEmbed: {title:Timedif}{field:__Description__:Calculates the time between 2 specified ids.}{field:__Usage__: e!timedif [userID¹ | messageID¹ | guildID¹] [userID² | messageID² | guildID²]

⚠: You must put 2 valid IDs.}{color:#ff2400}}]
$suppressErrors
`
})