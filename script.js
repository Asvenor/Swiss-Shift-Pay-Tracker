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

function toDecimalTime(time) {
    const hourMin = time.split(':')
    const hour = Number(hourMin[0])
    const min = Number(hourMin[1])

    return hour + min / 60
}

addShiftButton.addEventListener('click', ()=>{
    const date = dateInput.value
    const start = startTimeInput.value
    const end = endTimeInput.value
    const breakIn = breakInput.value
    const hourly = hourlyWageInput.value
    const shiftIn = shiftInput.value

    const hoursWorked = toDecimalTime(end).toFixed(1) - toDecimalTime(start).toFixed(1) - breakIn
    const moneyEarned = hoursWorked * hourly
    
    const shift = {
        date: date,
        Start_Time: start,
        End_Time: end,
        Break: breakIn,
        Hourly_Wage: hourly,
        Shift: shiftIn,
        moneyEarned: moneyEarned,
    }

    if(shift.date === "" || shift.Start_Time === "" || shift.End_Time === "" || shift.Break === "" || shift.Hourly_Wage === "" || shift.Shift === "") {
    alert('Your forgot something')
    return
    }

    shiftList.push(shift)

    shiftListOutput.innerText = ""

    for(let i = 0; i < shiftList.length; i++) {
        shiftListOutput.innerText += `${shiftList[i].date} - ${shiftList[i].Shift} \n`
        console.log(shiftList[i])
    }

    let monthlyTotalCalc = 0

    for (let i = 0; i < shiftList.length; i++) {
        monthlyTotalCalc = monthlyTotalCalc + shiftList[i].moneyEarned
    
    }
    
    totalHours.innerText = hoursWorked
    totalPay.innerText = moneyEarned  
    monthlyTotal.innerText = monthlyTotalCalc

})

clearList.addEventListener('click', ()=>{
    const shiftList = []
    shiftListOutput.innerText = ""
})