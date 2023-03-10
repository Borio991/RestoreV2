using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers
{
    public class PagedList<T> : List<T>
    {
        public MetaData MetaData { get; set; }
        public PagedList(List<T> items, int pageNumber, int count, int pageSize)
        {
            MetaData = new MetaData
            {
                CurrentPage = pageNumber,
                PageSize = pageSize,
                TotalCount = count,
                TotalPages = (int)Math.Ceiling(count / (decimal)pageSize)
            };
            AddRange(items);
        }
        public static async Task<PagedList<T>> ToPagedList(IQueryable<T> query, int pageNumber, int pageSize)
        {
            var count = await query.CountAsync();
            var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PagedList<T>(items, pageNumber, count, pageSize);
        }

    }
}