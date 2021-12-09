


let verbs = [
    'abide', 
    'arise', 
    'awake', 
    'be', 
    'bear', 
    'beat', 
    'beget', 
    'begin', 
    'bend', 'breed', 
    'bring', 
    'broadcast', 
    'build', 
    'burn', 
    'burst', 
    'buy', 
    'do', 
    'draw', 
    'dream', 
    'drink', 
    'drive', 
    'dwell', 
    'eat', 
    'fall', 
    'feed', 
    'feel', 
    'fight'
]

const getRandVerbs = (verbs) => {
    let randVerbs = []
    while (randVerbs.length<3) {
        let randKey = Math.floor(Math.random()*verbs.length)
        let randVerb = verbs[randKey]
        if (!randVerbs.includes(randVerb)) {
            randVerbs.push(randVerb)
        }
    }
    return randVerbs
}

const createMessage = () => {
    let randVerbs = getRandVerbs(verbs);
    let message = `When you ${randVerbs[0]} and ${randVerbs[1]}, you always ${randVerbs[2]} too`
    return message

}
console.log(createMessage())
