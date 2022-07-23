import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter
        render={(count, handleInc) => (
          <ClickCounter count={count} handleInc={handleInc} />
        )}
      />
      <Counter
        render={(count, handleInc) => (
          <HoverCounter count={count} handleInc={handleInc} />
        )}
      />
    </div>
  );
}
