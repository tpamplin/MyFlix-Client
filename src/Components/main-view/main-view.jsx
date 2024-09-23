import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovie] = useState([
        {
            "Genre": {
                "Name": "Drama",
                "Description": "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistc and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories."
            },
            "Director": {
                "Name": "Quentin Tarantino",
                "Bio": "Quentin Jerome Tarantino (born March 27, 1963) is an American filmmaker and actor. His films are characterized by stylized violence, extended dialogue often with profanity, and references to popular culture. Tarantino's work has been subject to criticism, such as the depictions of violence and frequent inclusion of racial slurs. During Tarantino's career, his films have garnered a cult following, as well as critical and commercial success. He is the recipient of two Academy Awards, two BAFTA Awards, and four Golden Globe Awards.",
                "Birth": "1964"
            },
            "Actors": [],
            "_id": "66bb9f4690e880a8cf228fb8",
            "Title": "Pulp Fiction",
            "Description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1055_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Adventure",
                "Description": "The adventure genre features exciting journeys, quests, or expeditions undertaken by characters who often face challenges, obstacles, and risks in pursuit of a goal. Adventures can take place in a wide range of settings, from exotic and fantastical locations to historical or even everyday environments."
            },
            "Director": {
                "Name": "Rob Reiner",
                "Bio": "Rob Reiner (born March 6, 1947, Bronx, New York, U.S.) is an American actor and director known especially for his role as Michael (“Meathead”) Stivic in the television series All in the Family (1971–79) and for his direction of such culturally resonant films as This Is Spinal Tap (1984), The Princess Bride (1987), When Harry Met Sally… (1989), and A Few Good Men (1992).",
                "Birth": "1947"
            },
            "Actors": [],
            "_id": "66bb96d090e880a8cf228fb5",
            "Title": "The Princess Bride",
            "Description": "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BYzdiOTVjZmQtNjAyNy00YjA2LTk5ZTAtNmJkMGQ5N2RmNjUxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UY4219_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Action",
                "Description": "The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries."
            },
            "Director": {
                "Name": "Pierre Morel",
                "Bio": "Pierre Morel (born 12 May 1964) is a French film director and cinematographer. His work includes District 13, From Paris with Love, and Taken.",
                "Birth": "1964"
            },
            "Actors": [],
            "_id": "66bba1b390e880a8cf228fbb",
            "Title": "Taken",
            "Description": "A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BNjkwZTY1NWEtMGExZi00MjEwLTgzYTEtMDBkOGZiYWVjOTgyXkEyXkFqcGdeQXVyNjkwOTQ4MDE@._V1_FMjpg_UX838_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Comedy",
                "Description": "The comedy genre refers to a category of entertainment that aims to amuse and entertain audiences by using humor, wit, and comedic situations. Comedies are created with the primary intention of eliciting laughter and providing lighthearted enjoyment. They encompass a wide range of styles, tones, and themes, appealing to various tastes and audiences."
            },
            "Director": {
                "Name": "Edgar Wright",
                "Bio": "Edgar Howard Wright (born 18 April 1974) is an English director, screenwriter, producer, and actor. He is best known for his comedic Three Flavours Cornetto film trilogy consisting of Shaun of the Dead (2004), Hot Fuzz (2007), and The World''s End (2013), made with recurrent collaborators Simon Pegg, Nira Park and Nick Frost. He also collaborated with them as the director of the television series Spaced.",
                "Birth": "1974"
            },
            "Actors": [],
            "_id": "66bba29d90e880a8cf228fbc",
            "Title": "Shaun of the Dead",
            "Description": "The uneventful, aimless lives of a London electronics salesman and his layabout roommate are disrupted by the zombie apocalypse.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1004_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Action",
                "Description": "The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries."
            },
            "Director": {
                "Name": "Christopher Nolan",
                "Bio": "Sir Christopher Edward Nolan CBE (born 30 July 1970) is a British and American filmmaker. Known for his Hollywood blockbusters with complex storytelling, he is considered a leading filmmaker of the 21st century. Nolan''s films have earned over $6 billion worldwide, making him the seventh-highest-grossing film director of all time. His accolades include two Academy Awards, a Golden Globe Award and two British Academy Film Awards. Nolan was appointed a Commander of the Order of the British Empire in 2019, and received a knighthood in 2024 for his contributions to film.",
                "Birth": "1970"
            },
            "Actors": [],
            "_id": "66bba5cf90e880a8cf228fbe",
            "Title": "The Dark Knight",
            "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Action",
                "Description": "The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries."
            },
            "Director": {
                "Name": "Sam Raimi",
                "Bio": "Samuel M. Raimi[1] (born October 23, 1959) is an American film director, screenwriter and producer. He is best known for directing the first three films in the Evil Dead franchise (1981–present) and the Spider-Man trilogy (2002–2007). He also directed the superhero movie Darkman (1990), the revisionist western The Quick and the Dead (1995), the neo-noir crime thriller A Simple Plan (1998), the supernatural thriller The Gift (2000), the supernatural horror Drag Me to Hell (2009), the Disney fantasy Oz the Great and Powerful (2013), and the Marvel Studios film Doctor Strange in the Multiverse of Madness (2022).",
                "Birth": "1974"
            },
            "Actors": [],
            "_id": "66bba48590e880a8cf228fbd",
            "Title": "Spider-Man",
            "Description": "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BNWYyYzBmNzAtNjNlOS00YzBlLWFiNzUtYzRhZmNmM2MxYWJhXkEyXkFqcGdeQXVyNDUzNzIxMzk@._V1_FMjpg_UX817_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Drama",
                "Description": "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistc and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories."
            },
            "Director": {
                "Name": "Quentin Tarantino",
                "Bio": "Quentin Jerome Tarantino (born March 27, 1963) is an American filmmaker and actor. His films are characterized by stylized violence, extended dialogue often with profanity, and references to popular culture. Tarantino's work has been subject to criticism, such as the depictions of violence and frequent inclusion of racial slurs. During Tarantino's career, his films have garnered a cult following, as well as critical and commercial success. He is the recipient of two Academy Awards, two BAFTA Awards, and four Golden Globe Awards.",
                "Birth": "1964"
            },
            "Actors": [],
            "_id": "66bba0e790e880a8cf228fba",
            "Title": "Django Unchained",
            "Description": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UY2048_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Action",
                "Description": "The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries."
            },
            "Director": {
                "Name": "Wilson Yip",
                "Bio": "Wilson Yip Wai-Shun (simplified Chinese: 叶伟信; traditional Chinese: 葉偉信; born 1964) is a Hong Kong actor, filmmaker and screenwriter. His films include Bio Zombie, The White Dragon, SPL: Sha Po Lang, Dragon Tiger Gate, Flash Point and the Ip Man series.",
                "Birth": "1964"
            },
            "Actors": [],
            "_id": "66bb9c3690e880a8cf228fb7",
            "Title": "Ip Man",
            "Description": "During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BNTFmMjM3M2UtOTIyZC00Zjk3LTkzODUtYTdhNGRmNzFhYzcyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Action",
                "Description": "The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries."
            },
            "Director": {
                "Name": "The Wachowskis",
                "Bio": "Lana Wachowski (born June 21, 1965) and Lilly Wachowski (born December 29, 1967), known together professionally as The Wachowskis, are Polish American movie directors, writers and transgender women, most famous for creating The Matrix series. Their other projects include live-action adaptation of Speed Racer, Jupiter Ascending and the Netflix television series Sense-8.",
                "Birth": "1965"
            },
            "Actors": [],
            "_id": "66bb983190e880a8cf228fb6",
            "Title": "The Matrix",
            "Description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY3156_.jpg",
            "Featured": false
        },
        {
            "Genre": {
                "Name": "Drama",
                "Description": "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistc and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories."
            },
            "Director": {
                "Name": "Christopher Nolan",
                "Bio": "Sir Christopher Edward Nolan CBE (born 30 July 1970) is a British and American filmmaker. Known for his Hollywood blockbusters with complex storytelling, he is considered a leading filmmaker of the 21st century. Nolan's films have earned over $6 billion worldwide, making him the seventh-highest-grossing film director of all time. His accolades include two Academy Awards, a Golden Globe Award and two British Academy Film Awards. Nolan was appointed a Commander of the Order of the British Empire in 2019, and received a knighthood in 2024 for his contributions to film.",
                "Birth": "1970"
            },
            "Actors": [],
            "_id": "66bba02c90e880a8cf228fb9",
            "Title": "Interstellar",
            "Description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft to find a new planet for humans.",
            "ImagePath": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3600_.jpg",
            "Featured": false
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie){
        return(
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        )
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie._id} 
                    movie={movie} 
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie)
                    }} 
                />
            ))}
        </div>
    );
};