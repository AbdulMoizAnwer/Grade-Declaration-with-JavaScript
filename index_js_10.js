function myFunction(){
    var alpha = document.getElementById("a1").value;
    if(alpha == 'A' || alpha == 'a'){
        document.write("You have chosen: Average")
    }else if(alpha == 'E' || alpha == 'e'){
        document.write("You have chosen: Excellent")
    }else if(alpha == 'F' || alpha == 'f'){
        document.write("You have chosen: Fail")
    }else if(alpha == 'G' || alpha == 'g'){
        document.write("You have chosen: Good")
    }else if(alpha == 'V' || alpha == 'v'){
        document.write("You have chosen: Very Good")
    }else{
        document.write("Grade you have entered is not available. Please try again submitting correct grade.")
    }
}
