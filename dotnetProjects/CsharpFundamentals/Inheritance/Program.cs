Mammal dog = new Mammal(4, true, 42, DietType.Carnivores, "red");
Amphibian kermit = new Amphibian(4, false, 0, DietType.Carnivores, "green", false);
System.Console.WriteLine($"Mammal example:\nNumber of legs: {dog.NumLegs}\n" +
$"{(dog.HasFur ? "mammal has fur\n" : "Doesn't have fur\n")}" +
$"Number of teeth {dog.NumTeeth}\n" +
$"Fur color: {dog.FurColor}\n");
System.Console.WriteLine($"Amphibian example:\nNumber of legs: {kermit.NumLegs}\n" +
$"{(kermit.HasFur ? "has fur\n" : "Doesn't have fur\n")}" +
$"Number of teeth {kermit.NumTeeth}\n" +
$"Skin color: {kermit.SkinColor}\n" +
$"{(kermit.Camouflage ? "is camouflaged\n" : "not camouflaged\n")}");