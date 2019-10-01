import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import {render, fireEvent} from '@testing-library/react'
import {giraffeStore} from "./Stores/GiraffeStore";
import {observer} from "mobx-react";


it('Silly test', ()=>{
  expect (2+2).toBe(4);
})

it('Skidegodt', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Pressing tilføj giraf', async () => {
  const { getByText, findByText } = render(<HashRouter><App /></HashRouter>)
  // Click button
  //wait fireEvent.click(getByText('Tilføj giraf'));
  //while (giraffeStore.stat != "Done");
  //let size = App.giraffes.length;
  await sleep(5000);
  await fireEvent.click(getByText('Tilføj giraf'));
  let giraffeStore = window.store;
  console.log(giraffeStore.giraffes);

  let sizeBefore = giraffeStore.giraffes.length;
  await fireEvent.click(getByText('Tilføj giraf'));

  expect(giraffeStore.giraffes).toHaveLength(sizeBefore + 1);

  /*// Wait for page to update with query text
  const items = await findByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)*/
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



