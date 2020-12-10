// Use this intereactive feature on shopping cart/ checkout, progress on the app- where ever!


const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    // prevents going past the fourth ( last ) element in the progress bar 

    update()

})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    // starts at the first element (1) in the progress bar 

    update()

})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'
    // this changes the CSS style on the progress class's width to 
    // the correct percentage ( corresponding to the number/ circle it reaches)

    if(currentActive == 1) {
        prev.disabled = true
        // disables the previous btn when at (1)
    } else if(currentActive === circles.length) {
        next.disabled = true
        // disables the next btn when at (4)

    } else {
        prev.disabled = false
        next.disabled = false
    }
    // make both buttons active if at (2) or (3)
}
