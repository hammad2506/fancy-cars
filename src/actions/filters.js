export const changeFilterText = (text='') => (
    {
        type: 'CHANGE_TEXT',
        text
    }
);

export const changeFiltersortBy = (sortBy='name') => (
    {
        type: 'CHANGE_SORT_BY',
        sortBy
    }
);