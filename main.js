let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let savollar = [
    {savol: "Dunyodagi eng uzun daryo?", javob: 'a' , testlar: {a: "Nil", b: "Amazonka", c: "Amudaryo", d: "Sirdaryo"}},
    {savol: "2018 jahon chempioni qaysi?", javob: 'c' , testlar: {a: "Xorvatia", b: "Braziliya", c: "Fransiya", d: "Belgiya"}},
    {savol: "Birinchi oyga chiqan odam kim?", javob: 'd' , testlar: {a: "John Doe", b: "Kamina", c: "Yuriy Vasilev", d: "Yuriy Gagarin"}},
    {savol: "Autfild, Bol, Ketcher, Pitcher, Xoum-ran atamalari qaysi sportda ishlatiladi?", javob: 'c' , testlar: {a: "futbol", b: "valeybol", c: "beysbol", d: "basketbol"}},
    {savol: "25 litr suvni uning bir tomchisi b-n bulg'ash mumkiin?", javob: 'b' , testlar: {a: "simob", b: "neft", c: "zaharli modda", d: "spirt"}},
    {savol: "Ilgari olimlar ushbu osmon jismini `Ko'rinadigan hech narsa` deyishgan. U nima?", javob: 'b' , testlar: {a: "yulduz", b: "kometa", c: "asteroidlar", d: "meteorlar"}},
    {savol: "Qaysi hasharot to'g'risida malumotni Shotland radiosi har kunlik ob-havo da aytiladi?", javob: 'b' , testlar: {a: "arilar", b: "chivinlar", c: "ninachi", d: "zaharli chigirtka"}},
    {savol: "Angliya poytahti?", javob: 'd' , testlar: {a: "Abu Dabi", b: "Toshkent", c: "Berlin", d: "London"}},
    {savol: "Misr poytahti?", javob: 'a' , testlar: {a: "Qohira", b: "Almati", c: "Berlin", d: "Washington"}},
    {savol: "Kongoda aholi uning 500 tasidan, Indoneziyada 250 tasidan, Sudanda esa 117 tasidan foydalnishadi. U nima?", javob: 'c' , testlar: {a: "oyoq kiyim", b: "mashina", c: "til", d: "toshlar"}},
]

function question(object){
    return rl.question("Javobinginzni kiriting: ", (answer) => {
        console.log()

        if(answer == object.javob){
            r++
        }else if(['a', 'b', 'c', 'd',"A", "B", "C", "D"].includes(answer)){
            w++
        }else{
            question(object)
            return
        }
        if(c == savollar.length){
            rl.close()
            console.table([{right: r,wrong: w}])
        }else{
            count++
            recursive()
        }
    })
}

function shuffle(arr) {
    let n = [...arr]
    let newArr = []
    while (n.length > 0) {
        let index = Math.floor(Math.random() * n.length)
        newArr.push(n[index])
        n.splice(index, 1)
    }
    return newArr
}

savollar = shuffle(savollar)


let r = 0
let w = 0
let c = 0
let count = 0
function recursive(){
    
    let object = savollar[count]
    c++
    console.log(`${c}. ${object.savol}`)
    for(let [key, value] of Object.entries(object.testlar)){
        console.log(`${key}: ${value}`)
    }
    question(object)
    
    
}

recursive()


