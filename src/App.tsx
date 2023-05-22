import 'primeflex/primeflex.css'; // flex
import 'primeicons/primeicons.css'; //icons
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/fluent-light/theme.css';
import { useReducer } from 'react';
import './App.css';
function reducer(state, action) {
switch(action) {
  case 'inc':
    return {
      ...state, counter: state.counter + 1
    }
    case 'alt':
      return {
        ...state, showText: !state.showText
      }
    default: 
    return state
}
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    showText: false
  })
  return (
    <>
      <div className='flex flex-column gap-5'>
        <span>{state.counter}</span>
        {state.showText && <span>Some tetxt</span>}
        <button onClick={() => {dispatch('inc'); dispatch('alt')}}>Toggle Text</button>
      </div>
    </>
  )
}

export default App
