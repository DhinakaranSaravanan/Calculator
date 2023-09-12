const output = document.getElementById("screen")
function display(num){
    output.value += num
}
console.log(output);
function handleDelete(){
    output.value = output.value.slice(0,-1)
}
function calculate(){
    try{
        output.value = eval(output.value)
    }catch{
        alert("Invalid Entry")
    }    
}
function deleteAll(){
    output.value = "";
}