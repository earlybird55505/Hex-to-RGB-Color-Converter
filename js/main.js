let input = document.querySelector(".input");
let convert = document.querySelector(".convert");
let reset = document.querySelector(".reset");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let css = document.querySelector("#css");
let colorPreview = document.querySelector("#color-preview");


convert.addEventListener('click', () =>{
    let inp = input.value;

    //#ff00ff;
    let rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

    if(inp.length === 4 || inp.length === 7){
        let output = rex.exec(inp);
        if(output === null){
            alert `Please enter 6 digits color code !`
        }else{
            red.value = `${getColor(output[1])}`
            green.value = `${getColor(output[2])}`
            blue.value = `${getColor(output[3])}`
            css.value = `rgb(${getColor(output[1])},${getColor(output[2])},${getColor(output[3])})`
            colorPreview.style.background = inp
        }
    }else{
        alert `Please enter 6 digits color code !`
    }

})


function getColor(hex){
    if(hex.length === 1){
        hex = hex + hex
    }
    return parseInt(hex, 16)
}


reset.addEventListener('click', () =>{
    input.value = "";
    red.value = "";
    green.value = "";
    blue.value = "";
    css.value = "";
    colorPreview.style.background = "#FFFFFF";
})



























// let student = {
//     "students": [
//         {"names": "jibon", "age": 23},
//         {"names": "jibon", "age": 23},
//         {"names": "jibon", "age": 23}
//     ]
// }