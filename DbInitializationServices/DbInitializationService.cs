using DAL.UnitOfWork;
using DAL.Models;
using HtmlAgilityPack;
using LoggerService;

namespace DbInitializationServices
{
    public class DbInitializationService
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly ILoggerManager _loggerManager;

        public DbInitializationService(UnitOfWork unitOfWork, ILoggerManager loggerManager)
        {
            _unitOfWork = unitOfWork;
            _loggerManager = loggerManager;
        }

        public async Task InitializeStatesAsync()
        {
            const string url = "https://en.wikipedia.org/wiki/Administrative_divisions_of_Ukraine";

            using HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync(url);
            string pageContent = await response.Content.ReadAsStringAsync();

            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(pageContent);

            var oblastNames = new List<string>();

            try
            {
                var table = document.DocumentNode.SelectSingleNode("//table[contains(@class, 'wikitable')][3]");
                if (table != null)
                {
                    var rows = table.SelectNodes(".//tr");
                    if (rows != null)
                    {
                        foreach (var row in rows.Skip(1))
                        {
                            var cells = row.SelectNodes(".//td");
                            if (cells != null && cells.Count > 1)
                            {
                                oblastNames.Add(cells[3].InnerText);
                            }
                        }
                    }
                }

                foreach (var name in oblastNames)
                {
                    await _unitOfWork.Repository<State>().AddAsync(new State() { CountryId = 1, Name = name });
                }

                _unitOfWork.Commit();
                await Console.Out.WriteLineAsync("Success");
            }
            catch (Exception ex)
            {
                _loggerManager.LogError($"Something went wrong during adding states of Ukraine: {ex.Message}");
            }
            finally
            {
                _unitOfWork.Dispose();
            }
        }

        public async Task InitializeAllCitiesAsync()
        {
            const string url = "https://en.wikipedia.org/wiki/List_of_cities_in_Ukraine";

            using HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync(url);
            string pageContent = await response.Content.ReadAsStringAsync();

            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(pageContent);

            var cityNames = new Dictionary<string, string>();

            try
            {
                var table = document.DocumentNode.SelectSingleNode("//table[contains(@class, 'wikitable')]");
                if (table != null)
                {
                    var rows = table.SelectNodes(".//tr");
                    if (rows != null)
                    {
                        foreach (var row in rows.Skip(1))
                        {
                            var cells = row.SelectNodes(".//td");
                            if (cells != null && cells.Count > 1)
                            {
                                var city = new City() { Name = cells[1].InnerText };
                                var state = (await _unitOfWork.Repository<State>().GetWithPredicateAsync(s => s.Name.Contains(cells[2].InnerText))).FirstOrDefault();
                                if (state is not null)
                                {
                                    city.State = state;
                                    city.StateId = state.Id;
                                }

                                await _unitOfWork.Repository<City>().AddAsync(city);
                            }
                        }
                    }
                }
                _unitOfWork.Commit();
                await Console.Out.WriteLineAsync("Success");
            }
            catch (Exception ex)
            {
                _loggerManager.LogError($"Something went wrong during adding states of Ukraine: {ex.Message}");
            }
            finally
            {
                _unitOfWork.Dispose();
            }
        }

        public async Task InitializeAllStreetsAsync()
        {
            const string url = "https://dp.locator.ua/dnipro/streets/pl/";

            using HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync(url);
            string pageContent = await response.Content.ReadAsStringAsync();

            HtmlDocument document = new HtmlDocument();
            document.LoadHtml(pageContent);

            try
            {
                var table = document.DocumentNode.SelectSingleNode("//table[@id='strTable']/tbody");
                if (table != null)
                {
                    var rows = table.SelectNodes(".//tr");
                    if (rows != null)
                    {
                        foreach (var row in rows.Skip(2))
                        {
                            var cells = row.SelectNodes(".//td");
                            if (cells != null && cells.Count > 1)
                            {
                                var street = new Street() { Name = cells[0].InnerText };
                                street.CityId = 4;

                                await _unitOfWork.Repository<Street>().AddAsync(street);
                            }
                        }
                    }
                }
                _unitOfWork.Commit();
                await Console.Out.WriteLineAsync("Success");
            }
            catch (Exception ex)
            {
                _loggerManager.LogError($"Something went wrong during adding states of Ukraine: {ex.Message}");
            }
            finally
            {
                _unitOfWork.Dispose();
            }
        }
    }
}
