module.exports = {
    Bot: {
    token: "OTE1MDM3OTUzODYzMDYxNTc1.YaVxgA.Gt0sJCkyYHFt72lPsBKzmVwAA6g",
    prefix: ["$getServerVar[prefix]","<@$clientID>","s."],
    intents: "all",
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./db/",
        tables:["leaf"],
        promisify:false
    },
    respondOnEdit: {
        commands: true
    },
    debug: {
        interpreter : true 
},
    suppressAllErrors: {
        errorMessage: ["", "{newEmbed:{title:Opps!}{description:There is an error!}{color:fcbfcb}}"]
    }
}
}