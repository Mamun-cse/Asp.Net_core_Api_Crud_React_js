using Microsoft.EntityFrameworkCore;
using OnlineShoping_API.DataContext;
using OnlineShoping_API.interfaces;
using OnlineShoping_API.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<OShopDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("OnlineShopDb")));
builder.Services.AddScoped<ICategoryRepository, categoryRepository>();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(builder =>{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();

});
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
