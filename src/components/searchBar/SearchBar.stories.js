import SearchBar from './SearchBar'

export default {
    title: 'React Mentee/SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    /* argTypes: {
        initialQuery: string,
        onSearchCallback: func,
    }, */
};

export const InitialQueryStarWars = {
    args: {
        initialQuery: 'Star Wars',
        onSearchCallback: (query) => {
            console.log(`Query: ${query}`)
        }
    }
};