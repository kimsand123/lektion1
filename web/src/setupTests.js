//import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

it ('Skidegodt',()=>{
    const {getByText} = render(<App />);
    expect(getByText('side')).toBeInTheDocument();
});
