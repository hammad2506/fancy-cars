const defaultFiltersState = {
    text: '',
    sortBy: 'name'
};

//filters reducer which will allow to sorty by name/availibility AND also filter by search text
const filtersReducer = (state = defaultFiltersState, action) => {
    switch(action.type){
        case 'CHANGE_TEXT':
            return {...state, text: action.text};
        case 'CHANGE_SORT_BY':
            return {...state, sortBy: action.sortBy}    
        default:
            return state;    
    }
}
export default filtersReducer;