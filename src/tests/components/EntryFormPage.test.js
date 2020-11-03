import React from 'react';
import { render, fireEvent, getByTestId, getByRole, screen } from "@testing-library/react";
import EntryFormPage from '../../components/EntryFormPage';

test('should render ExpenseFormPage correctly', () => {
    render(<EntryFormPage />);
    expect(screen).toMatchSnapshot();
});

test('should change error state with invalid input', () => {
    const onSubmitSpy = jest.fn();
 
    render(<EntryFormPage onSubmit={onSubmitSpy} />)

    fireEvent.submit(screen.getByRole("entryForm"));

    let errorValue = {};
    
    try{
        errorValue = screen.getByTestId('error', { hidden: true });
    } catch(e){
        console.log(e);
    }

    expect(errorValue.textContent).toBe("Error : Both title and content are required");
});

test('should submit with valid input and no error', () => {
    
    const title = "Testing 1";
    const content = "Testing 12";

    const onSubmitSpy = jest.fn();
    
    const { container } = render(<EntryFormPage onSubmit={onSubmitSpy} />)

    const titleValue = getByTestId(container, "title")
    const contentValue = getByTestId(container, "content")

    fireEvent.change(titleValue, { target : { value: title }});
    fireEvent.change(contentValue, { target : { value: content }});
    
    fireEvent.submit(screen.getByRole("entryForm"))

    let errorValue = {};

    try{

        errorValue = screen.getByTestId('error', { hidden: true });
    
    } catch(e){
        console.log(e);
    }
    expect(errorValue.textContent).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        title,
        description: content,
        createdAt: expect.any(String)
    });

});

/*

test('should change input state for title', () => {
    const value = 'Title 1';
    
    const wrapper = shallow(<EntryFormPage />);

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('title')).toBe(value); 
});


test('should change input state for title', () => {
    const value = 'Content 1';
    
    const wrapper = shallow(<EntryFormPage />);

    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('content')).toBe(value); 
});

*/