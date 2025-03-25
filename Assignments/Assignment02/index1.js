function scopeTest() {
    if (true) {
        var a = "I am var"; 
        let b = "I am let"; 
        const c = "I am const";
        
        console.log("Inside block:", a);
        console.log("Inside block:", b);
        console.log("Inside block:", c);
    }
    
    console.log("Outside block:", a);
    
    try {
        console.log("Outside block:", b); 
    } catch (error) {
        console.log("Outside block: letVariable is not accessible");
    }
    
    try {
        console.log("Outside block:", c); 
    } catch (error) {
        console.log("Outside block: constVariable is not accessible");
    }
}

scopeTest();
try {
    console.log("Outside function:", a); 
} catch (error) {
    console.log("Outside function: letVariable is not accessible");
}
try {
    console.log("Outside function:", b); 
} catch (error) {
    console.log("Outside function: letVariable is not accessible");
}

try {
    console.log("Outside function:", c); 
} catch (error) {
    console.log("Outside function: constVariable is not accessible");
}
