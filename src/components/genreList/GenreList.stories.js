import GenreList from './GenreList'

export default {
    title: 'React Mentee/GenreList',
    component: GenreList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const InitialState = {
    args: {
        items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
        itemSelected: 'ALL',
        onSelectCallback: (name) => {
            console.log(`Genre name: ${name}`)
        }
    }
};

export const ComedyGenreSelected = {
    args: {
        items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
        itemSelected: 'COMEDY',
        onSelectCallback: (name) => {
            console.log(`Genre name: ${name}`)
        }
    }
};