const dotField = document.querySelector('.dotField')

for (let i = 0; i < 150; i++) {
    const dot = document.createElement("span")
    dot.classList.add('dot')
    dotField.appendChild(dot)
}

const dots = document.querySelectorAll('.dot')

document.addEventListener("mousemove", (event) => {
    event.clientX
    event.clientY

 

    dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect()
        const dotX = rect.left + rect.width / 2
        const dotY = rect.top + rect.height / 2

        const dx = event.clientX - dotX
        const dy = event.clientY - dotY

        const distance = Math.sqrt(dx * dx + dy * dy)
        if(distance < 100) {
            const strength = (100 - distance) / 100
            dot.style.transform = `translate(${-dx * 0.2 * strength}px, ${-dy * 0.2 * strength}px)`
        } else {
            dot.style.transform = 'translate(0, 0)'
        }
    })

})

