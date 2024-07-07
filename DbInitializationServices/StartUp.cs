using DAL.UnitOfWork;
using LoggerService;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Utilities.Data;

namespace DbInitializationServices
{
    public class StartUp
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<UtilitiesDb>(options =>
            {
                options.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=UtilitiesDb;Integrated Security=True;");
            });

            services.AddTransient<UnitOfWork>();
            services.AddScoped<ILoggerManager, LoggerManager>();
        }
    }
}
