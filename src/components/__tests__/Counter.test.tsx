import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './../Counter/Counter';

test('Testing counter component', ()=>{
    const { getByTestId } = render( <Counter /> );
    const headerEl = getByTestId('header');
    expect(headerEl.textContent).toBe('My Conter');
})

test("testing initial counter state >> 0", ()=>{
    const { getByTestId } = render( <Counter /> );
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe('0')
})

test('testing input initial value 1', ()=>{
    const { getByTestId } = render( <Counter/>)
    const inputEl: any = getByTestId('inputid')
    expect(inputEl.value).toBe('1')
})

test('test subtract btn', ()=>{
    const { getByTestId } = render( <Counter/>);
    const btnEl = getByTestId('subtract-btn');
    expect(btnEl.textContent).toBe('-')
})

test('test add btn', ()=>{
    const { getByTestId } = render( <Counter/>);
    const btnEl = getByTestId('add-btn');
    expect(btnEl.textContent).toBe('+')
})

test('test change input value', ()=>{
    const { getByTestId } = render( <Counter/> )
    const inputEl: any = getByTestId('inputid')

    fireEvent.change(inputEl, {
        target: {
            value: '5'
        }
    })

    expect(inputEl.value).toBe('5')
})

// https://www.youtube.com/watch?v=GLSSRtnNY0g&t=1649s 