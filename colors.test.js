const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const testColors1 = document.querySelector('#text1');
const i = 0;
testColors1.onclick = () => (testColors1.style.background = colors[++i % colors.length]);
const testColors2 = document.querySelector('#text2');
testColors2.onclick = () => (testColors2.style.background = colors[++i % colors.length]);
const testColors3 = document.querySelector('#text3');
testColors3.onclick = () => (testColors3.style.background = colors[++i % colors.length]);
test('changeColor', () => {
  expect(testColors1()).not.toBe(undefined);
});