const ClickCounter = ({ count, handleInc }) => {
  return (
    <div>
      <button onClick={handleInc}>Clicked {count}</button>
    </div>
  );
};
export default ClickCounter;
