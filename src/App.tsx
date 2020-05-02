import React from 'react'
import './app.css'
import { getProcessingPage } from '../src/helpers/getProcessingPage'
import mocks from './mocks/getProcessingPageMocks'

const App = () => {
  getProcessingPage(mocks.successMock)
    .then(result => console.log('succes value', result))

  getProcessingPage(mocks.incorrectDetailsMock)
    .then(result => console.log('incorrect details value=', result))

  getProcessingPage(mocks.noStockMock)
    .then(result => console.log('no stock value=', result))

  getProcessingPage(mocks.nullMock)
    .then(result => console.log('null value=', result))

  getProcessingPage(mocks.undefinedMock)
    .then(result => console.log('undefined value=', result))

  return (
    <section className="app">
      <p className="text">
        We can get our <code>getProcessingPage</code> function output on the console
      </p>
    </section>
  )
}

export default App
