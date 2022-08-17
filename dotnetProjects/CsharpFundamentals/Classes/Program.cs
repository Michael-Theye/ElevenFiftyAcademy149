
Vehicle charger = new Vehicle();
charger.Make = "Dodge";
charger.Model = "Charger";
charger.Mileage = 0;
charger.Year = 2022;
charger.VehicleType = VehicleType.Car;
charger.RightIndicator= new Indicator();
charger.LeftIndicator= new Indicator();



System.Console.WriteLine($"Damn you got a {charger.Year} {charger.Make} {charger.Model} with {charger.Mileage} miles!.\n");

charger.Turnon();
charger.IndicatorLeft();
charger.IndicatorRight();
System.Console.WriteLine($"Right indicator is running: {charger.RightIndicator.IsFlashing}\nleft indicator is running{charger.LeftIndicator.IsFlashing}");
charger.TurnOnHazards();
System.Console.WriteLine($"Right indicator is running: {charger.RightIndicator.IsFlashing}\nleft indicator is running{charger.LeftIndicator.IsFlashing}");
charger.Turnoff();
charger.Turnon();

System.Console.WriteLine(charger.IsRunning ? "The Vehicle is running" : "Not running");

Person michael = new Person();
michael.First = "Michael";
michael.Last = "Theye";
michael.Dob = new DateTime(2003, 03, 09);
michael.Transport = new Vehicle();


// constructor example
// Person gordonRamsey = new Person("Gordon", "Ramsey", new DateTime(1966, 11, 08), new Vehicle() );

// System.Console.WriteLine($"This is {gordonRamsey.First} {gordonRamsey.Last} they were born {gordonRamsey.Dob} and are {gordonRamsey.Age} years old. They drive a {gordonRamsey.Transport.Year} {gordonRamsey.Transport.Make} {gordonRamsey.Transport.Model}");


System.Console.WriteLine($"This is {michael.First} {michael.Last} they were born {michael.Dob} and are {michael.Age} years old. They drive a {michael.Transport.Year} {michael.Transport.Make} {michael.Transport.Model}.\n");

// class method ex
Greeter greeter = new Greeter();
greeter.SayHello();
greeter.SayHello("Michael");

// calculator ex
Calculator calculator = new Calculator();
System.Console.WriteLine($"Add interget: {calculator.Add(15, 22)}\nAdd doubdle {calculator.Add(1.2, 22.1)}\nSubtract: {calculator.Subtract(400, 22)} \nMultiply: {calculator.Multiply(90, 49)} \nDivide: {calculator.Divide(100,2)}\nStatic GetRandomNum() method: {Calculator.GetRandomNum(500)}");

/*  
    Properties IN C# CLASSES:
    1: access modifier = where can it be seen?
    2: data type = what type of data will be expected to be stored
    3: name of property
    4: getter/setters
*/

public class Vehicle
{
    
    // 1     2      3        4
    public string? Make { get; set; } = "Kia";
    public string? Model { get; set; } = "Forte GT";
    public double Mileage { get; set; }
    public int Year { get; set; } = 2020;
    public VehicleType VehicleType { get; set; } = VehicleType.Car;
    public bool IsRunning {get; private set;}
    
    public Indicator? RightIndicator {get; set;}

    public Indicator? LeftIndicator {get; set;}


    public void Turnon(){
        IsRunning=true;
        System.Console.WriteLine($"you turned on the {Model}");
    }
      public void Turnoff(){
        IsRunning=false;
        ClearIndicators();
        System.Console.WriteLine($"you turned off the {Model}");
    }
    public void IndicatorRight() {
        RightIndicator.Turnon();
        LeftIndicator.Turnoff();
    }
    public void IndicatorLeft() {
        LeftIndicator.Turnon();
        RightIndicator.Turnoff();
    }

    public void TurnOnHazards(){
         RightIndicator.Turnon();
        LeftIndicator.Turnoff();
    }
    public void ClearIndicators() {
         RightIndicator.Turnon();
        LeftIndicator.Turnoff();
    }
}

public class Indicator {
    public bool IsFlashing {get; private set;}
   public void Turnon(){
        IsFlashing=true;
       
    }
      public void Turnoff(){
        IsFlashing=false;
        
    }

}

// ! ENUMS
public enum VehicleType { Car, Truck, Bike, Spaceship, Plane, Boat }


// ! Custom "get"/"set" and constructors

public class Person
{ //default constructor
    // If paramaterized constructor is included have to the default constructor 
    public Person() {}
    // paramatized constructor
    // public Person(string First, string Last, DateTime Dob, Vehicle transport) {
    //     First = first;
    //     Last = last;
    //     Dob = dob;
    //     Transport = transport;
    // }
    public string? First { get; set; }
    // what's happening behind the scenes
    private string? _last;
    public string? Last
    {
        get
        {
            return _last;
        }
        set
        {
            _last = value;
        }
    }

    public string FullName {
        get{
            return $"{First} {Last}";
        }
    }
    public DateTime Dob { get; set; }
    public int Age
    {
        get
        {
            TimeSpan exactAge = DateTime.Now - Dob;
            int totalDays = (int)exactAge.TotalDays;
            // type casting (parenthesis with data type before variable/data)
            double yearsUnrounded = (double)totalDays / 365.24;
            int years = (int)Math.Round(yearsUnrounded);
            return years;
        }
    }
    public Vehicle? Transport { get; set; }
}

// ! METHODS IN CLASSES
/*
    1: access modifier (see above)
    2: return type = what type of data is expected to be returned. if nothing is returned should be "void"
    3: method signature = name followed by parentheses and any arguments that may be included
    4: body of code that is executed 
*/
public class Greeter {
   // 1    2      3 
    public void SayHello() {
            //      4
        System.Console.WriteLine($"What's good");
    }
    //overloading methods
    public void SayHello(string name) {
        System.Console.WriteLine($"What's good {name}!./n");
    }
}

public class Calculator {

    public static int GetRandomNum(int maxVal) {
        Random random = new Random();

        int randNum= random.Next(maxVal);
        return randNum;
    }
    public int Add(int numOne, int numTwo) {
        return numOne + numTwo; 
    } 

    public double Add(double numOne, double numTwo) {
        return numOne + numTwo;
    }
    public int Subtract(int numOne, int numTwo) {
        return numOne - numTwo;
    }
    public int Multiply(int numOne, int numTwo) {
        return numOne * numTwo;
    }
    public int Divide(int numOne, int numTwo) {
        return numOne / numTwo;
    }

}