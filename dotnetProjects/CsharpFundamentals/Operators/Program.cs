// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
System.Console.WriteLine("\n------------ operators --------");
//Addition

int a =3;
int b = 417;

int addTotal = a + b; 

System.Console.WriteLine($"Add total:{addTotal}");

// Subtraction "-"

int subTotal = 423 - a; 

System.Console.WriteLine($"Subtraction total:{subTotal}");

// Multiplication "*"

int multiTotal = a * 23;

System.Console.WriteLine($"Multiplication Total: {multiTotal}");

int divTotal = b / a;

System.Console.WriteLine($"DivisionTotal: {divTotal}");

// Remainder! "%"

int remainder = b % a;

System.Console.WriteLine($"Remainder of 3 into 417: {remainder}");

// Operators with other data types

DateTime today = DateTime.Now;
DateTime bday = new DateTime(2003, 09, 03);

TimeSpan age = today - bday;

Console.WriteLine($"Date/Time calculation: {age.ToString("%d")} days ");


//! Comparison Operators

// equality

int newAge = 50;
string name ="TJ";

bool isEqual = newAge == 21;

System.Console.WriteLine($"newAge == 21: {isEqual}");

// inequality: "!="
System.Console.WriteLine("\n------------ inequality --------");
bool isNotEqual= name != "Darneisha";

System.Console.WriteLine($"name != 'Darneisha': {isNotEqual}");


//* inequality with "reference types" (classes/structs)

List<string> first = new List<string>() {"tj"};

List<string> second = new List<string>() {"tj"};

bool isListEqual = first == second;

// this would make it true[[
// bool isListEqual = first[0] ==second[0];

System.Console.WriteLine($"first == second: {isListEqual}");

// greater/less than
System.Console.WriteLine("\n------------greater, less, greater, equal than --------");
bool greaterThan = newAge> 40;  

System.Console.WriteLine($"newAge>40: {greaterThan}");

bool lessThan = newAge < 40;

System.Console.WriteLine($"newAge >40: {lessThan}");

bool greaterThanOrEqual = newAge >=51;

System.Console.WriteLine($"newAge>=51 {greaterThanOrEqual}");

bool lessThanOrEqual = newAge <= 51;

System.Console.WriteLine($"newage < 51: {lessThanOrEqual}");


//And/OR operators [&& or ||]

bool trueVar = true;
bool falseVar =false;

//And (always false unless both are true)
System.Console.WriteLine("\n------------ and operator --------");
System.Console.WriteLine($"true && true < 51: {trueVar && trueVar}");
System.Console.WriteLine($"truee && false < 51: {trueVar && falseVar}");
System.Console.WriteLine($"false && true: {falseVar && trueVar}");
System.Console.WriteLine($"false && false: {falseVar && falseVar}");

// OR 

System.Console.WriteLine($"true || true < 51: {trueVar || trueVar}");
System.Console.WriteLine($"truee || false < 51: {trueVar || falseVar}");
System.Console.WriteLine($"false || true: {falseVar || trueVar}");
System.Console.WriteLine($"false || false: {falseVar || falseVar}");