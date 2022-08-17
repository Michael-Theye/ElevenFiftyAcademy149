
// * strings are collection of "char" data types
// string efa = "Eleven Fifity Academy";

// // considered "null" and will throw an error if referred to in the code     
// string blankEfa;

// System.Console.WriteLine($"{efa}\n{blankEfa}"); //! Wont work because of string blankEfa; isn't defined


//! String Manipulation
string firstName = "Michael";
string lastName = "Theye";

string concatenatedVar = firstName + " " + lastName;

// composite formatting allows you to declare spaces for the variable in the string and assign values for them inside the "formatting method"
// - argument indexes start at 0 for the string in the first argument
string compositeFormatterVar = string.Format("{0} {1}", firstName, lastName);

// string interpolation
string interpolatedString = $"{firstName} {lastName}";

// ! Arrays 
string[] stringArray = { "this", "is", "an", "array", "of", "strings" };

stringArray[2] = "the";

System.Console.WriteLine($"{stringArray[0]} {stringArray[1]} {stringArray[2]} {stringArray[3]} {stringArray[4]} {stringArray[5]}");

// ! List typically preferred over arrays due to their ability to add/remove values

List<int> intList = new List<int>();
//! broken
intList.Add(9);
intList.Add(6);
intList.Add(4);

System.Console.WriteLine(string.Join(",  ", intList));
//! broken
List<string> celebList = new List<string>() {"Drake", "snoop", "odb", "q tip"};
celebList.Add("Kevin Hart");
celebList.Add("The Rock");

System.Console.WriteLine();
System.Console.WriteLine(string.Join(", ", celebList));

// ! Queues (first in, first out)

Queue<string> firstInFirstOut = new Queue<string>();

firstInFirstOut.Enqueue("Beyonce");
firstInFirstOut.Enqueue("Taylor Swift");
firstInFirstOut.Enqueue("Kesha");

System.Console.WriteLine();
System.Console.WriteLine(string.Join(", ", firstInFirstOut));

//! DICTIONARIES (used for creating a key/value)

Dictionary<int, string> keyAndValue = new Dictionary<int, string>();
keyAndValue.Add(10, "Michael");
keyAndValue.Add(4, "TJ");

System.Console.WriteLine();
System.Console.WriteLine(string.Join("," , keyAndValue));

// when using square brackets with dictionaries, specify the KEY name
System.Console.WriteLine($"\n10 key: {keyAndValue[10]}");

