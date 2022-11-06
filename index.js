const zero = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "0";
};
const one = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "1";
};
const two = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "2";
};
const three = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "3";
};
const four = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "4";
};
const five = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "5";
};
const six = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "6";
};
const seven = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "7";
};
const eight = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "8";
};
const nine = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "9";
};
//operators

const plus = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "+";
};
const minus = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "-";
};
const multiply = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "*";
};
const division = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "/";
};
const cl = () => {
  document.getElementsByClassName("display")[0].innerText = "";
};

const mod = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + "%";
};
const del = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp.slice(
    0,
    temp.length - 1
  );
};
const point = () => {
  const temp = document.getElementsByClassName("display")[0].textContent;
  document.getElementsByClassName("display")[0].innerText = temp + ".";
};

let ans = "";
const equal = () => {
  document.getElementsByClassName("temp-display")[0].innerText = ans;
  const temp = document.getElementsByClassName("display")[0].textContent;
  ans = eval(temp);
  document.getElementsByClassName("display")[0].innerText = ans;
};

// theme @

const changeTheme = () => {
  const numbers = document.getElementsByClassName("numbers");
  for (const element of numbers) {
    element.classList.toggle("theme-green");
  }

  const operators = document.getElementsByClassName("operators");
  for (const element of operators) {
    element.classList.toggle("theme-white");
  }
};
