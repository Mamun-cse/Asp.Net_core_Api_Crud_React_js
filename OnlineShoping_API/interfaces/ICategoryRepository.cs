using OnlineShoping_API.Models;

namespace OnlineShoping_API.interfaces
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        Category GetCategory(int id);
        bool Add(Category category);
        bool Edit(Category category);
        bool Delete(int id);
    }
}
