
const filtersDefaultState = {
    currentUser : {
        id: '',
        name: ''
    } 
};

//yet to implement search and filter

export default (state = filtersDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_ACTIVE_USER':
            return {
                currentUser : action.user
            };
        case 'DELETE_USER':
            return {
                currentUser : {}
            };
        default:
            return state;
    }
}
