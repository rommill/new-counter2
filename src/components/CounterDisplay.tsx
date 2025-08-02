interface CounterDisplayProps {
  value: number;
  maxValue: number;
  hasError: boolean;
  isSet: boolean;
}

const CounterDisplay = ({
  value,
  maxValue,
  hasError,
  isSet,
}: CounterDisplayProps) => {
  let text = value.toString();
  let className = "counter-display";

  if (hasError) {
    text = "incorrect value";
    className += " error";
  } else if (!isSet) {
    text = "enter values and press set";
  } else if (value === maxValue) {
    className += " max";
  }

  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};

export default CounterDisplay;
