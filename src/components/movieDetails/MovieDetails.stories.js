import MovieDetails from './MovieDetails'

export default {
    title: 'React Mentee/MovieDetails',
    component: MovieDetails,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const NoItemSelected = {
    args: {
        item: undefined
    }
};

export const MowgliSelected = {
    args: {
        item: {
            name: "Mowgli: Legend of the Jungle",
            releaseYear: "2018",
            runtime: "104 min",
            img: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
            genres: ['Comedy'],
            sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
        }
    }
}
