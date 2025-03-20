import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home(){
    const [searchQuery,setSearchQuery]=useState("");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    const movies=[
        {
            id: 1,
            title: "Inception",
            release: 2010,
            genre: "Sci-Fi, Thriller",
            director: "Christopher Nolan",
            rating: 8.8,
            url: "https://i.pinimg.com/736x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg"
        },
        {
            id: 2,
            title: "Breaking Bad",
            release: 2008,
            genre: "Crime, Drama, Thriller",
            creator: "Vince Gilligan",
            rating: 9.5,
            url: "https://i.pinimg.com/736x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg"
        },
        {
            id: 3,
            title: "Attack on Titan",
            release: 2013,
            genre: "Animation, Action, Adventure",
            creator: "Hajime Isayama",
            rating: 9.0,
            url: "https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg"
        },
        {
            id: 4,
            title: "The Dark Knight",
            release: 2008,
            genre: "Action, Crime, Drama",
            director: "Christopher Nolan",
            rating: 9.0,
            url: "https://i.pinimg.com/736x/5d/55/f6/5d55f69bbe7948d202dffbbea4b857d8.jpg"
        },
        {
            id: 5,
            title: "Stranger Things",
            release: 2016,
            genre: "Drama, Fantasy, Horror",
            creators: "The Duffer Brothers",
            rating: 8.7,
            url: "https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg"
        },
        {
            id: 6,
            title: "Death Note",
            release: 2006,
            genre: "Animation, Crime, Drama",
            creator: "Tsugumi Ohba",
            rating: 9.0,
            url: "https://i.pinimg.com/736x/0e/b7/4b/0eb74bbd85f6a2e461e46003edd6cc47.jpg"
        },
        {
            id: 7,
            title: "Interstellar",
            release: 2014,
            genre: "Adventure, Drama, Sci-Fi",
            director: "Christopher Nolan",
            rating: 8.7,
            url: "https://i.pinimg.com/736x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg"
        },
        {
            id: 8,
            title: "Game of Thrones",
            release: 2011,
            genre: "Action, Adventure, Drama",
            creators: "David Benioff, D.B. Weiss",
            rating: 9.2,
            url: "https://i.pinimg.com/736x/29/50/d3/2950d35edaf94a68825431d1335ea06d.jpg"
        },
        {
            id: 9,
            title: "Demon Slayer: Kimetsu no Yaiba",
            release: 2019,
            genre: "Animation, Action, Adventure",
            creator: "Koyoharu Gotouge",
            rating: 8.7,
            url: "https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg"
        },
        {
            id: 10,
            title: "The Matrix",
            release: 1999,
            genre: "Action, Sci-Fi",
            directors: "Lana Wachowski, Lilly Wachowski",
            rating: 8.7,
            url: "https://i.pinimg.com/736x/64/bb/3b/64bb3bb874ecc9e952ca077f91887c3c.jpg"
        }
    ];
    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery("-----------")

    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form" >
            <input type="text" placeholder="Search for  movies..." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search </button>
        </form>
        <div className="movies-grid">
            {movies.map(movie=>(
               movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>

    </div>
}

export default Home;