// Mock LocalStorage
// jsdom doesn't provide window.localStorage, so we mock it here
// See https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
export default function storageMock() {
  const storage = {};
  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}
