function calculate (x,y,operator){
    if (x!=0 && y!=0 && operator=="+"){
        console.log(x+y);
        }
        else if (x!=0 && y!=0 && operator=="-"){
            console.log(x-y);
            }

            else if (x!=0 && y!=0 && operator=="*"){
                console.log(x*y);
                }

               else if (x!=0 && y!=0 && operator=="/"){
                    console.log(x/y);
                    }
            

    else {
        console.log ("Please enter a valid number, empty not allowed");
    }
}

calculate(6,5,"*")
