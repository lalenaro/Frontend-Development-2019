var col=20;
var row=10;

for(row = 1; row <= 10; row++) {
    for(col = 1; col <= 20; col++){
        if(row==1 || row==10 || col==1 || col==20){ 
            document.write("#");
        } else {
            document.write("0");
        }
    }
    document.write("<br>");
}

    

