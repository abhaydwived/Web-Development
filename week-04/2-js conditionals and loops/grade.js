
function gradecalculation(score){
    if(score>=91){
        return 'A';
    }
    else if(score>=70){
        return 'B' ;
    }
    else if(score>=60){
        return 'C' ;
    }
    else{
        return 'F';
    }

}

console.log(gradecalculation(65));
console.log(gradecalculation(75));

