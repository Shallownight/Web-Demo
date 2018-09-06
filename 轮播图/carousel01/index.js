let carousel = document.querySelector('#cm-wrapper');
let imgNumber = carousel.getElementsByTagName('li').length;
let current = 0, timer;

/**
 * 修改轮播图展示的图片
 * 
 */
let changeStatus = () => {
  for(let i = 0; i < imgNumber; i++) {
    if (i === current) {
      carousel.getElementsByTagName('li')[i].style.display = 'block';
      // transition不能和display:none 和 block同时使用，所以异步
      setTimeout(() => {
        carousel.getElementsByTagName('li')[i].style.opacity = 1;
      }, 0);
    }
    else {
      carousel.getElementsByTagName('li')[i].style.display = 'none';
      carousel.getElementsByTagName('li')[i].style.opacity = 0;
    }
  }
}

/**
 * 设置时钟
 * 
 */
let setTimer = () => {
  timer = setInterval(() => {
    current = current < (imgNumber - 1) ? ++current : 0;
    changeStatus();
  }, 1800);
}

let init = () => {
  setTimer();
}

init();
