using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Mission14API.Models;

namespace Mission14API.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private JoelHiltonMovieCollectionContext context;

    public MovieController(JoelHiltonMovieCollectionContext temp)
    {
        context = temp;
    }

    public IEnumerable<Movie> Get() => context.Movies
        .Where(m => m.Edited == "Yes")
        .OrderBy(m => m.Title)
        .ToArray();
}

