using Microsoft.AspNetCore.Mvc;
using OnlineShoping_API.interfaces;
using OnlineShoping_API.Models;

namespace OnlineShop.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categroryRepository)
        {
            _categoryRepository = categroryRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var categories = _categoryRepository.GetAll();
            return Ok(categories);
        }

        [HttpGet]
        public IActionResult GetById(int id)
        {
            var category = _categoryRepository.GetCategory(id);
            return Ok(category);
        }

        [HttpPost]
        public IActionResult Add([FromBody] Category category)
        {
            try
            {
                bool isSaved = _categoryRepository.Add(category);
                if (isSaved)
                {
                    return Ok("Category has been saved.");
                }
                return BadRequest("Category saved failed.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult Edit([FromBody] Category category)
        {
            try
            {
                bool isUpdated = _categoryRepository.Edit(category);
                if (isUpdated)
                {
                    return Ok("Category has been modified.");
                }
                return BadRequest("Category modified failed.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete]
        public IActionResult Delete(int id)
        {
            try
            {
                bool isDeleted = _categoryRepository.Delete(id);
                if (isDeleted)
                {
                    return Ok("Category has been deleted.");
                }
                return BadRequest("Category deleted failed.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
