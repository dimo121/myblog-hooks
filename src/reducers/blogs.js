const blogsDefaultState = [];

export default (state = blogsDefaultState, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
            return [
                ...state,
                action.blog
            ];
        case 'CREATE_ENTRY':
            return state.map((blog) => {
                //finds corresponding blog and adds entry to array
                    if (blog.id == action.entry.blog_id){
                        return {
                            ...blog,
                            entries: [
                                ...blog.entries,
                                action.entry
                            ]
                        };
                    } else {
                        return blog;    
                    }      
            });
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id != action.id);
        case 'SET_BLOGS':
            return action.blogs;
        default:
            return state; 
    }
}