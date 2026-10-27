let saveData = document.getElementById("saveBtn")
let addData = document.getElementById("addBtn")
let entries = document.getElementById("num")
let entriesPerTrip = document.getElementById("num2")
let count = 0

function add(){
    count+=1
    entries.textContent = "Enter the number of passengers per trip: " + count
}

function save(){
    let data = count + " - " 
    entriesPerTrip.textContent += data
    entries.textContent = "Enter the number of passengers per trip: " + 0
    count = 0
}
