const successMock = [ { state: 'processing' }, { state: 'processing' }, { state: 'success' } ]
const undefinedMock = [ { state: 'processing' }, { state: 'error' } ]
const noStockMock = [ { state: 'processing' }, { state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' } ]
const incorrectDetailsMock = [ { state: 'processing' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' } ]
const nullMock = [ { state: 'processing' }, { state: 'error', errorCode: null } ]

const mocks = {
  successMock,
  undefinedMock,
  noStockMock,
  incorrectDetailsMock,
  nullMock
}

export default mocks