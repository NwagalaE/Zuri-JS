function Calculator() {
    function add(a,b) {
        alert(a+b)
    }

    function subtract(a,b) {
        alert(a-b)
    }

    function multiply(a,b) {
        alert(a*b)
    }

    function divide(a,b) {
        alert(a/b)
    }

    alert('Input two numbers')
    var a = prompt("a: ")
    var b = prompt("b: ")
    a = parseInt(a)
    b = parseInt(b)

    var option = prompt("What operation do you want to carry out?")
    option = String(option)
    if (option = "add") {
        add(a,b);
    } else if (option = "subtract") {
        subtract(a,b)
    }  else if (option = "multiply") {
        multiply(a,b)
    }  else if (option = "divide") {
        divide(a,b)
    } else{
        alert("Wrong option")
    }

}

Calculator()