using DAL.Profiles;
using DAL.UnitOfWork;
using LoggerService;
using Microsoft.EntityFrameworkCore;
using NLog.Extensions.Logging;
using Utilities.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Debug);

    loggingBuilder.AddNLog();
});
builder.Services.AddScoped<ILoggerManager, LoggerManager>();

builder.Services.AddAutoMapper(typeof(MapperInitializer));
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<UtilitiesDb>(options =>
{
    options.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=UtilitiesDb;Integrated Security=True;");
});

builder.Services.AddTransient<UnitOfWork>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.UseSwagger();
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
    options.DocumentTitle = "Utility Swagger";
});

app.UseCors("CorsPolicy");

app.Run();
