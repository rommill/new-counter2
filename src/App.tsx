import { useState } from "react";
import SettingsForm from "./components/SettingsForm";
import CounterDisplay from "./components/CounterDisplay";
import ButtonGroup from "./components/ButtonGroup";
import { useCounterStorage } from "./hooks/useCounterStorage";

const App = () => {
  const { startValue, maxValue, count, setValues, increment, reset } =
    useCounterStorage();

  const [hasError, setHasError] = useState(false);
  const [isSet, setIsSet] = useState(true); // Считаем, что значения уже были установлены

  return (
    <div className="container">
      <div className="card settings-card">
        <SettingsForm
          startValue={startValue}
          maxValue={maxValue}
          onSet={setValues}
          setErrorState={setHasError}
          setInitialSet={setIsSet}
        />
      </div>

      <div className="card counter-card">
        <CounterDisplay
          value={count}
          maxValue={maxValue}
          hasError={hasError}
          isSet={isSet}
        />
        <ButtonGroup
          onIncrement={increment}
          onReset={reset}
          isIncrementDisabled={count >= maxValue || hasError || !isSet}
          isResetDisabled={count === startValue || hasError || !isSet}
        />
      </div>
    </div>
  );
};

export default App;
