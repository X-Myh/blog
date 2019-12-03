/**
 * Author iWuzhi
 * Date 2019/12/3
 **/

let exs = [
  {
    title: "2017年6月，杭电毕业，物流管理专业",
    description: `大学期间循规蹈矩，好像没有发生什么特别大的事，比如拿个诺贝尔奖啊啥的。唯一值的一提的是自学编程，当时主要目标是Java Web。<br \/>GET：编程基础、Java、数据库、Web基础`
  },
  {
    title: "2016年11月，加入Locket（大四实习）",
    description: `这里有一群有信仰的伙伴，从事数据安全，技术导向，很喜欢整个团队的氛围。 我也是在这里经历了从学生到职场的转变过程，可以说是非常难忘的一年，也是决定了今后发展方向的一年。
                <br />GET：Vue、NodeJS、Web安全、Webpack、组件化思想`
  },
  {
    title: "2017年8月，入职上海暖水信息有限公司",
    description: `金融业务，每天都和钱打交道，也接触到了更多各种不同的人。在这里也可以说是我正式专注Web开发的起点，开始接触一些新的Web知识，扩大自己的视野。上级对我的能力也是一直很肯定，
                  经常会让我去做一些技术上的尝试或挑战，偶尔还会做系统性的优化。<br />GET：React、Antd、类库思维(lodash、moment、big.js)、h5开发(适配、调试)、Echarts`
  },
  {
    title: "2019年11月，loading...",
    description: `期待自己成为一名非常专业的前端开发。`
  },
];
const linkEle = document.createElement("link");
linkEle.setAttribute("href", "/about/index.css");
linkEle.setAttribute("rel", "stylesheet");
linkEle.setAttribute("type", "text/css");
document.head.appendChild(linkEle);

let mainEle = document.querySelector("#__my_ex");

exs.forEach(function(ex, i) {
  const itemWrapperEle = document.createElement("div");
  itemWrapperEle.setAttribute("class", "item-wrapper");
  itemWrapperEle.innerHTML = `
    <div class="item-title">
      <span class='${i === (exs.length - 1) ? "item-circle item-circle-last" : "item-circle"}' style="animation-delay:${i}s;"></span>
      <span class="item-circle-bg"></span>
      ${ex.title}
    </div>
    <div class="item-description">${ex.description}</div>
  `;
  mainEle.appendChild(itemWrapperEle);
});
