import { Tools } from './src/tools'

class Walle {
  constructor() {
    this.dom = document.querySelector('#app');
    this.data = window.data;
    this.regex = /\{\{.+\}\}/;
    this.render();

    var t = new Tools();
    console.log(t.math());
  }

  render() {
    // 遍历属性s
    for (var i = 0; i < this.dom.attributes.length; i++) {
      var attr = this.dom.attributes[i];

      if (this.regex.test(attr.value)) {
        attr.value = this.attrMapValue(attr.value, this.data);
      }
    }

    // 遍历文本节点
    if (this.regex.test(this.dom.text.trim())) {
      this.dom.text = this.attrMapValue(this.dom.text, this.data);
    }

    // v-if v-show v-for ......
  }

  attrMapValue(str, data) {
    var res = "__none__";
    var keys = str.replace("{{", '').replace('}}', '').trim().split('.');
    keys.forEach(key => {
      key = key.trim();
      if (res !== '__none__') {
        res = res[key]
      } else {
        res = window[key]
      }
    })

    return res;
  }
}

var walle = new Walle();
