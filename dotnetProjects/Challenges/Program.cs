// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");


// string firstname ="Michael";
// string lastname = "Theye";
// string houseNumber = "1234IForgot";
// string street = "Ocean Avenue";
// string city= "Mooresville";
// string state="Indiana";
// string zipcode="46151";
                                    // I used string interpolation because its
// string infoAboutMe =$"Hi my name is {firstname} {lastname} I live at {houseNumber} its located on {street} in {city} {state} {zipcode}!";

// System.Console.WriteLine(infoAboutMe);

// // // // // // // string squareBase = "Base";
// // // // // // // string squareHeight = "Height";
// // // // // // // string squareSide ="4 * s";
// // // // // // // string squareArea =$"Area of a square is {squareBase} * {squareHeight} Perimeter of a square is{squareSide}";

// // // // // // // string triangleHalf = "1/2";
// // // // // // // string triangleBase = "Base";
// // // // // // // string triangleHeight = "Height";
// // // // // // // string traingleArea =$"Area of a traingle is {triangleHalf} * {triangleBase} * {triangleHeight}";
// // // // // // // System.Console.WriteLine(squareArea, traingleArea);

// int squareSide =15;
// Console.WriteLine("Square Perimeter = " + (4 * squareSide));
// Console.WriteLine("Square Area = " + (Math.Pow(* squareSide)));
// Console.WriteLine("Square Volume = " + (Math.Pow( squareSide * 3)));

// int sideA = 11;
// int sideB = 15;
// int sideC = 12;
// int triangleH = 16;
// Console.WriteLine("Triangle Perimeter = " + (sideA + sideB + sideC));
// Console.WriteLine("Traingle Area = " + (sideB * triangleH));
// Console.WriteLine("Triangle Volume = " + (sideB * triangleH / 2 ));

// int radius=14;
// System.Console.WriteLine("Circle Perimtere =" + (2* Math.PI * radius));
// System.Console.WriteLine("Circle Area = " + (Math.PI * Math.Powradius));

/*
1. Print every letter of the word "Supercalifragilisticexpialidocious" to the console, one at a time.

2. Next, do the same, except only print the letter if it's an 'i'. If it's any other letter, print "Not an i".

Bonus: After that, print the number of letters in the word (do this with code, not by counting manually and hard-coding the number).
Another Bonus: In part 2, also determine if the letter is 'L'. If it is, print 'L'.
*/

// string oof = "Supercalifragilisticexpialidocious";
// int letterCount = 0;


// for (int i=-0; i < word.Length; i++)

//     if(word[i] == 'i')
//     {
//         System.Console.WriteLine(word[i]);
//     }
//         else if (word[i]== '1')
//         {
//         System.Console.WriteLine(word[i]);
//         }
//         else
//         {
//         System.Console.WriteLine($"Not an I"[i]);
//         }
       
// foreach (char letter in oof)
// {
//     if (letter == 'i' || letter == 'l')
//     {
//    System.Console.WriteLine(letter);
//     }
//     else 
//     {
//         System.Console.WriteLine("Not an I nor an L");
//     }
//     letterCount++;

// }
// System.Console.WriteLine(oof.Length);

// static void Main(string[] args) {
//     for(int i=1; i<=100;i++){
//         string res=(i%3==0&&i%5==0)?"FizzBuzz":
//         (i%5==0)?"Buzz":
//         (i%3==0)?"Fizz":i.ToString();
//         System.Console.WriteLine(res);
//         }
// }

// class Dob {
//     public static void Main(string [] args){
//         DateTime birfday=new DateTime(2003, 03, 09);
//         DateTime today = DateTime.Today;
//         int age = today.Year -birfday.Year;
//         if (birfday > today.AddYears(-age))age--;
//         System.Console.WriteLine(age);
//     }
// }
// int first= 5;
// int second= 15;

// int GetMax(int first, int second)
// {
//     return first > second ? first : second;
// }

string first ="Michael";
string last = "Theye";

string compositeName =string.Format("My name is {0}, {1}", first, last);

System.Console.WriteLine(compositeName);

// int dumb = 21;
// int dumber =48;

// double yeetus = (double)dumb/(double)dumber;

// double yeetus =(double)num1/num2;

class joke{
    public static void (){
        checkparse("12312");
        checkparse("564745674764");
    }
    public static void checkparse(string input){
        try{
            int val;
            val = Int32.Parse(input);
            System.Console.WriteLine("'{0}' parsed as {1},", input, val);
        }
        catch (FormatException){
            System.Console.WriteLine("It no work '{0}'", input);
        }
    }
}