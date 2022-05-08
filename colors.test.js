const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let testColors1 = document.querySelector('#text1');
let i = 0;
testColors1.onclick = () => (testColors1.style.background = colors[++i % colors.length]);
let testColors2 = document.querySelector('#text2');
testColors2.onclick = () => (testColors2.style.background = colors[++i % colors.length]);
let testColors3 = document.querySelector('#text3');
testColors3.onclick = () => (testColors3.style.background = colors[++i % colors.length]);
test('сolor display test', () => {
  expect(testColors1).toContain('magenta');
});