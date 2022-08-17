public abstract class Animal
{
    public Animal()
    {
        System.Console.WriteLine("This is the Animal constructor");
    }
    public int NumLegs { get; set; }
    public bool HasFur { get; set; }
    public bool HasTail { get; set; }
    public int NumTeeth { get; set; }
    public string BloodType { get; set; }
    public DietType TypeOfDiet { get; set; }
}
public enum DietType { Omnivores, Carnivores, Herbivores }