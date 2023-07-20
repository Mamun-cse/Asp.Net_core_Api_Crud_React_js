using Microsoft.EntityFrameworkCore;
using OnlineShoping_API.Models;

namespace OnlineShoping_API.DataContext
{
    public class OShopDbContext:DbContext
    {
        public OShopDbContext(DbContextOptions <OShopDbContext> options) : base(options)
        {
            
        }
        public DbSet<Category> Categories { get; set; }

    }
}
