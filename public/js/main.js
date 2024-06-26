/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nconst updateTime = __webpack_require__(/*! ./module/updateTime.js */ \"./src/js/module/updateTime.js\");\nconst ws = __webpack_require__(/*! ./module/ws.js */ \"./src/js/module/ws.js\");\nconst burgerMenu = __webpack_require__(/*! ./module/burgerMenu.js */ \"./src/js/module/burgerMenu.js\");\nconst breadCrumbSlider = __webpack_require__(/*! ./module/breadCrumbSlider.js */ \"./src/js/module/breadCrumbSlider.js\");\nconst menuSlider = __webpack_require__(/*! ./module/menuSlider.js */ \"./src/js/module/menuSlider.js\");\nconst animateArrow =__webpack_require__(/*! ./module/animateArrow.js */ \"./src/js/module/animateArrow.js\");\nconst activeLinkMenus =__webpack_require__(/*! ./module/activeLinkMenus.js */ \"./src/js/module/activeLinkMenus.js\");\nconst pairCoinSlider =__webpack_require__(/*! ./module/pairCoinSlider.js */ \"./src/js/module/pairCoinSlider.js\");\nconst mainTable = __webpack_require__(/*! ./module/mainTable.js */ \"./src/js/module/mainTable.js\");\nconst asideTable = __webpack_require__(/*! ./module/asideTable.js */ \"./src/js/module/asideTable.js\");\nconst mobilePhoneTableSearch = __webpack_require__(/*! ./module/mobilePhoneTableSearch.js */ \"./src/js/module/mobilePhoneTableSearch.js\");\nconst fixIOSelectAtr = __webpack_require__(/*! ./module/fixIOSelectAtr.js */ \"./src/js/module/fixIOSelectAtr.js\");\nconst graph = __webpack_require__(/*! ./module/graph.js */ \"./src/js/module/graph.js\");\n\n//# sourceURL=webpack://myproject/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/activeLinkMenus.js":
/*!******************************************!*\
  !*** ./src/js/module/activeLinkMenus.js ***!
  \******************************************/
/***/ (function() {

eval("const quotesListButtons = document.querySelector(\".quotes__list\");\r\nconst pairCatalog = document.querySelector(\".pair__catalog\");\r\nconst menuListButtons = document.querySelector(\".menu__list\");\r\n\r\n\r\n\r\n//active menu\r\nmenuListButtons.addEventListener(\"click\", (e) => {\r\n  const target = e.target.closest(\".menu__btn\");\r\n  if (target && !target.classList.contains(\"menu__btn-active\")) {\r\n    const id = target.getAttribute(\"data-tab\");\r\n    menuListButtons\r\n      .querySelector(\".menu__btn.menu__btn-active\")\r\n      .classList.remove(\"menu__btn-active\");\r\n    target.classList.add(\"menu__btn-active\");\r\n  }\r\n});\r\n\r\n//active menu quotes\r\nquotesListButtons.addEventListener(\"click\", (e) => {\r\n  const target = e.target.closest(\".quotes__btn\");\r\n  if (target && !target.classList.contains(\"active-btn\")) {\r\n    const id = target.getAttribute(\"data-tab\");\r\n    quotesListButtons\r\n      .querySelector(\".quotes__btn.active-btn\")\r\n      .classList.remove(\"active-btn\");\r\n    target.classList.add(\"active-btn\");\r\n\r\n    pairCatalog.forEach((list) => {\r\n      if (list.classList.contains(id)) {\r\n        list.style.display = \"flex\";\r\n        list.classList.add(\"show-pair-list\");\r\n      } else {\r\n        list.style.display = \"none\";\r\n      }\r\n    });\r\n  }\r\n});\n\n//# sourceURL=webpack://myproject/./src/js/module/activeLinkMenus.js?");

/***/ }),

/***/ "./src/js/module/animateArrow.js":
/*!***************************************!*\
  !*** ./src/js/module/animateArrow.js ***!
  \***************************************/
/***/ (function() {

eval("function isElementInViewport(element) {\r\n  const rect = element.getBoundingClientRect();\r\n  const windowHeight =\r\n    window.innerHeight || document.documentElement.clientHeight;\r\n  return rect.top >= 0 && rect.bottom <= windowHeight;\r\n}\r\n\r\nfunction handleAnimations() {\r\n  const changeWeeks = document.querySelectorAll(\".info__change-week\");\r\n  const changeMonth = document.querySelectorAll(\".info__change-month\");\r\n\r\n  changeWeeks.forEach((week) => {\r\n    if (isElementInViewport(week)) {\r\n      week.classList.add(\"animated\");\r\n      week.querySelector(\".info__change-line-green\").classList.add(\"animated\");\r\n    }\r\n  });\r\n\r\n  changeMonth.forEach((month) => {\r\n    if (isElementInViewport(month)) {\r\n      month.classList.add(\"animated\");\r\n      month.querySelector(\".info__change-line-red\").classList.add(\"animated\");\r\n    }\r\n  });\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", handleAnimations);\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/animateArrow.js?");

/***/ }),

/***/ "./src/js/module/asideTable.js":
/*!*************************************!*\
  !*** ./src/js/module/asideTable.js ***!
  \*************************************/
/***/ (function() {

eval("const dataAsideTable = [\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Sell\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Sell\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Sell\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Sell\" },\r\n  { pair: \"BTC/USD\", price: \"0.6087\", signal: \"Strong Buy\" },\r\n];\r\n\r\nconst tableBody = document.getElementById(\"table-body\");\r\n\r\ndataAsideTable.forEach((item) => {\r\n  const row = document.createElement(\"tr\");\r\n\r\n  const pairCell = document.createElement(\"td\");\r\n  pairCell.textContent = item.pair;\r\n  pairCell.className = \"aside-table__pair\";\r\n  row.appendChild(pairCell);\r\n\r\n  const priceCell = document.createElement(\"td\");\r\n  priceCell.textContent = item.price;\r\n  priceCell.className = \"aside-table__price\";\r\n  row.appendChild(priceCell);\r\n\r\n  const signalCell = document.createElement(\"td\");\r\n  signalCell.textContent = item.signal;\r\n  signalCell.className = item.signal.replace(\" \", \"-\").toLowerCase();\r\n  row.appendChild(signalCell);\r\n\r\n  tableBody.appendChild(row);\r\n});\n\n//# sourceURL=webpack://myproject/./src/js/module/asideTable.js?");

/***/ }),

/***/ "./src/js/module/breadCrumbSlider.js":
/*!*******************************************!*\
  !*** ./src/js/module/breadCrumbSlider.js ***!
  \*******************************************/
/***/ (function() {

eval("function breadCrumbSlider() {\r\n  const splide = new Splide(\"#breadcrumb-slider\", {\r\n    pagination: false,\r\n    type: \"slide\",\r\n    drag: \"free\",\r\n    rewind: true,\r\n    rewindByDrag: true,\r\n    arrows: false,\r\n    start  : 4,\r\n    autoWidth: true,\r\n  }).mount();\r\n}\r\nbreadCrumbSlider();\n\n//# sourceURL=webpack://myproject/./src/js/module/breadCrumbSlider.js?");

/***/ }),

/***/ "./src/js/module/burgerMenu.js":
/*!*************************************!*\
  !*** ./src/js/module/burgerMenu.js ***!
  \*************************************/
/***/ (function() {

eval("const menu = document.querySelector(\".burger__btn, burger__btn--off\");\r\nconst mobileNavigation = document.querySelector(\".navigation-mobile\");\r\nconst checkbox = document.querySelector(\".burger--checkbox\");\r\nconst links = document.querySelectorAll(\".navigation__link\");\r\nconst main = document.querySelector(\".main\");\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n  mobileNavigation.classList.toggle(\"navigation-mobile--active\");\r\n});\r\n\r\nmain.addEventListener(\"click\", () => {\r\n  if (mobileNavigation.classList.contains(\"navigation-mobile--active\")) {\r\n    mobileNavigation.classList.toggle(\"navigation-mobile--active\");\r\n    checkbox.checked = false;\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (evt) => {\r\n  if (evt.key === \"Escape\") {\r\n    mobileNavigation.classList.remove(\"navigation-mobile--active\");\r\n    checkbox.checked = false;\r\n  }\r\n});\r\n\r\nlinks.forEach((item) =>\r\n  item.addEventListener(\"click\", () => {\r\n    if (mobileNavigation.classList.contains(\"navigation-mobile--active\")) {\r\n      mobileNavigation.classList.toggle(\"navigation-mobile--active\");\r\n      checkbox.checked = false;\r\n    }\r\n  })\r\n);\n\n//# sourceURL=webpack://myproject/./src/js/module/burgerMenu.js?");

/***/ }),

/***/ "./src/js/module/fixIOSelectAtr.js":
/*!*****************************************!*\
  !*** ./src/js/module/fixIOSelectAtr.js ***!
  \*****************************************/
/***/ (function() {

eval("const inputElement = document.querySelector('input[list=\"languages\"]');\r\nif (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {\r\n  inputElement.removeAttribute(\"list\");\r\n}\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/fixIOSelectAtr.js?");

/***/ }),

/***/ "./src/js/module/graph.js":
/*!********************************!*\
  !*** ./src/js/module/graph.js ***!
  \********************************/
/***/ (function() {

eval("const ctx = document.getElementById('myChart').getContext('2d');\r\n\r\nconst data = {\r\n    labels: ['12/23', '01/24', '02/24', '03/24', '04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],\r\n    datasets: [\r\n        {\r\n            label: 'HISTORICAL',\r\n            data: [20000, 25000, 22000, 23000, 35000, 37000, 48000, null, null, null, null, null, null],\r\n            borderColor: 'rgba(54, 162, 235, 1)',\r\n            backgroundColor: 'rgba(54, 162, 235, 0.2)',\r\n            fill: true,\r\n            borderWidth: 2\r\n        },\r\n        {\r\n            label: 'FORECASTED',\r\n            data: [null, null, null, null, null, null, 48000, 51000, 53000, 52000, 51000, 55000, 58000],\r\n            borderColor: 'rgba(153, 102, 255, 1)',\r\n            borderDash: [5, 5],\r\n            fill: false,\r\n            borderWidth: 2\r\n        }\r\n    ]\r\n};\r\n\r\nconst options = {\r\n    responsive: true,\r\n    scales: {\r\n        x: {\r\n            type: 'category',\r\n            title: {\r\n                display: true,\r\n                text: 'Date'\r\n            }\r\n        },\r\n        y: {\r\n            title: {\r\n                display: true,\r\n                text: 'Value'\r\n            }\r\n        }\r\n    },\r\n    plugins: {\r\n        legend: {\r\n            display: true,\r\n            position: 'top',\r\n            align: 'end',\r\n            labels: {\r\n                usePointStyle: false, \r\n                boxWidth: 20, \r\n                padding: 20, \r\n                generateLabels: (chart) => {\r\n                    const { data } = chart;\r\n                    if (data.datasets.length) {\r\n                        return data.datasets.map((dataset, i) => {\r\n                            const meta = chart.getDatasetMeta(i);\r\n                            const style = meta.controller.getStyle(i);\r\n                            return {\r\n                                text: dataset.label,\r\n                                fillStyle: style.borderColor,\r\n                                strokeStyle: style.borderColor,\r\n                                lineWidth: style.borderWidth,\r\n                                hidden: !chart.isDatasetVisible(i),\r\n                                index: i,\r\n                                pointStyle: 'rect'\r\n                            };\r\n                        });\r\n                    }\r\n                    return [];\r\n                }\r\n            }\r\n        },\r\n        tooltip: {\r\n            mode: 'index',\r\n            intersect: false,\r\n        },\r\n        annotation: {\r\n            annotations: {\r\n                line1: {\r\n                    type: 'line',\r\n                    xMin: '06/24',\r\n                    xMax: '06/24',\r\n                    borderColor: 'rgba(0,0,0,0.5)',\r\n                    borderWidth: 2,\r\n                    borderDash: [6, 6],\r\n                    draggable: true\r\n                }\r\n            }\r\n        }\r\n    },\r\n    interaction: {\r\n        mode: 'index',\r\n        intersect: false,\r\n    }\r\n};\r\n\r\nconst myChart = new Chart(ctx, {\r\n    type: 'line',\r\n    data: data,\r\n    options: options\r\n});\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/graph.js?");

/***/ }),

/***/ "./src/js/module/mainTable.js":
/*!************************************!*\
  !*** ./src/js/module/mainTable.js ***!
  \************************************/
/***/ (function() {

eval("const dataMainTable = [\r\n  {\r\n    month: \"June 2024\",\r\n    minPrice: \"$59,944.84\",\r\n    maxPrice: \"$73,265.92\",\r\n    avgPrice: \"$66,605.38\",\r\n  },\r\n  {\r\n    month: \"July 2024\",\r\n    minPrice: \"$60,244.57\",\r\n    maxPrice: \"$73,632.25\",\r\n    avgPrice: \"$66,938.41\",\r\n  },\r\n  {\r\n    month: \"August 2024\",\r\n    minPrice: \"$60,545.79\",\r\n    maxPrice: \"$74,000.41\",\r\n    avgPrice: \"$67,273.1\",\r\n  },\r\n  {\r\n    month: \"September 2024\",\r\n    minPrice: \"$60,848.52\",\r\n    maxPrice: \"$74,370.42\",\r\n    avgPrice: \"$67,609.47\",\r\n  },\r\n  {\r\n    month: \"October 2024\",\r\n    minPrice: \"$61,152.77\",\r\n    maxPrice: \"$74,742.27\",\r\n    avgPrice: \"$67,947.52\",\r\n  },\r\n  {\r\n    month: \"November 2024\",\r\n    minPrice: \"$61,458.53\",\r\n    maxPrice: \"$75,115.99\",\r\n    avgPrice: \"$68,287.26\",\r\n  },\r\n  {\r\n    month: \"December 2024\",\r\n    minPrice: \"$61,765.83\",\r\n    maxPrice: \"$75,491.57\",\r\n    avgPrice: \"$68,628.7\",\r\n  },\r\n  {\r\n    month: \"January 2025\",\r\n    minPrice: \"$62,074.66\",\r\n    maxPrice: \"$75,869.02\",\r\n    avgPrice: \"$66,605.38\",\r\n  },\r\n  {\r\n    month: \"February 2025\",\r\n    minPrice: \"$62,385.03\",\r\n    maxPrice: \"$73,632.25\",\r\n    avgPrice: \"$66,938.41\",\r\n  },\r\n  {\r\n    month: \"March 2025\",\r\n    minPrice: \"$62,696.95\",\r\n    maxPrice: \"$74,000.41\",\r\n    avgPrice: \"$67,273.1\",\r\n  },\r\n  {\r\n    month: \"April 2025\",\r\n    minPrice: \"$63,010.44\",\r\n    maxPrice: \"$74,370.42\",\r\n    avgPrice: \"$67,609.47\",\r\n  },\r\n  {\r\n    month: \"May 2025\",\r\n    minPrice: \"$63,325.49\",\r\n    maxPrice: \"$74,742.27\",\r\n    avgPrice: \"$67,947.52\",\r\n  },\r\n];\r\nconst tableWrap = document.getElementById(\"prediction__table-wrap\");\r\nconst table = document.createElement(\"table\");\r\ntable.classList.add(\"price-table\");\r\nconst thead = document.createElement(\"thead\");\r\nconst headerRow = document.createElement(\"tr\");\r\nconst headers = [\"Month\", \"Minimum Price\", \"Maximum Price\", \"Average Price\"];\r\n\r\nheaders.forEach((headerText) => {\r\n  const th = document.createElement(\"th\");\r\n  th.textContent = headerText;\r\n  headerRow.appendChild(th);\r\n});\r\n\r\nthead.appendChild(headerRow);\r\ntable.appendChild(thead);\r\nconst tbody = document.createElement(\"tbody\");\r\n\r\ndataMainTable.forEach((item) => {\r\n  const row = document.createElement(\"tr\");\r\n  const keys = Object.keys(item);\r\n\r\n  keys.forEach((key) => {\r\n    const cell = document.createElement(\"td\");\r\n    cell.textContent = item[key];\r\n    row.appendChild(cell);\r\n  });\r\n\r\n  tbody.appendChild(row);\r\n});\r\ntable.appendChild(tbody);\r\ntableWrap.appendChild(table);\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/mainTable.js?");

/***/ }),

/***/ "./src/js/module/menuSlider.js":
/*!*************************************!*\
  !*** ./src/js/module/menuSlider.js ***!
  \*************************************/
/***/ (function() {

eval("function menuSlider() {\r\n  const splide = new Splide(\"#menu-slider\", {\r\n    pagination: false,\r\n    type: \"slide\",\r\n    drag: \"free\",\r\n    rewind: true,\r\n    rewindByDrag: true,\r\n    arrows: false,\r\n    start  : 3,\r\n    autoWidth: true,\r\n  }).mount();\r\n}\r\nmenuSlider();\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/menuSlider.js?");

/***/ }),

/***/ "./src/js/module/mobilePhoneTableSearch.js":
/*!*************************************************!*\
  !*** ./src/js/module/mobilePhoneTableSearch.js ***!
  \*************************************************/
/***/ (function() {

eval("const dataMobileTable = [\r\n  { month: \"June 2024\", minPrice: \"$59,944.84\", maxPrice: \"$73,265.92\", avgPrice: \"$66,605.38\" },\r\n  { month: \"July 2024\", minPrice: \"$60,244.57\", maxPrice: \"$73,632.25\", avgPrice: \"$66,938.41\" },\r\n  { month: \"August 2024\", minPrice: \"$60,545.79\", maxPrice: \"$74,000.41\", avgPrice: \"$67,273.1\" },\r\n  { month: \"September 2024\", minPrice: \"$60,848.52\", maxPrice: \"$74,370.42\", avgPrice: \"$67,609.47\" },\r\n  { month: \"October 2024\", minPrice: \"$61,152.77\", maxPrice: \"$74,742.27\", avgPrice: \"$67,947.52\" },\r\n  { month: \"November 2024\", minPrice: \"$61,458.53\", maxPrice: \"$75,115.99\", avgPrice: \"$68,287.26\" },\r\n  { month: \"December 2024\", minPrice: \"$61,765.83\", maxPrice: \"$75,491.57\", avgPrice: \"$68,628.7\" },\r\n  { month: \"January 2025\", minPrice: \"$62,074.66\", maxPrice: \"$75,869.02\", avgPrice: \"$66,605.38\" },\r\n  { month: \"February 2025\", minPrice: \"$62,385.03\", maxPrice: \"$73,632.25\", avgPrice: \"$66,938.41\" },\r\n  { month: \"March 2025\", minPrice: \"$62,696.95\", maxPrice: \"$74,000.41\", avgPrice: \"$67,273.1\" },\r\n  { month: \"April 2025\", minPrice: \"$63,010.44\", maxPrice: \"$74,370.42\", avgPrice: \"$67,609.47\" },\r\n  { month: \"May 2025\", minPrice: \"$63,325.49\", maxPrice: \"$74,742.27\", avgPrice: \"$67,947.52\" },\r\n];\r\n\r\nconst monthSelect = document.getElementById('monthSelect');\r\nconst minPrice = document.getElementById('minPrice');\r\nconst maxPrice = document.getElementById('maxPrice');\r\nconst avgPrice = document.getElementById('avgPrice');\r\n\r\ndataMobileTable.forEach(item => {\r\n  const option = document.createElement('option');\r\n  option.value = item.month;\r\n  option.textContent = item.month;\r\n  monthSelect.appendChild(option);\r\n});\r\n\r\nmonthSelect.addEventListener('change', (event) => {\r\n  const selectedMonth = event.target.value;\r\n  const selectedData = dataMobileTable.find(item => item.month === selectedMonth);\r\n  \r\n  if (selectedData) {\r\n    minPrice.textContent = selectedData.minPrice;\r\n    maxPrice.textContent = selectedData.maxPrice;\r\n    avgPrice.textContent = selectedData.avgPrice;\r\n  }\r\n});\r\n\r\nmonthSelect.value = dataMobileTable[0].month;\r\nmonthSelect.dispatchEvent(new Event('change'));\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/mobilePhoneTableSearch.js?");

/***/ }),

/***/ "./src/js/module/pairCoinSlider.js":
/*!*****************************************!*\
  !*** ./src/js/module/pairCoinSlider.js ***!
  \*****************************************/
/***/ (function() {

eval("function pairCatalogSlider() {\r\n  const splide = new Splide(\"#pair__catalog-slider\", {\r\n    pagination: false,\r\n    type: \"slide\",\r\n    drag: \"free\",\r\n    rewind: true,\r\n    rewindByDrag: true,\r\n    arrows: false,\r\n    autoWidth: true,\r\n\r\n    autoScroll: {\r\n      speed: 1,\r\n      pauseOnHover: true,\r\n      autoStart: false,\r\n    },\r\n  });\r\n\r\n  let isAutoScrolling = false;\r\n\r\n  function updateAutoScroll() {\r\n    if (window.innerWidth > 768 && !isAutoScrolling) {\r\n      splide.Components.AutoScroll.pause();\r\n      isAutoScrolling = true;\r\n    } else if (window.innerWidth < 768 && isAutoScrolling) {\r\n      splide.Components.AutoScroll.play();\r\n      isAutoScrolling = false;\r\n    }\r\n  }\r\n  window.addEventListener(\"resize\", updateAutoScroll);\r\n  splide.mount(window.splide.Extensions);\r\n\r\n  updateAutoScroll();\r\n}\r\n\r\npairCatalogSlider();\n\n//# sourceURL=webpack://myproject/./src/js/module/pairCoinSlider.js?");

/***/ }),

/***/ "./src/js/module/updateTime.js":
/*!*************************************!*\
  !*** ./src/js/module/updateTime.js ***!
  \*************************************/
/***/ (function(module) {

eval("const realTime = document.querySelector(\".info__current-time\");\r\n\r\nfunction updateTime() {\r\n  const now = new Date();\r\n  const hours = String(now.getHours()).padStart(2, \"0\");\r\n  const minutes = String(now.getMinutes()).padStart(2, \"0\");\r\n  const seconds = String(now.getSeconds()).padStart(2, \"0\");\r\n  const day = String(now.getDate()).padStart(2, \"0\");\r\n  const month = String(now.getMonth() + 1).padStart(2, \"0\");\r\n  const year = now.getFullYear();\r\n  const currentTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;\r\n\r\n  realTime.textContent = currentTime;\r\n}\r\n\r\nsetInterval(updateTime, 1000);\r\nupdateTime();\r\n\r\nmodule.exports = updateTime.js\n\n//# sourceURL=webpack://myproject/./src/js/module/updateTime.js?");

/***/ }),

/***/ "./src/js/module/ws.js":
/*!*****************************!*\
  !*** ./src/js/module/ws.js ***!
  \*****************************/
/***/ (function(module) {

eval("const pairLtcUsd = document.querySelector(\".first-pair\");\r\nconst pairBtcUsd = document.querySelector(\".second-pair\");\r\nconst pairUsdtUsd = document.querySelector(\".third-pair\");\r\nconst pairEthUsd = document.querySelector(\".fourth-pair\");\r\nconst pairBnbUsd = document.querySelector(\".fifth-pair\");\r\nconst maiPair = document.querySelector(\".main-pair\");\r\n\r\nconst wsBinanceUrl = \"wss://stream.binance.com:9443/ws/!miniTicker@arr\";\r\nconst exchangeRates = {};\r\nconst ws = new WebSocket(wsBinanceUrl);\r\n\r\nws.onopen = function () {\r\n  console.log(\"Connected to WebSocket Binance\");\r\n};\r\n\r\nws.onerror = function (error) {\r\n  console.error(\"Error WebSocket:\", error);\r\n};\r\n\r\nws.onmessage = function (event) {\r\n  const message = JSON.parse(event.data);\r\n\r\n  if (Array.isArray(message)) {\r\n    message.forEach((item) => {\r\n      const symbol = item.s.toLowerCase();\r\n      const closePrice = parseFloat(item.c);\r\n      exchangeRates[symbol] = closePrice;\r\n      if (symbol === \"eurusdt\") {\r\n        maiPair.textContent = `${closePrice}`;\r\n      }\r\n      if (symbol === \"ltcusdt\") {\r\n        pairLtcUsd.textContent = `${closePrice}`;\r\n      }\r\n      if (symbol === \"btcusdt\") {\r\n        pairBtcUsd.textContent = `${closePrice.toFixed(2)}`;\r\n      }\r\n      if (symbol === \"usdcusdt\") {\r\n        pairUsdtUsd.textContent = `${closePrice.toFixed(2)}`;\r\n      }\r\n      if (symbol === \"ethusdt\") {\r\n        pairEthUsd.textContent = `${closePrice.toFixed(2)}`;\r\n      }\r\n      if (symbol === \"bnbusdt\") {\r\n        pairBnbUsd.textContent = `${closePrice.toFixed(2)}`;\r\n      }\r\n    });\r\n    console.log(\"Updated exchange rates:\", exchangeRates);\r\n  }\r\n};\r\n\r\nfunction convert(direction) {\r\n  const amountInput = document.getElementById(\"amount\");\r\n  const fromCurrencyInput = document.getElementById(\"fromCurrency\");\r\n  const convertedAmountInput = document.getElementById(\"convertedAmount\");\r\n  const toCurrencyInput = document.getElementById(\"toCurrency\");\r\n\r\n  const amount = parseFloat(amountInput.value);\r\n  const fromCurrency = fromCurrencyInput.value.trim().toUpperCase();\r\n  const toCurrency = toCurrencyInput.value.trim().toUpperCase();\r\n  const convertedAmount = parseFloat(convertedAmountInput.value);\r\n\r\n  if (direction === \"fromTo\") {\r\n    if (!amount || isNaN(amount)) {\r\n      document.getElementById(\"result\").textContent =\r\n        \"Please enter a valid amount\";\r\n      return;\r\n    }\r\n\r\n    if (!fromCurrency || !toCurrency) {\r\n      document.getElementById(\"result\").textContent =\r\n        \"Please enter valid currency codes\";\r\n      return;\r\n    }\r\n\r\n    try {\r\n      if (\r\n        exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()]\r\n      ) {\r\n        const result =\r\n          amount *\r\n          exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()];\r\n        convertedAmountInput.value = result.toFixed(2);\r\n        document.getElementById(\r\n          \"result\"\r\n        ).textContent = `${amount} ${fromCurrency} equals ${result.toFixed(\r\n          2\r\n        )} ${toCurrency}`;\r\n      } else if (\r\n        exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()]\r\n      ) {\r\n        const result =\r\n          amount /\r\n          exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()];\r\n        convertedAmountInput.value = result.toFixed(2);\r\n        document.getElementById(\r\n          \"result\"\r\n        ).textContent = `${amount} ${fromCurrency} equals ${result.toFixed(\r\n          2\r\n        )} ${toCurrency}`;\r\n      } else {\r\n        throw new Error(\r\n          `Exchange rate not found for ${fromCurrency} to ${toCurrency}`\r\n        );\r\n      }\r\n    } catch (error) {\r\n      console.error(\"Error:\", error.message);\r\n      document.getElementById(\"result\").textContent =\r\n        \"Conversion error. Please try again later.\";\r\n    }\r\n  } else if (direction === \"toFrom\") {\r\n    if (!convertedAmount || isNaN(convertedAmount)) {\r\n      document.getElementById(\"result\").textContent =\r\n        \"Please enter a valid amount\";\r\n      return;\r\n    }\r\n\r\n    if (!fromCurrency || !toCurrency) {\r\n      document.getElementById(\"result\").textContent =\r\n        \"Please enter valid coin name\";\r\n      return;\r\n    }\r\n\r\n    try {\r\n      if (\r\n        exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()]\r\n      ) {\r\n        const result =\r\n          convertedAmount *\r\n          exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()];\r\n        amountInput.value = result.toFixed(2);\r\n        document.getElementById(\r\n          \"result\"\r\n        ).textContent = `${convertedAmount} ${toCurrency} equals ${result.toFixed(\r\n          2\r\n        )} ${fromCurrency}`;\r\n      } else if (\r\n        exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()]\r\n      ) {\r\n        const result =\r\n          convertedAmount /\r\n          exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()];\r\n        amountInput.value = result.toFixed(2);\r\n        document.getElementById(\r\n          \"result\"\r\n        ).textContent = `${convertedAmount} ${toCurrency} equals ${result.toFixed(\r\n          2\r\n        )} ${fromCurrency}`;\r\n      } else {\r\n        throw new Error(\r\n          `Exchange rate not found for ${toCurrency} to ${fromCurrency}`\r\n        );\r\n      }\r\n    } catch (error) {\r\n      console.error(\"Error\", error.message);\r\n      document.getElementById(\"result\").textContent =\r\n        \"Conversion error. Please try again later.\";\r\n    }\r\n  }\r\n}\r\n\r\ndocument\r\n  .getElementById(\"amount\")\r\n  .addEventListener(\"input\", () => convert(\"fromTo\"));\r\ndocument\r\n  .getElementById(\"fromCurrency\")\r\n  .addEventListener(\"input\", () => convert(\"fromTo\"));\r\ndocument\r\n  .getElementById(\"toCurrency\")\r\n  .addEventListener(\"input\", () => convert(\"fromTo\"));\r\ndocument\r\n  .getElementById(\"convertedAmount\")\r\n  .addEventListener(\"input\", () => convert(\"toFrom\"));\r\ndocument\r\n  .querySelector(\".converter__btn\")\r\n  .addEventListener(\"click\", () => convert(\"fromTo\"));\r\n\r\nmodule.exports = ws.js;\r\n\n\n//# sourceURL=webpack://myproject/./src/js/module/ws.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;