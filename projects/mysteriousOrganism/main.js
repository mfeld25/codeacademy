// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  
const pAequorFactory = (number, array) => {
    let pAequorObj = {
        'specimenNum': number,
        'dna': array,
        mutate() {
            let randIndex = Math.floor(Math.random()*this.dna.length)
            let dnaStart = this.dna[randIndex]
            let dnaEnd
            // console.log('randIndex, dnaStart,dnaEnd')
            // console.log(randIndex, dnaStart,dnaEnd)
            while (!dnaEnd) {
                let dnaTemp = returnRandBase()
                if (dnaTemp != dnaStart) {
                    dnaEnd = dnaTemp
                    this.dna[randIndex] = dnaEnd
                }
            }
        },
        compareDNA(pAequorObj) {
            let matches = 0
            for (i in this.dna) {
                if (this.dna[i] === pAequorObj.dna[i]) {
                    matches +=1
                }
            }            
            console.log(`specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${Math.round(100*matches/this.dna.length)}% of DNA in common`)
        },
        willLikelySurvive() { 
            let countCG = 0
            for (i in this.dna) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    countCG += 1
                }            
            }
            return countCG / this.dna.length >= 0.6
        }
    }
    return pAequorObj
}


let testStrand1 = mockUpStrand()
let testStrand2 = mockUpStrand()
console.log('testStrand1: \n',testStrand1, '\n;')
console.log('testStrand2: \n',testStrand2, '\n;')


let pAequorTest1 = pAequorFactory(1,testStrand1)
let pAequorTest2 = pAequorFactory(2,testStrand2)
console.log('pAequorTest1: \n',pAequorTest1, '\n;')
console.log('pAequorTest2: \n',pAequorTest2, '\n;')


pAequorTest1.mutate()
console.log('mutated pAequorTest1: \n', pAequorTest1, '\n;')

pAequorTest1.compareDNA(pAequorTest2)

console.log(pAequorTest1.willLikelySurvive())


let pAequorArray = []
while (pAequorArray.length < 30) {
    let newPAequorObj =  pAequorFactory(pAequorArray.length + 1, mockUpStrand())
    if (newPAequorObj.willLikelySurvive()) {
        pAequorArray.push(newPAequorObj)
    }
}

console.log(pAequorArray)
