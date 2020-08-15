import React from 'react';
import { render, waitForElement, fireEvent,screen} from '@testing-library/react';
import IntersectionObserver from 'intersection-observer'
import App from '../App';

test('home work as expect ', async() => {
  const {container} =render(<App/>)
  const getList = await waitForElement(()=>container.querySelector(".ListOfGifs"))
  expect(getList).toBeVisible()
});
test('Testing the form',async()=>{
  render(<App/>)
  const textSearch = await screen.findByRole("textbox")
  const button = await screen.findByRole("button")

  fireEvent.change(textSearch, {target: {value:"Matrix"}} )
  fireEvent.click(button)
  
  const title = await screen.findByText("Matrix")
  expect(title).toBeVisible()
})