window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelectorAll(".hero__select-header");
  const item = document.querySelectorAll(".hero__select-item");
  const inputRUB = document.querySelector("#input");
  const selectRate = document.querySelector("#select");
  const resultRate = document.querySelector("#result");
  const currencyInfo = document.querySelector(".hero__info");

  let rates = {};

  async function getCurrencies() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();
    const result = await data;

    rates.KZT = result.Valute.KZT;
    rates.USD = result.Valute.USD;
    rates.CHF = result.Valute.CHF;
    rates.USZ = result.Valute.UZS;

    currencyInfo.textContent = `Текущий курс: ${rates.USZ.Value.toFixed(
      2
    )} RUB = ${rates.USZ.Nominal} ${rates.USZ.CharCode}`;
  }

  getCurrencies();

  header.forEach((select) => {
    select.addEventListener("click", selectToggle);
  });

  item.forEach((select) => {
    select.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("active");
  }

  function selectChoose() {
    let value = this.innerHTML;
    let select = this.closest(".hero__select");
    let currentText = select.querySelector(".hero__select-current");
    currentText.innerHTML = value;
    select.classList.remove("active");

    SelectingTypeCurrency();
  }

  function SelectingTypeCurrency() {
    // срабатывает при выборе селекта
    let currency = selectRate.innerText;
    if (currency == "USD") {
      currencyInfo.textContent = `Текущий курс: ${rates.USD.Value.toFixed(
        2
      )} RUB = ${rates.USD.Nominal} ${rates.USD.CharCode}`;
    }

    if (currency == "KZT") {
      currencyInfo.textContent = `Текущий курс: ${rates.KZT.Value.toFixed(
        2
      )} RUB = ${rates.KZT.Nominal} ${rates.KZT.CharCode}`;
    }

    if (currency == "CHF") {
      currencyInfo.textContent = `Текущий курс: ${rates.CHF.Value.toFixed(
        2
      )} RUB = ${rates.CHF.Nominal} ${rates.CHF.CharCode}`;
    }

    if (currency == "USZ") {
      currencyInfo.textContent = `Текущий курс: ${rates.USZ.Value.toFixed(
        2
      )} RUB = ${rates.USZ.Nominal} ${rates.USZ.CharCode}`;
    }
    // если выбран USD
    if (
      currency === "USD" &&
      !isNaN(parseFloat(inputRUB.value)) &&
      isFinite(inputRUB.value) &&
      inputRUB.value !== ""
    ) {
      resultRate.value = (parseFloat(input.value) / rates.USD.Value).toFixed(2);
    }
    // если выбран KZT
    if (
      currency === "KZT" &&
      !isNaN(parseFloat(inputRUB.value)) &&
      isFinite(inputRUB.value) &&
      inputRUB.value !== ""
    ) {
      resultRate.value = (parseFloat(input.value) / rates.KZT.Value).toFixed(2);
    }
    // если выбран CHF
    if (
      currency === "CHF" &&
      !isNaN(parseFloat(inputRUB.value)) &&
      isFinite(inputRUB.value) &&
      inputRUB.value !== ""
    ) {
      resultRate.value = (parseFloat(input.value) / rates.CHF.Value).toFixed(2);
    }
    // если выбран USZ
    if (
      currency === "USZ" &&
      !isNaN(parseFloat(inputRUB.value)) &&
      isFinite(inputRUB.value) &&
      inputRUB.value !== ""
    ) {
      resultRate.value = (parseFloat(input.value) / rates.USZ.Value).toFixed(2);
    }
  }

  inputRUB.oninput = () => {
    let currency = selectRate.innerText;
    if (
      inputRUB.value !== "" &&
      !isNaN(parseFloat(inputRUB.value)) &&
      isFinite(inputRUB.value)
    ) {
      resultRate.value = (
        parseFloat(input.value) / rates[currency].Value
      ).toFixed(2);
    } else {
      resultRate.value = "";
    }
  };
});
