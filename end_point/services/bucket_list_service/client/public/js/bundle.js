/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FormView = __webpack_require__(/*! ./views/form.js */ \"./client/src/views/form.js\");\nconst ListView = __webpack_require__(/*! ./views/list.js */ \"./client/src/views/list.js\");\nconst BucketList = __webpack_require__(/*! ./models/bucket_list.js */ \"./client/src/models/bucket_list.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const list = document.querySelector('ul#bucket-list');\n  const listView = new ListView(list);\n  listView.setupEventListeners();\n\n  const form = document.querySelector('form#new-must-do-form');\n  const formView = new FormView(form);\n  formView.setupEventListeners();\n\n  const bucketListData = new BucketList();\n  bucketListData.setupEventListeners();\n  bucketListData.all();\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function(channel, payload) {\n    const event = new CustomEvent(channel, { detail: payload });\n    document.dispatchEvent(event);\n  },\n  subscribe: function(channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function(url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function(urlParam) {\n  const url = urlParam ? `${this.url}/${urlParam}` : this.url;\n  return fetch(url)\n    .then((response) => response.json())\n    .catch((err) => console.error(err));\n};\n\nRequestHelper.prototype.post = function(payload, urlParam) {\n  const url = urlParam ? `${this.url}/${urlParam}` : this.url;\n  return fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json())\n    .catch((err) => console.error(err));\n};\n\nRequestHelper.prototype.put = function(payload, urlParam) {\n  const url = urlParam ? `${this.url}/${urlParam}` : this.url;\n  return fetch(url, {\n    method: 'PUT',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json())\n    .catch((err) => console.error(err));\n};\n\nRequestHelper.prototype.delete = function(urlParam) {\n  const url = urlParam ? `${this.url}/${urlParam}` : this.url;\n  return fetch(url, { method: 'DELETE' })\n    .then((response) => response.json())\n    .catch((err) => console.error(err));\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/bucket_list.js":
/*!******************************************!*\
  !*** ./client/src/models/bucket_list.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst BucketList = function() {\n  this.items = [];\n  this.request = new RequestHelper('/api/must-dos');\n};\n\nBucketList.prototype.setupEventListeners = function() {\n  PubSub.subscribe('FormView:add-item', (evt) => {\n    const itemToAdd = evt.detail;\n    this.add(itemToAdd);\n  });\n  PubSub.subscribe('ListItemView:update-item', (evt) => {\n    const itemToUpdate = evt.detail;\n    this.update(itemToUpdate);\n  });\n  PubSub.subscribe('ListItemView:delete-item', (evt) => {\n    const itemToDelete = evt.detail;\n    this.delete(itemToDelete);\n  });\n};\n\nBucketList.prototype.all = function() {\n  this.request\n    .get()\n    .then((listItems) => {\n      this.items = listItems;\n      PubSub.publish('BucketList:list-ready', this.items);\n    })\n    .catch((err) => console.error(err));\n};\n\nBucketList.prototype.add = function(newItem) {\n  this.request\n    .post(newItem)\n    .then((listItems) => {\n      this.items = listItems;\n      PubSub.publish('BucketList:list-ready', this.items);\n    })\n    .catch((err) => console.error(err));\n};\n\nBucketList.prototype.update = function(updatedItem) {\n  const id = updatedItem._id;\n  this.request\n    .put(updatedItem, id)\n    .then((listItems) => {\n      this.items = listItems;\n      PubSub.publish('BucketList:list-ready', this.items);\n    })\n    .catch((err) => console.error(err));\n};\n\nBucketList.prototype.delete = function(itemToDelete) {\n  const id = itemToDelete._id;\n  this.request\n    .delete(id)\n    .then((listItems) => {\n      this.items = listItems;\n      PubSub.publish('BucketList:list-ready', this.items);\n    })\n    .catch((err) => console.error(err));\n};\n\nmodule.exports = BucketList;\n\n\n//# sourceURL=webpack:///./client/src/models/bucket_list.js?");

/***/ }),

/***/ "./client/src/views/form.js":
/*!**********************************!*\
  !*** ./client/src/views/form.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst FormView = function(formElement) {\n  this.element = formElement;\n};\n\nFormView.prototype.setupEventListeners = function() {\n  this.element.addEventListener('submit', function(evt) {\n    evt.preventDefault();\n    const form = evt.target;\n\n    const newItem = { title: form['title-field'].value };\n    PubSub.publish('FormView:add-item', newItem);\n\n    form.reset();\n  });\n};\n\nmodule.exports = FormView;\n\n\n//# sourceURL=webpack:///./client/src/views/form.js?");

/***/ }),

/***/ "./client/src/views/list.js":
/*!**********************************!*\
  !*** ./client/src/views/list.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ListItemView = __webpack_require__(/*! ./list_item.js */ \"./client/src/views/list_item.js\");\n\nconst ListView = function(listElement) {\n  this.element = listElement;\n};\n\nListView.prototype.setupEventListeners = function() {\n  this.element.addEventListener('submit', function(evt) {\n    evt.preventDefault();\n  });\n  PubSub.subscribe('BucketList:list-ready', (evt) => {\n    const items = evt.detail;\n    this.renderList(items);\n  });\n};\n\nListView.prototype.renderList = function(items) {\n  this.emptyList();\n  items.forEach((item) => this.renderItem(item));\n};\n\nListView.prototype.emptyList = function(items) {\n  this.element.innerHTML = '';\n};\n\nListView.prototype.renderItem = function(item) {\n  const listItemView = new ListItemView(item);\n  const li = listItemView.createLi();\n  this.element.appendChild(li);\n};\n\nmodule.exports = ListView;\n\n\n//# sourceURL=webpack:///./client/src/views/list.js?");

/***/ }),

/***/ "./client/src/views/list_item.js":
/*!***************************************!*\
  !*** ./client/src/views/list_item.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ListItemView = function(item) {\n  this.item = item;\n  this.element = null;\n};\n\nListItemView.prototype.createLi = function() {\n  const li = document.createElement('li');\n  li.classList.add('bucket-list-item');\n  if (this.item.completed) {\n    li.classList.add('completed');\n  }\n\n  const deleteButton = this.createDeleteButton();\n  li.appendChild(deleteButton);\n\n  const checkbox = this.createCheckbox();\n  li.appendChild(checkbox);\n\n  const titleSpan = this.createTitleSpan(li);\n  li.appendChild(titleSpan);\n\n  this.element = li;\n  return li;\n};\n\nListItemView.prototype.createTitleSpan = function(li) {\n  let titleSpan = document.createElement('span');\n  titleSpan.textContent = this.item.title;\n  titleSpan.classList.add('title');\n  return titleSpan;\n};\n\nListItemView.prototype.createCheckbox = function() {\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.checked = this.item.completed;\n\n  checkbox.addEventListener('click', (evt) => {\n    const isChecked = evt.target.checked;\n    this.handleCheckboxClicked(isChecked);\n  });\n\n  return checkbox;\n};\n\nListItemView.prototype.handleCheckboxClicked = function(checkboxState) {\n  this.item.completed = checkboxState;\n  PubSub.publish('ListItemView:update-item', this.item);\n};\n\nListItemView.prototype.createDeleteButton = function() {\n  const deleteButton = document.createElement('button');\n  deleteButton.classList.add('delete');\n\n  deleteButton.addEventListener('click', (evt) => {\n    PubSub.publish('ListItemView:delete-item', this.item);\n  });\n  return deleteButton;\n};\n\nmodule.exports = ListItemView;\n\n\n//# sourceURL=webpack:///./client/src/views/list_item.js?");

/***/ })

/******/ });