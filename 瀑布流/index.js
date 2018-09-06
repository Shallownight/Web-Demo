// blockWidth: 块宽度,  divArr: 随机生成的块, column: 列数, gap: 上下间距;
// 代码写的很辣鸡，但是懒得重构，仅供参考
let blockWidth = 200, divArr = [], gap = 20, lenArr = [];
window.onresize = init;
init()

/**
 * 初始化生成区块，并添加到container
 *
 */
function init() {
  lenArr = [];
  let column = Math.floor(getClient().width / blockWidth);
  createElement();
  for(let i = 0; i < divArr.length; i++) {
    if(i < column) {
      divArr[i].style.top = 0;
      divArr[i].style.left = blockWidth*i + 'px'
      document.getElementById("container").appendChild(divArr[i]);
      lenArr.push(divArr[i].offsetHeight);
    }
    else {
      add(i)
    }
  }
}

/**
 * 除了第一行外的区块都通过add添加
 *
 * @param {*} item 当前需要添加到container的区块元素
 */
function add(item) {
  let minHeight = lenArr[0];
  let index = 0;
  for (let j = 0; j < lenArr.length; j++) {
    if(minHeight > lenArr[j]) {
      minHeight = lenArr[j];
      index = j;
    }
  }

  divArr[item].style.top = minHeight + gap + 'px';
  divArr[item].style.left = divArr[index].offsetLeft + 'px';
  document.getElementById("container").appendChild(divArr[item]);
  lenArr[index] = lenArr[index] + divArr[item].offsetHeight + gap;
}


/**
 * 生成区块
 *
 */
function createElement() {
  for(let i = 0; i < 20; i++){
    let div = document.createElement('div');
    div.className = 'block';
    div.style.width = blockWidth - 20 + 'px';
    div.style.height = 200 * Math.random() + 200 + 'px';
    divArr.push(div);
  }
}

// 监听滚动事件，当滚动到底部时，添加模块
window.onscroll = function() {
  if (getClient().height + getScrollTop() >= divArr[divArr.length - 1].offsetTop) {
    let number = divArr.length
    createElement();
    for(let i = number; i < divArr.length; i++) {
      add(i)
    }
  }
};

// clientWidth 处理兼容性
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
// scrollTop兼容性处理
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
