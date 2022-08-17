using StreamingContentRepository;

namespace StreamingContentTest;
/*
    Triple "A" Paradigm:

    1. Arrange = setting the stage (initializing any variables, creating class instaces, etc)
    2. Act = execute any code needed for testing. if there are methods needed to be called it would be here. "expected" and "actualy" variables are assigned to the "expectec" value for what is being tested and the "actualy" value coming back from what is being tested
    3. Assert = asserting the test using the "assere" class along with the "expected/"actual" variable(s) being tested
*/

[TestClass]
public class Tests
{
    [TestMethod]
    public void SetCorrectTitle()
    {
        // Arrange 
        StreamingContent content = new StreamingContent();

        content.Title = "Godfather";
        // Act
        string expected = "Godfather";
        string actual = content.Title;

        // Assert
        Assert.AreEqual(expected, actual);
    }
[DataTestMethod]
[DataRow(MaturityRating.G, true)]
[DataRow(MaturityRating.PG, true)]
[DataRow(MaturityRating.PG13, false)]
[DataRow(MaturityRating.R, false)]
[DataRow(MaturityRating.TVMA, false)]


public void GetCorrectFamilyFriendlyStatus(MaturityRating rating, bool expectecFamilyFriendly) 
    {   
        StreamingContent content = new StreamingContent("Norbit", "nerdy guy dates overweight lady and eddie murphy is all of them", 4.2, rating, GenreType.Comdey);

        bool expected = expectecFamilyFriendly;
        bool actual = content.IsFamilyFriendly;

       Assert.AreEqual(expected, actual);
    }
}