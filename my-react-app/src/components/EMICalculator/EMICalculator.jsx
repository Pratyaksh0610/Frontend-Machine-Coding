import { useState } from "react";
import styles from "./EMICalculator.module.css";

export default function EMICalculator() {
  const [cost, setcost] = useState(10000);
  const [downPayment, setDownPayment] = useState(0);
  //   const [loanAmount,setLoanAmount] = useState(0);

  function handleDownPaymentChange(e) {
    let amount = Number(e.target.value);
    setDownPayment(amount);
  }
  function getEMIAmount(number) {
    let amount = Number(number);
    amount = cost - number;
    return amount;
  }
  return (
    <>
      <h1>EMI CALCULATOR</h1>
      <div>
        <label>
          <p>Total Cost of Asset</p>
          <input
            type="number"
            placeholder="0"
            name="totalCost"
            value={cost}
            onChange={(e) => setcost(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <p>Total Down Payment</p>
          <input
            type="range"
            min={0}
            max={cost}
            placeholder="Down payment %"
            name="downPaymentInput"
            value={downPayment}
            onChange={(e) => handleDownPaymentChange(e)}
          />
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span>0%</span>
          <b>{downPayment}</b>
          <span>100%</span>
        </div>
      </div>
      <div>
        <label>
          <p>Total Loan</p>
          <input
            type="range"
            min={getEMIAmount(cost)}
            max={getEMIAmount(0)}
            placeholder="Loan payment"
            name="loanAmountInput"
            value={getEMIAmount(downPayment)}
            onChange={(e) => setDownPayment(cost-e.target.value)}
          />
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span>0%</span>
          <b>{getEMIAmount(downPayment)}</b>
          <span>100%</span>
        </div>
      </div>
      <div></div>
    </>
  );
}
