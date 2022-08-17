public class Amphibian : Animal
{
    public Amphibian (){}
    public Amphibian(int numLegs, bool hasTail, int numTeeth, DietType typeOfDiet, string skinColor, bool camouflage)
    {
        HasFur = false;
        BloodType = "cold";
        NumLegs = numLegs;
        HasTail = hasTail;
        NumTeeth = numTeeth;
        TypeOfDiet = typeOfDiet;
        SkinColor = skinColor;
        Camouflage = camouflage;
        System.Console.WriteLine("This is the Amphibian Constructor");
    }
    public string SkinColor { get; set; }
    public bool Camouflage { get; set; }
}