const HoverCounter = ({ count, handleInc }) => {
  return (
    <div>
      <h2 onMouseOver={handleInc}>Hovered {count} times</h2>
    </div>
  );
};
export default HoverCounter;
