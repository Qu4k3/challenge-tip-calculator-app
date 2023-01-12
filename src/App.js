import { useState, useEffect } from 'react';
import { BsCurrencyDollar, BsPersonFill } from "react-icons/bs";
import "./App.scss";

function App() {

  const [billAmount, setBillAmount] = useState("")
  const [tip, setTip] = useState("")
  const [customTip, setCustomTip] = useState("")
  const [peopleNumber, setPeopleNumber] = useState("")
  const [tipAmount, setTipAmount] = useState("0.00")
  const [total, setTotal] = useState("0.00")
  const [peopleNumberError, setPeopleNumberError] = useState(false)

  const tipValues = [5, 10, 15, 25, 50]

  const removeActiveClassBtnTip = () => {
    const allBtns = Array.from(
      document.getElementsByClassName('btn-tip')
    )
    
    allBtns.forEach(element => {
      element.classList.remove('active')
    });
  }

  const handleTipBtnClick = (event) => {
    removeActiveClassBtnTip()
    event.currentTarget.classList.add('active')
    setTip(event.target.value);    
    setCustomTip("")
  };

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleCustomTipChange = (event) => {
    removeActiveClassBtnTip()
    setTip(event.target.value);
    setCustomTip(event.target.value);
  };

  const handlePeopleNumberChange = (event) => {
    console.log(event.target.value)
    console.log(peopleNumberError)
    console.log(peopleNumber)
    if (event.target.value == 0) {
      setPeopleNumberError(true)
      setPeopleNumber(event.target.value)
    } else {
      setPeopleNumber(event.target.value)
      setPeopleNumberError(false)
    }
  };

  const handleReset = () => {
    setTipAmount("0.00")
    setTotal("0.00")
    setBillAmount("")
    setCustomTip("")
    setPeopleNumber("")
    setPeopleNumberError(false)
    setTip("")
  }

  useEffect(() => {
    if (billAmount && tip && peopleNumber && peopleNumber != 0) {
      let calcTipAmount = ((billAmount * tip) / 100) / peopleNumber
      let calcTotal = (billAmount / peopleNumber) + calcTipAmount

      setTipAmount(parseFloat(calcTipAmount).toFixed(2))
      setTotal(parseFloat(calcTotal).toFixed(2))
    }
  }, [billAmount, tip, peopleNumber]);

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
                value={billAmount}
                step="any"
                onChange={handleBillAmountChange} // event => setBillAmount(event.target.value)
              />
            </div>
          </div>

          <div className="inputs--block">
            <span className="block--title">Select tip %</span>
            <div className="block--wrapper-btns">
              {tipValues.map((el) => {
                return (
                  <button
                    key={el}
                    value={el}
                    className="btn-tip"
                    onClick={handleTipBtnClick}
                  >
                    {el}%
                  </button>
                )
              })}
              <input
                type="number"
                name="custom-tip"
                id="custom-tip"
                placeholder="Custom"
                max="100"
                min="0"
                value={customTip}
                step="any"
                onChange={handleCustomTipChange} // event => setCustomTip(event.target.value)
              />
            </div>
          </div>

          <div className="inputs--block">
            <div>
              <span className="block--title">Number of People</span>
              <span className={`block--alert ${peopleNumberError ? "active" : ""}`}>Can't be zero</span>
            </div>
            <div>
              <BsPersonFill className="block--icon" />
              <input
                type="number"
                name="people-number"
                id="people-number"
                placeholder="0"
                min="0"
                className={peopleNumberError ? "error" : ""}
                value={peopleNumber}
                step="1"
                onChange={handlePeopleNumberChange} // event => setPeopleNumber(event.target.value)
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
            <span className="block--amount">${tipAmount}</span>
          </div>
          <div className="outcome--block">
            <div>
              <span className="block--title">Total</span>
              <span className="block--subtitle">/ person</span>
            </div>
            <span className="block--amount">${total}</span>
          </div>
          <button
            className="pressable"
            onClick={handleReset}
          >Reset</button>
        </div>

      </div>
    </section>
  );
}

export default App;
