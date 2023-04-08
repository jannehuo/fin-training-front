import { useEffect } from 'preact/hooks'

import Words from './GetWords'

const App = () => {
  useEffect(() => {
    const wordsAmount = window.localStorage.getItem('wordsAmount')

    if (!wordsAmount) {
      window.localStorage.setItem('wordsAmount', '0')
    }
  })

  return (
    <div id='app'>
      <Words />
    </div>
  )
}

export default App
