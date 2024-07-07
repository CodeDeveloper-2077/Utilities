using DAL.UnitOfWork;
using LoggerService;
using Microsoft.Extensions.DependencyInjection;

namespace DbInitializationServices
{
    public class Program
    {
        static async Task Main(string[] args)
        {
            // Setup DI
            var serviceCollection = new ServiceCollection();
            var startup = new StartUp();
            startup.ConfigureServices(serviceCollection);
            var serviceProvider = serviceCollection.BuildServiceProvider();

            var unitOfWork = serviceProvider.GetRequiredService<UnitOfWork>();
            var loggerManager = serviceProvider.GetRequiredService<ILoggerManager>();
            DbInitializationService initializationService = new DbInitializationService(unitOfWork, loggerManager);

            await initializationService.InitializeAllStreetsAsync();
        }
    }
}