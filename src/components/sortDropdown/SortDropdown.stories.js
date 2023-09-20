import SortDropdown from './SortDropdown'

export default {
    title: 'React Mentee/SortDropdown',
    component: SortDropdown,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const ReleaseDateSelected = {
    args: {
        currentSelection: 'releaseDate',
        onSelectionChange: (item) => {
            console.log(`Option selected: ${item}`)
        }
    }
};

export const TitleSelected = {
    args: {
        currentSelection: 'title',
        onSelectionChange: (item) => {
            console.log(`Option selected: ${item}`)
        }
    }
};