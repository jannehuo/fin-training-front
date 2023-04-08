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
    <>
      <label htmlFor="amount">How Many words?</label>
      <input
        id="amount"
        type="text"
        value={amount}
        onChange={handleAmountInput}
      />
      <button onClick={handleButtonClick}>Get Words!</button>
      <div>
        {words.map((word) => (
          <p key={word.word}>
            {word.word} {word.translation}
            <button onClick={() => checkTranslation(word.word)}>Check!</button>
          </p>
        ))}
      </div>
    </>
  );
};

export default GetWords;
