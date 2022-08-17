// single line comment inb C# (2 forward slashes)
 
/*
 Multi line comment in C#
*/


/// XML COMMENTS
/// these are used to add definition for specific items in your code



// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// System.Console.WriteLine();

// ! VALUE TYPES


// boolean data type

bool isDeclared;

isDeclared = true;

bool isDeclaredandInitiallized = false;

isDeclaredandInitiallized = true;

// character data type - MUST USE SINGLE QOUTES

char letter = 't';
char symbol = '?';
char num = '3';
char space = ' ';
char specialChar = '\n';

/*number data TYPES 

interger types[whole #s]
-floating point types [decimal #s]
*/

//interger types
int wholeNum = -14;

// floating point types
double doubleEx = 15.69;
// ! double detailedDoubleEx = 13.69d;
// * "float" have to end with "f"
float floatEx = 3.1415927f;
// * "decimal" have to end wtih "f"
decimal decimalEx = 1000.30832m; 

System.Console.WriteLine($"double: {wholeNum}\nfloat: {doubleEx}\nfloat: {floatEx}\ndecimal: {decimalEx}+");

//string data type
// string helloWorld = "Hello world!";

int dumb = 21;
int dumber =48;

double yeetus = (double)dumb/(double)dumber;