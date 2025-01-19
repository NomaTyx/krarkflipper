import { useState } from "react";

export const Page = () => {
  const [results, setResults] = useState();
  return (
    <div>
      <Controls setResults={setResults} />
      {results && <Results results={results} />}
    </div>
  );
};

export const Controls = ({ setResults }) => {
  const [myVariable, setMyVariable] = useState();
  const updateMyVariable = useCallback(({ target: { value } }) => setMyVariable(Number(value)), [setMyVariable]);
  const generateResults = useCallback(() => setResults(myVariable * 2), [setResults, myVariable]);
  return (
    <div>
      <input type="number" value={myVariable} onChange={updateMyVariable} />
      <button type="button" onClick={generateResults}>
        Double my variable
      </button>
    </div>
  );
};
