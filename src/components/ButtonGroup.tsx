interface ButtonGroupProps {
  onIncrement: () => void;
  onReset: () => void;
  isIncrementDisabled: boolean;
  isResetDisabled: boolean;
}

const ButtonGroup = ({
  onIncrement,
  onReset,
  isIncrementDisabled,
  isResetDisabled,
}: ButtonGroupProps) => {
  return (
    <div className="button-group">
      <button
        onClick={onIncrement}
        className="btn"
        disabled={isIncrementDisabled}
      >
        inc
      </button>
      <button onClick={onReset} className="btn" disabled={isResetDisabled}>
        reset
      </button>
    </div>
  );
};

export default ButtonGroup;
