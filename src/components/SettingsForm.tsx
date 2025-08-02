import { useState, useEffect } from "react";

interface SettingsFormProps {
  startValue: number;
  maxValue: number;
  onSet: (start: number, max: number) => void;
  setErrorState: (error: boolean) => void;
  setInitialSet: (isSet: boolean) => void;
}

const SettingsForm = ({
  startValue,
  maxValue,
  onSet,
  setErrorState,
  setInitialSet,
}: SettingsFormProps) => {
  const [start, setStart] = useState(startValue);
  const [max, setMax] = useState(maxValue);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    const error = start < 0 || max <= start || isNaN(start) || isNaN(max);
    setIsInvalid(error);
    setErrorState(error);
    setInitialSet(false);
  }, [start, max]);

  const handleSetClick = () => {
    onSet(start, max);
    setInitialSet(true);
  };

  return (
    <>
      <div className="input-group">
        <label>max value:</label>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(+e.target.value)}
          className={max <= start || max < 0 ? "error" : ""}
        />
      </div>
      <div className="input-group">
        <label>start value:</label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(+e.target.value)}
          className={start < 0 || start >= max ? "error" : ""}
        />
      </div>
      <button onClick={handleSetClick} className="btn" disabled={isInvalid}>
        set
      </button>
    </>
  );
};

export default SettingsForm;
