// Mock LocalStorage
// jsdom doesn't provide window.localStorage, so we mock it here
// See https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
export default function storageMock() {
  var storage = {};
  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}
