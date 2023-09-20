import MovieTile from './MovieTile'

export default {
    title: 'React Mentee/MovieTile',
    component: MovieTile,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const NoItemSelected = {
    args: {
        items: undefined
    }
};

export const FilmStoreIncluded = {
    args: {
        items: [
            {
                name: "The Lion King",
                releaseYear: "2018",
                runtime: "104 min",
                img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
                genres: ['Comedy'],
                sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
            },
            {
                name: "Mowgli: Legend of the Jungle",
                releaseYear: "2018",
                runtime: "104 min",
                img: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
                genres: ['Comedy'],
                sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
            },
            {
                name: "Doctor Strange",
                releaseYear: "2018",
                runtime: "104 min",
                img: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
                genres: ['Comedy'],
                sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
            }
        ],
        onClickCallback: (movie) => {
            console.log('Movie selected:' + movie.name)
        }
    }
}
