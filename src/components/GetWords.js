import { useState, useEffect } from 'preact/hooks'

import Stats from './Stats'

const URL = process.env.API_URL

const Words = () => {
  const [amount, setAmount] = useState('')
  const [words, setWords] = useState([])
  const [checked, setChecked] = useState(0)

  const handleAmountInput = (e) => {
    setAmount(e.target.value)
  }

  const handleButtonClick = async () => {
    const url = `${URL}/words/${amount}`
    const response = await fetch(url)
    const jsonData = await response.json()
    const mappedData = jsonData.map((word) => {
      return {
        word,
        translation: '',
      }
    })
    setWords(mappedData)
  }

  const checkTranslation = async (word) => {
    const url = `${URL}/translate/${word}`
    const response = await fetch(url)
    const jsonData = await response.json()
    const updatedWordList = words.map((w) => {
      if (w.word === word) {
        return {
          word: w.word,
          translation: jsonData.result,
        }
      }
      return {
        ...w,
      }
    })
    const updatedAmount = checked + 1
    setChecked(updatedAmount)
    window.localStorage.setItem('wordsAmount', updatedAmount.toString())
    setWords(updatedWordList)
  }

  useEffect(() => {
    const wordsAmount = localStorage.getItem('wordsAmount')

    if (wordsAmount) {
      setChecked(parseInt(wordsAmount, 10))
    }
  }, [setChecked])

  const iconClass =
    words.length > 0 ? 'ion-ios-refresh-outline' : 'ion-android-arrow-forward'

  return (
    <div className='container'>
      <div className='webflow-style-input'>
        <input
          id='amount'
          className=''
          type='number'
          placeholder='How Many words?'
          value={amount}
          onChange={handleAmountInput}
        />
        <button onClick={handleButtonClick}>
          <i className={`icon ${iconClass}`} />
        </button>
      </div>
      <Stats amount={checked} />
      <div className='words-list'>
        {words.map((word) => (
          <div className='word-row' key={word.word}>
            <span>{word.word}</span>
            {word.translation.length > 0 && (
              <span className='word-translation'>{word.translation}</span>
            )}
            {word.translation.length === 0 && (
              <button
                className='word-check-button'
                onClick={() => checkTranslation(word.word)}
              >
                <i className='icon ion-checkmark' />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Words
