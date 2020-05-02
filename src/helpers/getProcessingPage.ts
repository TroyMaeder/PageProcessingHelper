export interface State {
  state: string
  errorCode?: string | null
}

interface Code {
  [key: string]: {
    title: string
    message: string | null
  }
}

const resolveAfterXseconds = (x: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, x)
  })
}

export async function getProcessingPage(processStates: State[]) {
  const codes: Code = {
    NO_STOCK: { title: 'Error page', message: 'No stock has been found' },
    INCORRECT_DETAILS: { title: 'Error page', message: 'Incorrect details have been entered' },
    SUCCESS: { title: 'Order complete', message: null },
    DEFAULT: { title: 'Error page', message: null },
  }

  for (let i = 0; i < processStates.length; i++) {
    const state = processStates[i].state
    if (state === 'success') {
      return codes.SUCCESS
    } else if (state === 'processing') {
      await resolveAfterXseconds(2000)
    } else {
      return codes[processStates[i].errorCode!] || codes.DEFAULT
    }
  }
}