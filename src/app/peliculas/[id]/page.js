"use client"
import { useEffect, useState, use } from "react";
import "./MovieStyle.css"

export default function MovieDetail({params}){

    const {id} = use(params);
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect (() =>{
        async function fetchMovies(){   
         try{     
            const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=20&page=${page}`);
            const data = await response.json();
            setMovie(data.find(movie => movie["_id"] == id));
            console.log(movie);
            setLoading(false);
         } catch(error){
            console.error('Error fetching movies:', error);
            setLoading(false);
            }
        }
        fetchMovies()
    },[page]);

    return (
        <>
        <header className="main-header">
            <div className="container">
                <img src={movie.poster} alt={movie.title}></img>
            </div>
        </header>


        <main>
            <div className="movie-container">
                <h1>{movie.title}</h1>
                <p>{movie.fullplot}</p>
            </div>
        </main>


        <footer className="footer">
            <div className="container">
                <p>2025 Yañez Agustin Movie Catalog</p>
            </div>
        </footer>

        
        </>
    );
}