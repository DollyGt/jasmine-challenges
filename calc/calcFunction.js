function areaOfCircle(n) {
   if(n>0){
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}else{
    alert("Argument must be a number");
}
    
}

function squareRoot(n) {
    if(n>0){
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}else{
    alert("Argument must be a number");
}
}

function squareMe(n) {
    if(n>0){
    let result = n*n ;
    return Number(result.toFixed(2));
}else{
    alert("Argument must be a number");
}
    
}

function cubeMe(n) {
    if(n>0){
    let result = n*n*n ;
    return Number(result.toFixed(2));
}else{
    alert("Argument must be a number");
}
}

function areaOfTriangle(n) {
    if(n>0) {
        let result=n*n/2 ;
        return  Number(result.toFixed(2));
    }else{
        alert("Argument must be a number")
    }
}