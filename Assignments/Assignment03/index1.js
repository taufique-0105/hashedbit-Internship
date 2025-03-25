function inRangeEven(start, end){
    for(var i = start; i < end; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

inRangeEven(1, 100);