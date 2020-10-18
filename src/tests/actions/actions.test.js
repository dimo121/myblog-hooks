import { createBlog, deleteBlog } from '../../actions/blogs';
import { createEntry, deleteEntry } from '../../actions/entries';
import blogs from '../fixtures/blogs';

//First testing blog actions

test('should create blog with input data', () => {
    const inputData = {
        title : 'testing1',
        content : 'testing2',
        createdAt : 0
    };
    const result = createBlog(inputData);
    expect(result).toEqual({
        type: 'CREATE_BLOG',
        blog: {
            ...inputData,
            id: expect.any(String),
            entries: []
        }
    })
})


test('should add expense with default data.', () => {
    const result = createBlog();
    expect(result).toEqual({
        type: 'CREATE_BLOG',
        blog: {
            title: '',
            content: '',
            createdAt: 0,
            id: expect.any(String),
            entries: []
        }
    })
})

test('should setup delete action object', () => {
    const action = deleteBlog(2);
    expect(action).toEqual({
        type: 'DELETE_BLOG',
        id: 2
    });
})




//Testing entry actions
/*
test('should setup add entry action with values', () => {
    const inputData = {
        blog_id: 1,
        createdAt : 123,
        title : 'Entry 1',
        content: 'Content for entry 1'
    };
    const action = createEntry(inputData);
    expect(action).toEqual({
        type: 'CREATE_ENTRY',
        entry: {
            ...inputData,
            id: expect.any(String)
        }
    });
})


test('should setup add entry action with default values', () => {
    const action = createEntry();
    expect(action).toEqual({
        type: 'CREATE_ENTRY',
        entry: {
            title: '',
            content: '',
            createdAt: 0,
            blog_id: 0,
            id: expect.any(String)
        }
    });
})

test('should setup delete action object for entries', () => {
    const action = deleteEntry(2);
    expect(action).toEqual({
        type: 'DELETE_ENTRY',
        id: 2
    });
})
*/