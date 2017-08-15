/** History API Usage **/
/**
  history.pushState({key:'a'},'a','/a')
  history.pushState({key:'b'},'b','/b')
  history.pushState({key:'c'},'c','/c')
  history.pushState({key:'d'},'d','/d')
  history.pushState({key:'e'},'e','/e')
  history.pushState({key:'f'},'f','/f')
  history.pushState({key:'g'},'g','/g')

  history.pushState(null,'a','/a')
  history.pushState(null,'b','/b')
  history.pushState(null,'c','/c')
  history.pushState(null,'d','/d')
  history.pushState(null,'e','/e')
  history.pushState(null,'f','/f')
  history.pushState(null,'g','/g')

  // 前进
  history.forward();

  // 后退
  history.back();

  // 替换当前state
  history.replaceState();

  // go: -1向后一个，2向前两个,0:刷新当前页面
  history.go(2);


  // 绑定事件处理函数.
  // pushState,replaceState并不会触发该事件，
  // 只有用户点击后退／前进按钮（back,forward,go）方法时才回触发
  window.onpopstate = function(event) {
    alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
  };
 */

class Route {
	constructor() {
    this.route = null;

    window.addEventListener('popstate', () => {
      this.route = window.location.pathname
    })


	}
}
