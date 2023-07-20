using OnlineShoping_API.DataContext;
using OnlineShoping_API.interfaces;
using OnlineShoping_API.Models;

namespace OnlineShoping_API.Repository
{
    public class categoryRepository: ICategoryRepository
    {
        
        private readonly OShopDbContext _dbContext;
        public categoryRepository(OShopDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Category> GetAll()
        {
            return _dbContext.Categories.ToList();

        }

        public bool Add(Category category)
        {
            _dbContext.Categories.Add(category);
            return _dbContext.SaveChanges()>0;
        }

        public bool Delete(int id)
        {
            var category = _dbContext.Categories.FirstOrDefault(category=>category.Id==id);
            if (category!=null)
            {
                category.IsDeleted = true;
                return _dbContext.SaveChanges() > 0;
            }
            return false;
        }

        public bool Edit(Category category)
        {
            _dbContext.Categories.Update(category);
            return _dbContext.SaveChanges() > 0;
        }

        
        public Category GetCategory(int id)
        {
            var category = _dbContext.Categories.FirstOrDefault(category=>category.Id==id);
            return category;



        }
    }
}
