var studOneSAT = readInt("This is a college admissons calculator... with a twist. By inputing you and a friend's SAT score (composite) and GPA (out of unweighted 4.0), this program will compare the likelihood of admittance between you and your friend to a selected school. First, input Student #1's SAT score below. ");
var studOneGPA = readFloat("Input Student #1's GPA.");
var studTwoSAT = readInt("Input Student #2's SAT score below.");
var studTwoGPA = readFloat("Input Student #2's GPA.");
var SCHOOL = readLine("What school would you like to test?");

function start() {
    compare();
}


//abstraction is used to reduce complexity and allow efficient
//design and implementation of complex software systems
//this function works as an abstraction because it simplifies a step
//without this step, the percents of the two students would have to be
//manually subtracted in the start function
//this abstraction also ensures that the smallest number is being subtracted
//from the largest number and not the other way around
function compare() {
    var finalOne = finalPercent(studOneSAT, studOneGPA);
    var finalTwo = finalPercent(studTwoSAT, studTwoGPA);
    var stud;
    var stud2;
    var final;
    var studentOne = finalOne;
    var studentTwo = finalTwo;
    
    if (studentOne >= studentTwo) {
        final = studentOne - studentTwo;
        stud = 'Student One';
        stud2 = 'Student Two';
    } else if (studentOne < studentTwo) {
        final = studentTwo - studentOne;
        stud = 'Student Two';
        stud2 = 'Student One';
    }
    
    println(stud + " has a higher acceptance rate than " + stud2 + " to " + SCHOOL + " by " + final + "%.");
    println("Student One acceptance: " + studentOne + "%");
    println("Student Two acceptance: " + studentTwo + "%");
}

//this function works as a mathematical parent algorithm
function finalPercent(SAT, GPA) {
    var a = (8.66) * (Math.pow(10, -5));
    
    var x = (score(SAT, GPA));
    
    var percent = (a/difficultyRate()) * (x*x);
    
    if (percent > 100) {
        percent = 100;
    }
    return percent;
    //println("Your chance of admission at " + SCHOOL + " is " + percent + "%");
    
}







////////////***********DO NOT CHANGE***********////////////

//this function works as a mathematical subalgorithm
function score(SAT, GPA) {
    var thing = SAT + (GPA * 360);
    return thing;
}


//this function works as a mathematical subalgorithm
//it returns a difficulty rate assigned to the school that the user inputed
function difficultyRate() {
    //declare DR outside of the if statements
    var DR = 0;
    
    //if SCHOOL is (school chosen)
    //then the difficulty rate (DR) is (difficulty rate assigned to that school)
    //return difficulty rate (DR) value so it can be used in other places
    if (SCHOOL == 'Princeton') {
        DR = 10;
    } else if (SCHOOL == 'University of Southern California') {
        DR = 7;
    } else if  (SCHOOL == 'NYU') {
        DR = 6.5;
    } else if (SCHOOL == 'Clemson') {
        DR = 4;
    } else if (SCHOOL == 'Alabama') {
        DR = 1;   
    }
    
    return DR;
}
