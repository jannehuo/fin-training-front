import { useState } from 'preact/hooks';

const URL = process.env.API_URL;

const GetWords = () => {
  const [amount, setAmount] = useState('');
  const [words, setWords] = useState([]);

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };

  const handleButtonClick = async () => {
    const url = `${URL}/words/${amount}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const mappedData = jsonData.map((word) => {
      return {
        word,
        translation: '',
      };
    });
    setWords(mappedData);
  };

  const checkTranslation = async (word) => {
    const url = `${URL}/translate/${word}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const updatedWordList = words.map((w) => {
      if (w.word === word) {
        return {
          word: w.word,
          translation: jsonData.result,
        };
      }
      return {
        ...w,
      };
    });
    setWords(updatedWordList);
  };

  return (
    <div className="container">
      <div className="webflow-style-input">
        <input
          id="amount"
          className=""
          type="text"
          placeholder="How Many words?"
          value={amount}
          onChange={handleAmountInput}
        />
        <button onClick={handleButtonClick}>
          <i className="icon ion-android-arrow-forward" />
        </button>
      </div>
      <div className="words-list">
        {words.map((word) => (
          <div className="word-row" key={word.word}>
            {word.word} {word.translation}
            <button
              className="word-check-button"
              onClick={() => checkTranslation(word.word)}
            >
              <i className="icon ion-checkmark" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetWords;
