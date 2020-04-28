

<div class="calculator">
  <input type="text"
         class="calculator-input"
         placeholder="请输入当前价格：30.22">
  <button class="calculator-submit"
          onclick="__computed()">计算</button>
  <div class="calculator-result"></div>
</div>

<script>
  const __calculatorInputEle = document.querySelector(".calculator-input");
  let _calcValue = null;
  function __computed() {
    _calcValue = parseFloat(__calculatorInputEle.value);
    if (isNaN(_calcValue)) {
      // TODO: 这里可以考虑加入Toast提示什么的 2019年09月02日15:52:59 iWuzhi
      return;
    }
    let _list = [];
    for (let i = 1; i <= 10; i ++) { // -10% ~ 10%
      _list.push(-i);
      _list.push(i);
    }
    insertResToPage(__generateResNodeList(_list));
  }

  function insertResToPage(nodeList) {
    const resEle = document.querySelector(".calculator-result");
    resEle.innerHTML = nodeList.join("");
  }

  function __generateResNodeList(_list) {
    return _list.map(function (i) {
      let _className = "calculator-result-green";
      if (i > 0) {
        _className = "calculator-result-red";
      }
      return (
        `<div class="${_className}">
            <span class="calculator-result-tag" style="">${i}%</span>
            <span>${__computedResult(i)}</span>
        </div>`
      )
    });
  }

  function __computedResult(i) {
    if (!i) {
      return 0;
    }
    return (Math.round((_calcValue + (_calcValue * (i / 100))) * 100) / 100).toFixed(2);
  }

</script>
