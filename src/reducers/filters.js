
const filtersDefaultState = {
    active_blog : 0 
};

//yet to implement search and filter

/*
export default (state = filtersDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE_BLOG':
            return {
                active_blog : action.blog_id
            };
        default:
            return state;
    }
}



export default (state = blogEntriesDefaultState, action) => {
    switch(action.type) {
        case 'CREATE_ENTRY':
            return [
                ...state,
                action.entry
            ];
        case 'DELETE_ENTRY':
            return state.filter((item) => item.entry_id !== action.id);
        
        default: 
            return state;
    }
}

*/