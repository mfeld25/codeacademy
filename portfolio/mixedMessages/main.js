

const createMessage = (verb1, verb2, verb3) => {
    let message = `When you ${verb1} and ${verb2}, you always ${verb3} too`
    return message

}
console.log(createMessage('eat', 'exercise', 'grow'))
