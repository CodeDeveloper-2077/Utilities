namespace DAL.Repository
{
    public interface IGenericRepository<TEntity> : IDisposable
    {
        IEnumerable<TEntity> GetAll();
        TEntity GetById(int id);
        IEnumerable<TEntity> GetWithPredicate(Func<TEntity, bool> predicate);
        void Add(TEntity entity);
        void Delete(int entityId);
        void Update(TEntity entity);
        void Save();
    }
}
