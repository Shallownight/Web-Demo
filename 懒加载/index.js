window.addEventListener('scroll', throttle(lazyload, 300));
let img = document.getElementsByTagName("img");
let unloadImg = 0;
lazyload();

/**
 * 懒加载
 *
 */
function lazyload() {
  let seeHeight = document.documentElement.clientHeight;
  // chrome: body.scrollTop, firefox: documentElement.scrollTop
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  for (let i = unloadImg; i < img.length; i++) {
    if (img[i].offsetTop < seeHeight + scrollTop + 300) {
      if (!img[i].getAttribute("src")) {
        img[i].setAttribute("src", img[i].getAttribute("data-src"));
      }
      unloadImg = i + 1;
    }
  }
}

/**
* 节流函数
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  执行间隔，单位是毫秒（ms）
*
* @return {Function}     返回一个“节流”函数
*/
function throttle(fn, delay) {
  var timer;
  var startTime = +new Date();
 
  return function() {
    clearTimeout(timer);
    var curTime = +new Date();
    if(curTime - startTime >= delay) {
      fn();
      startTime = curTime;
    } else {
      timer = setTimeout(fn, delay);
    }
  };
 }