const series = [
    {
        "title": "Dexter",
        "year": 2006,
        "genre": "Crime, Drama, Mystery",
        "seasons": 8,
        "episodes": 96,
        "rating": 8.6
    },
    {
        "title": "30 Rock",
        "year": 2006,
        "genre": "Comedy",
        "seasons": 7,
        "episodes": 138,
        "rating": 8.3
    },
    {
        "title": "Mad Men",
        "year": 2007,
        "genre": "Drama",
        "seasons": 7,
        "episodes": 92,
        "rating": 8.7
    },
    {
        "title": "The Big Bang Theory",
        "year": 2007,
        "genre": "Comedy, Romance",
        "seasons": 12,
        "episodes": 279,
        "rating": 8.1
    },
    {
        "title": "Breaking Bad",
        "year": 2008,
        "genre": "Crime, Drama, Thriller",
        "seasons": 5,
        "episodes": 62,
        "rating": 9.5
    },
    {
        "title": "Sons of Anarchy",
        "year": 2008,
        "genre": "Crime, Drama, Thriller",
        "seasons": 7,
        "episodes": 92,
        "rating": 8.6
    },
    {
        "title": "Modern Family",
        "year": 2009,
        "genre": "Comedy, Drama, Romance",
        "seasons": 11,
        "episodes": 250,
        "rating": 8.5
    },
    {
        "title": "Parks and Recreation",
        "year": 2009,
        "genre": "Comedy",
        "seasons": 7,
        "episodes": 125,
        "rating": 8.6
    },
    {
        "title": "The Walking Dead",
        "year": 2010,
        "genre": "Drama, Horror, Thriller",
        "seasons": 11,
        "episodes": 177,
        "rating": 8.1
    },
    {
        "title": "Sherlock",
        "year": 2010,
        "genre": "Crime, Drama, Mystery",
        "seasons": 4,
        "episodes": 13,
        "rating": 9.1
    },
    {
        "title": "Downton Abbey",
        "year": 2010,
        "genre": "Drama, Romance",
        "seasons": 6,
        "episodes": 52,
        "rating": 8.7
    },
    {
        "title": "Game of Thrones",
        "year": 2011,
        "genre": "Action, Adventure, Drama",
        "seasons": 8,
        "episodes": 73,
        "rating": 9.2
    },
    {
        "title": "Black Mirror",
        "year": 2011,
        "genre": "Drama, Mystery, Sci-Fi",
        "seasons": 6,
        "episodes": 27,
        "rating": 8.7
    },
    {
        "title": "Suits",
        "year": 2011,
        "genre": "Comedy, Drama",
        "seasons": 9,
        "episodes": 134,
        "rating": 8.4
    },
    {
        "title": "Homeland",
        "year": 2011,
        "genre": "Crime, Drama, Mystery",
        "seasons": 8,
        "episodes": 96,
        "rating": 8.3
    },
    {
        "title": "Arrow",
        "year": 2012,
        "genre": "Action, Adventure, Crime",
        "seasons": 8,
        "episodes": 170,
        "rating": 7.5
    },
    {
        "title": "Vikings",
        "year": 2013,
        "genre": "Action, Adventure, Drama",
        "seasons": 6,
        "episodes": 89,
        "rating": 8.5
    },
    {
        "title": "Brooklyn Nine-Nine",
        "year": 2013,
        "genre": "Comedy, Crime",
        "seasons": 8,
        "episodes": 153,
        "rating": 8.4
    },
    {
        "title": "Peaky Blinders",
        "year": 2013,
        "genre": "Crime, Drama",
        "seasons": 6,
        "episodes": 36,
        "rating": 8.8
    },
    {
        "title": "Rick and Morty",
        "year": 2013,
        "genre": "Animation, Adventure, Comedy",
        "seasons": 7,
        "episodes": 71,
        "rating": 9.1
    },
    {
        "title": "The Flash",
        "year": 2014,
        "genre": "Action, Adventure, Drama",
        "seasons": 9,
        "episodes": 184,
        "rating": 7.5
    },
    {
        "title": "Bojack Horseman",
        "year": 2014,
        "genre": "Animation, Comedy, Drama",
        "seasons": 6,
        "episodes": 77,
        "rating": 8.8
    },
    {
        "title": "Better Call Saul",
        "year": 2015,
        "genre": "Crime, Drama",
        "seasons": 6,
        "episodes": 63,
        "rating": 9.0
    },
    {
        "title": "Mr. Robot",
        "year": 2015,
        "genre": "Crime, Drama, Thriller",
        "seasons": 4,
        "episodes": 45,
        "rating": 8.5
    },
    {
        "title": "Narcos",
        "year": 2015,
        "genre": "Biography, Crime, Drama",
        "seasons": 3,
        "episodes": 30,
        "rating": 8.8
    },
    {
        "title": "Stranger Things",
        "year": 2016,
        "genre": "Drama, Fantasy, Horror",
        "seasons": 5,
        "episodes": 42,
        "rating": 8.7
    },
    {
        "title": "The Crown",
        "year": 2016,
        "genre": "Biography, Drama, History",
        "seasons": 6,
        "episodes": 60,
        "rating": 8.6
    },
    {
        "title": "Westworld",
        "year": 2016,
        "genre": "Drama, Mystery, Sci-Fi",
        "seasons": 4,
        "episodes": 36,
        "rating": 8.5
    },
    {
        "title": "This Is Us",
        "year": 2016,
        "genre": "Comedy, Drama, Romance",
        "seasons": 6,
        "episodes": 106,
        "rating": 8.7
    },
    {
        "title": "The Handmaid's Tale",
        "year": 2017,
        "genre": "Drama, Sci-Fi, Thriller",
        "seasons": 6,
        "episodes": 56,
        "rating": 8.4
    },
    {
        "title": "Money Heist (La Casa de Papel)",
        "year": 2017,
        "genre": "Action, Crime, Drama",
        "seasons": 5,
        "episodes": 41,
        "rating": 8.2
    },
    {
        "title": "Dark",
        "year": 2017,
        "genre": "Crime, Drama, Mystery",
        "seasons": 3,
        "episodes": 26,
        "rating": 8.7
    },
    {
        "title": "Succession",
        "year": 2018,
        "genre": "Comedy, Drama",
        "seasons": 4,
        "episodes": 40,
        "rating": 8.9
    },
    {
        "title": "Yellowstone",
        "year": 2018,
        "genre": "Drama, Western",
        "seasons": 5,
        "episodes": 53,
        "rating": 8.7
    },
    {
        "title": "The Boys",
        "year": 2019,
        "genre": "Action, Comedy, Crime",
        "seasons": 5,
        "episodes": 40,
        "rating": 8.7
    },
    {
        "title": "Chernobyl",
        "year": 2019,
        "genre": "Drama, History, Thriller",
        "seasons": 1,
        "episodes": 5,
        "rating": 9.4
    },
    {
        "title": "The Mandalorian",
        "year": 2019,
        "genre": "Action, Adventure, Fantasy",
        "seasons": 3,
        "episodes": 24,
        "rating": 8.6
    },
    {
        "title": "Euphoria",
        "year": 2019,
        "genre": "Drama",
        "seasons": 3,
        "episodes": 24,
        "rating": 8.3
    },
    {
        "title": "Ted Lasso",
        "year": 2020,
        "genre": "Comedy, Drama, Sport",
        "seasons": 3,
        "episodes": 34,
        "rating": 8.8
    },
    {
        "title": "The Queen's Gambit",
        "year": 2020,
        "genre": "Drama",
        "seasons": 1,
        "episodes": 7,
        "rating": 8.5
    },
    {
        "title": "Squid Game",
        "year": 2021,
        "genre": "Action, Drama, Mystery",
        "seasons": 2,
        "episodes": 18,
        "rating": 8.0
    },
    {
        "title": "Arcane",
        "year": 2021,
        "genre": "Animation, Action, Adventure",
        "seasons": 2,
        "episodes": 18,
        "rating": 9.0
    },
    {
        "title": "The White Lotus",
        "year": 2021,
        "genre": "Comedy, Drama",
        "seasons": 3,
        "episodes": 19,
        "rating": 8.0
    },
    {
        "title": "The Bear",
        "year": 2022,
        "genre": "Comedy, Drama",
        "seasons": 3,
        "episodes": 28,
        "rating": 8.6
    },
    {
        "title": "House of the Dragon",
        "year": 2022,
        "genre": "Action, Adventure, Drama",
        "seasons": 2,
        "episodes": 18,
        "rating": 8.4
    },
    {
        "title": "Severance",
        "year": 2022,
        "genre": "Drama, Mystery, Sci-Fi",
        "seasons": 2,
        "episodes": 19,
        "rating": 8.7
    },
    {
        "title": "Wednesday",
        "year": 2022,
        "genre": "Comedy, Crime, Fantasy",
        "seasons": 2,
        "episodes": 16,
        "rating": 8.1
    },
    {
        "title": "The Last of Us",
        "year": 2023,
        "genre": "Action, Adventure, Drama",
        "seasons": 2,
        "episodes": 16,
        "rating": 8.7
    },
    {
        "title": "Beef",
        "year": 2023,
        "genre": "Comedy, Drama",
        "seasons": 1,
        "episodes": 10,
        "rating": 8.0
    },
    {
        "title": "Fallout",
        "year": 2024,
        "genre": "Action, Adventure, Drama",
        "seasons": 2,
        "episodes": 16,
        "rating": 8.4
    },
    {
        "title": "Shōgun",
        "year": 2024,
        "genre": "Adventure, Drama, History",
        "seasons": 1,
        "episodes": 10,
        "rating": 8.7
    },
    {
        "title": "Baby Reindeer",
        "year": 2024,
        "genre": "Biography, Drama, Thriller",
        "seasons": 1,
        "episodes": 7,
        "rating": 7.8
    },
    {
        "title": "The Pitt",
        "year": 2025,
        "genre": "Drama",
        "seasons": 2,
        "episodes": 16,
        "rating": 8.2
    },
    {
        "title": "A Knight of the Seven Kingdoms",
        "year": 2025,
        "genre": "Action, Adventure, Drama",
        "seasons": 1,
        "episodes": 6,
        "rating": 8.5
    },
    {
        "title": "Paradise",
        "year": 2025,
        "genre": "Drama, Sci-Fi",
        "seasons": 2,
        "episodes": 16,
        "rating": 8.1
    }
]