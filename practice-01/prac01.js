
let boostPeople = document.getElementById ("boost-people")
let listLikes = document.getElementById("list-likes")

count = 0

function increase() {
    count += 1
    boostPeople.innerText = count
    
}
function save() {
    let saves = count + " - "
    listLikes.textContent +=  saves

    boostPeople.innerText = 0
    count = 0


}



let num1 = 8
let num2 = 4

document.getElementById("num-1").textContent = num1
document.getElementById("num-2").textContent = num2

reSult = document.getElementById("result")

function add() {
    let add = num1 + num2
    reSult.textContent = "Result: " + add
}

function subtract() {
    let sub = num1 - num2
    reSult.textContent = "Result: " + sub
}

function multiply() {
    let mul = num1 * num2
    reSult.textContent = "Result: " + mul
}

function divide() {
    let div = num1 / num2
    reSult.textContent = "Result: " + div
}








function getNumbers() {
  let numb1 = Number(document.getElementById("numb-1").value)
  let numb2 = Number(document.getElementById("numb-2").value)
  return [numb1, numb2]
}

function addision() {
  let [numb1, numb2] = getNumbers()
  document.getElementById("result01").textContent = "Result: " + (numb1 + numb2)
}

function subtraction() {
  let [numb1, numb2] = getNumbers()
  document.getElementById("result01").textContent = "Result: " + (numb1 - numb2)
}

function multiplication() {
  let [numb1, numb2] = getNumbers()
  document.getElementById("result01").textContent = "Result: " + (numb1 * numb2)
}

function division() {
  let [numb1, numb2] = getNumbers()
  if (numb2 === 0) {
    document.getElementById("result01").textContent = "Result: Cannot divide by 0"
  } else {
    document.getElementById("result01").textContent = "Result: " + (numb1 / numb2)
  }
}





function getCarInputs() {
  let hp = Number(document.getElementById("horsepower").value)
  let tq = Number(document.getElementById("torque").value)
  return [hp, tq]
}

// Accelerate = Add
function accelerate() {
  let [hp, tq] = getCarInputs()
  document.getElementById("garage-result").textContent = "Garage Result: " + (hp + tq) + ""
}

// Brake = Subtract
function brake() {
  let [hp, tq] = getCarInputs()
  document.getElementById("garage-result").textContent = "Garage Result: " + (hp - tq) + ""
}

// Turbo Boost = Multiply
function boost() {
  let [hp, tq] = getCarInputs()
  document.getElementById("garage-result").textContent = "Garage Result: " + (hp * tq) + ""
}

// Drift = Divide
function drift() {
  let [hp, tq] = getCarInputs()
  if (tq === 0) {
    document.getElementById("garage-result").textContent = "Garage Result: Cannot divide ❌"
  } else {
    document.getElementById("garage-result").textContent = "Garage Result: " + (hp / tq).toFixed(2) + ""
  }
}






