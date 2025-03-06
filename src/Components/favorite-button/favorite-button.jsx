import {useEffect, useState} from "react";
import { Button } from "react-bootstrap";


export const FavoriteButton =  ({ user, movie, setUser}) => {
    const movieId = movie.Id;
    const storedToken = localStorage.getItem("token");
    const [isFavorite, setIsFavorite] = useState(false);
    const data = {
        MovieID: movie.Id
    }
    const addFavorite = () =>{
        fetch(
            `http://ec2-44-211-131-121.compute-1.amazonaws.com/users/${user.Username}/favorites`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`
                },
                body: JSON.stringify(data)
            }
        )
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((user) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((err) => console.error(err));
    };

    const removeFavorite = () =>{
        fetch(
            `http://ec2-44-211-131-121.compute-1.amazonaws.com/users/${user.Username}/favorites`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${storedToken}`
                },
                body: JSON.stringify(data)
            }
        )
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((user) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((err) => console.error(err));
    };

    useEffect(() => {
        if(!user) return;

        if(user.Favorites.includes(movieId)){
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [user]);

    if (isFavorite){
        return(
            <Button variant="outline-dark" onClick={removeFavorite}>
                Remove From Favorites
            </Button>
        )
    } else {
        return(
            <Button variant="secondary" onClick={addFavorite}>
                Add To Favorites
            </Button>
        )
    }
}