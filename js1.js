let array = []
const inpt = document.querySelector('.inpt1')
const div = document.querySelector('.text')
function btn(){
    array.push(inpt.value)
    div.innerHTML = ''
    let i=0
    array.map((element)=>{
       
        let p = document.createElement('p')
        p.innerHTML = `
            <p>${++i})${element}</p>
        `
        div.appendChild(p)
    })
}