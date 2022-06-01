const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const coloredTexts = document.getElementsByClassName('colorful-js');

for(let i=0;i<coloredTexts.length;i++){
  coloredTexts[i].addEventListener('click',changeColor());
}

function changeColor(){
  let i=0;
  return function (event){
    event.target.style.color=colors[i];
    i++;
    if(i>=colors.length){
      i=0;
    }
  }
}
test('color', () => {
  expect(coloredTexts()).not.toBe(undefined);
});