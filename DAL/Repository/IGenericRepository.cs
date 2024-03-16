using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;

namespace DAL.Repository
{
    public interface IGenericRepository<TEntity> : IDisposable
    {
        Task<IEnumerable<TEntity>> GetAllAsync();
        Task<TEntity> GetByIdAsync(int id);
        Task<IEnumerable<TEntity>> GetWithPredicateAsync(Func<TEntity, bool> predicate);
        Task AddAsync(TEntity entity);
        Task DeleteAsync(int entityId);
        Task UpdateAsync(TEntity entity);
        Task<int> SaveAsync();

        IIncludableQueryable<TEntity, TProperty> Include<TProperty>(Expression<Func<TEntity, TProperty>>? navigationProperty);
    }
}
