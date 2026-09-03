//Shift Elements
const dateInput = document.getElementById('dateInput')
const startTimeInput = document.getElementById('startTimeInput')
const endTimeInput = document.getElementById('endTimeInput')
const breakInput = document.getElementById('breakInput')
const hourlyWageInput = document.getElementById('hourlyWageInput')
const shiftInput = document.getElementById('shiftInput')
//Add Shift Button
const addShiftButton = document.getElementById('addShiftButton')
//Output Elements
const shiftListOutput = document.getElementById('shiftListOutput')
const totalHours = document.getElementById('totalHours')
const totalPay = document.getElementById('totalPay')
const monthlyTotal = document.getElementById('monthlyTotal')
const dateOutput = document.getElementById('dateOutput')
//Clear Button
const clearList = document.getElementById('clearList')

const shiftList = []



addShiftButton.addEventListener('click', ()=>{
    const date = dateInput.value
    const start = startTimeInput.value
    const end = endTimeInput.value
    const breakIn = breakInput.value
    const hourly = hourlyWageInput.value
    const shiftIn = shiftInput.value


    const shift = {
        date: date,
        Start_Time: start,
        End_Time: end,
        Break: breakIn,
        Hourly_Wage: hourly,
        Shift: shiftIn,
    }
    const hoursWorked = end - start - breakIn
    const moneyEarned = hoursWorked * hourly
    const monthlyEarned = moneyEarned

    shiftList.push(shift)

    shiftListOutput.innerText = ""

    for(i = 0; i < shiftList.length; i++) {
        shiftListOutput.innerText += `${shiftList[i].date} - ${shiftList[i].Shift} \n`
        console.log(shiftList[i])
    }
    

    totalHours.innerText = hoursWorked
    totalPay.innerText = moneyEarned  
    monthlyTotal.innerText = monthlyEarned 
})

clearList.addEventListener('click', ()=>{
    const shiftList = []
    shiftListOutput.innerText = ""
})