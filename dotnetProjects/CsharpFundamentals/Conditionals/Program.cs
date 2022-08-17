//! IF STATEMENTS

bool isHungry =  false;

//only executes the code block "If" true
if (true)
{
   System.Console.WriteLine("Order Some pizza dude");
}

// ! IF/ELSE STATEMNTS

//ives an option for what to execute if the condition is false
if (isHungry)
{
   System.Console.WriteLine("get some Culver's");
}
else
{
   System.Console.WriteLine("chill out and watch some tv");
}


//! ELSE IF STATEMENTS and NEsting commands
int age = 51;
if (age <10 )
{
   System.Console.WriteLine("its past your bedtime go to bed");
}
if (age <18 )
{
   System.Console.WriteLine("you're our past curfew");
}
   else if (age < 21)
{
   System.Console.WriteLine("get out of the bar or I'll call the cops");
}
else
{
System.Console.WriteLine("Enjoy the party");
}

//! IF/ELSE STATEMENTS WITH COMPARISON OPERATORS

if(age > 51 || age < 70)
{
   System.Console.WriteLine("Enjoy retirement!");
}
else if (age == 50)
{
   System.Console.WriteLine("halfway to a century!");
}
else if (age < 50  && age > 21)
{
   System.Console.WriteLine("get to work!");
}
else{
   System.Console.WriteLine("go to school!");
}

/* 
    SWITCH CASE!!

    - the "switch" keyword, followed by the statement being evaluated (in parentesis)
    - inside curly braces, there are different "cases" followed by potential values for the statement being evaluated
    - after each case logic, must be followed by a "break" statement to break out of the case
*/

string mood = "happy";

switch(mood)
{
    case "happy":
    System.Console.WriteLine("glad you're happy!");
        break;
    case "sad":
    System.Console.WriteLine("hope you feel better buddy");
    break;
    case "excited":
    System.Console.WriteLine("turn up");
    break;
    //"default" case is basically the "else" statement
    default:
    System.Console.WriteLine("idk what you are");
    break;
}

//! SWITCH EXPRESSIONS

string output;
int action = 5;

output = action switch
{
    1=> "1",
    2 => "2",
    3 => "3",
    //default case
    _=> "idk",
};

// switch(action)
// {
//     case 1: 
//        output = "1";
//     break;
//     case 2: 
//         output = "2";
//     break;
//     case 3:
//         output = "3";
//     break;
//     default:
//         output = "idk";
//         break;
// }
    System.Console.WriteLine(output);


// ! TERNARY STATEMENTS

// boolean variable/statements ? trueCondition : false Condition
int studentCount = 100;

string outputTwo = studentCount > 50 ? "you got alot on your plate m8" : "good luck m8";

System.Console.WriteLine(studentCount == 100 ? "100" : "not 100");
System.Console.WriteLine(outputTwo);