document.write("24.to create another string from a given string with the first character of the given string added to the front and back."+"<br>");
function test24(str){
    var s=str.substring(0,1);
    return s+str+s;
}
document.write("The string is :sanjeev"+"<br>")
document.write(test24("sanjeev")+"<br><br>");