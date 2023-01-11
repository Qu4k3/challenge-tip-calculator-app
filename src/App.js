import "./App.scss";
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";

function App() {
  return (
    <section className="splitter">
      <div className="wrapper">
        <div className="inputs">
          <div className="inputs--block">
            <span className="block--title">Bill</span>
            <div>
              <BsCurrencyDollar className="block--icon" />
              <input
                type="number"
                name="bill-amount"
                id="bill-amount"
                placeholder="0"
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="inputs--block">
            <span className="block--title">Select tip %</span>
            <div className="block--wrapper-btns">
              <button>5%</button>
              <button>10%</button>
              <button className="selected">15%</button>
              <button>25%</button>
              <button>50%</button>
              <input
                type="number"
                name="custom-tip"
                id="custom-tip"
                placeholder="Custom"
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="inputs--block">
            <div>
              <span className="block--title">Number of People</span>
              <span className="block--alert">Can't be zero</span>
            </div>
            <div>
              <BsPersonFill className="block--icon"/>
              <input
                type="number"
                name="people-number"
                id="people-number"
                placeholder="0"
                min="0"
                step="any"
              />
            </div>
          </div>
        </div>
        <div className="outcome">
          <div className="outcome--block">
            <div>
              <span className="block--title">Tip Amount</span>
              <span className="block--subtitle">/ person</span>
            </div>
            <span className="block--amount">$4.27</span>
          </div>
          <div className="outcome--block">
            <div>
              <span className="block--title">Total</span>
              <span className="block--subtitle">/ person</span>
            </div>
            <span className="block--amount">$32.79</span>
          </div>
          <button className="pressable">Reset</button>
        </div>

      </div>
    </section>
  );
}

export default App;
