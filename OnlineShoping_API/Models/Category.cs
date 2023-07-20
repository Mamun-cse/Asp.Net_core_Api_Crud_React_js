namespace OnlineShoping_API.Models
{
    public class Category
    {
        public int Id { get; set; } 
        public string CategoryName { get; set; }    
        public string CreatedBy {get; set; }
        //public DateTime CreatedDate { get; set; }
        public bool IsDeleted { get; set; }


    }
}
