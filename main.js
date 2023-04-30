paymentID = 237210154;
billID = 9229799804123;

let paymentId = paymentID.toString().split("").map(Number);
let billId = billID.toString().split("").map(Number);
let paymentIdArray = paymentId.slice(0, paymentId.length - 2);
let bothId = paymentId.slice(0, paymentId.length - 1).concat(paymentId);
let firstCheckDigit = Number(paymentId.slice(paymentId.length - 2, paymentId.length - 1));
let secondCheckDigit = Number(paymentId.slice(paymentId.length - 1, paymentId.length));

const BaseElevenFormula = (billArray) => {
  let weightNumber = 2;
  let sum = 0;
  let finalFirstcheckDigit;
  for (let i = billArray.length - 1; i >= 0; i--) {
    sum += billArray[i] * weightNumber;
    weightNumber++;
    if (weightNumber === 8) {
      weightNumber = 2;
    }
  }
  if (sum % 11 === 1 || sum % 11 === 0) {
    finalFirstcheckDigit = 0;
  } else {
    finalFirstcheckDigit = 11 - (sum % 11);
  }
  return finalFirstcheckDigit;
};

console.log(BaseElevenFormula(paymentIdArray));
