const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')
const bg = document.querySelector('.bg')
const footer = document.querySelector('.footer')


runAnimation()



function runAnimation() {
    nums.forEach((num, index) =>{
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) =>{
            if(e.animationName === 'goIn' && index !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                bg.style.background = 'url(/images/fast.gif)'
                bg.style.backgroundRepeat = 'no-repeat'
                bg.style.backgroundSize = 'cover'
                footer.style.background = 'white'
                footer.style.opacity = '50%'
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

function resetDom() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    bg.style.background = ''
    nums.forEach((num) =>{
        num.classList.value = ''
    })
    nums[0].classList.add('in')
}


replay.addEventListener('click', ()=>{
    resetDom()
    runAnimation()
})