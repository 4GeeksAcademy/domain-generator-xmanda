let pronoun = ['the','our','a'];
let adjective = ['great','pretty','giant','fake'];
let noun = ['house','cat','place','duck'];
let dom = ['.net','.com','.io']

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++){
            for (let l = 0; l < dom.length; l++) {
            console.log (pronoun[i] + adjective[j] + noun[k] + dom[l])
            }
        }
    }
}