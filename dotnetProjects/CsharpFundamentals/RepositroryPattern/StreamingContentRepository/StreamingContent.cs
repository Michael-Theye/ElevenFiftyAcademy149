namespace StreamingContentRepository;
/*
    POKO
*/
public class StreamingContent{

    public StreamingContent() {}

    public StreamingContent(string title, string description, double starRating, MaturityRating maturityRating, GenreType typeofGenre) {
        Title= title;
        Description= description;
        StarRating= starRating;
        MaturityRating = maturityRating;
        typeofGenre = typeofGenre;

    }

    public string Title {get; set;}
    public string Description {get;set;}

    public double StarRating {get;set;}
    public MaturityRating MaturityRating {get;set;}
    public bool IsFamilyFriendly { get
     {switch(MaturityRating)
            {
                case MaturityRating.G:
                case MaturityRating.PG:
                    return true;
                default:
                    return false;
            }
        }   
    }
    public GenreType TypeOfGenre{get;set;}
  
}
public enum MaturityRating {G, PG, PG13, R, X, TVMA, NC17, }
public enum GenreType {SciFi, Documentary, Comdey, Horror, Aciton, Thriller, Western, RomCom}

