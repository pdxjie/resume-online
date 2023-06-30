/**
 * @Author: 派同学
 * @Description: How
 */
const content = `## 马冬梅 - web前端
::: start
icon:user 2000/01/01
:::
icon:phone 1387848538
:::
icon:email examples.@163.com
:::
icon:github https://github.com/acmenlei
::: end
## 教育经历
江西财经大学 信电学院-计算机 2019-2023 本科

## 专业技能
熟知Javascript 基本语法与知识，熟练掌握模块化，面向对象，MVC 等编程思想，具备各种框架等学习能力
了解常见的数据结构与算法知识，能够使用JavaScript 实现常见的数据结构
掌握前端流行框架 React、vue
熟练使用 NPM, webpack 等工具
了解前端兼容性处理、性能优化知识与技巧，并能在项目中加以实践
掌握 Node'S，可使用 Koa/Express 搭建服务端程序
了解 Canvas/Pixils 等web2D相关技术

## 实习经历
**阿里巴巴** (2022.4-2022.7)
**主要技术**：\`JavaScript\` \`A11v\`&nbsp;
参与互动游戏业务开发，结合前端游戏引擎，解决Canvas区域的无障碍问题，实现场景化、自动化、标准化的移动端游戏无障碍化工具。
场景化：面对无障碍模式 下只能点按问题，对拖动交互场景进行优化
自动化：针对游戏对象，自动添加AOM实现无障碍提示标准化：对齐无障碍标准，WAlI-ARIA、WICG/AOM
成果:运用到金币小镇、芭芭农场、双11等互动项目，解决项目无障碍问题，让视力障碍者也能体验互动乐趣。
&nbsp;
**字节跳动** (2022.8-2022.10)
主要技术：Typescript/React/Mobx/Nodejs
参与业务开发与技术改造，主导了性能优化、消灭code smell、Onview 改造等一系列工作。
负责全站包大小优化，对build 产物进行分析并逐步优化，最后减少50% InitialJs Size，页面加载速度从 4s降至25
主导消灭code smell 工作，重构2K 余行代码，消灭code smell 700 余个，并制定 ESLint规范，降低codereview成本
主导Onview 改造，开发一键Onview 功能，捕获错误日志，帮助研发人员快速定位问题，解决反馈，提高人效
参与项目的TS改造以及 Monorepo 迁移，编写文档，制定相应的类型规范
编写提高工作效率的小工具，例如批量接口打标脚本，接口mock脚本等等，为开发提效，获得组内一致好评。
&nbsp;
## 校园项目
**成绩查询**
主要技术：Node S/lavascript
为学生提供成绩查询系统，解决内外网隔离问题，提供成绩短信通知能力，为2万在校生提供在家查成绩服务。使用Koa2提供AP接口，以供前端使用、运用Node js实现带登陆;态请求、使用React/ Antd实现前端UI界面、接入阿里云短信API。
## 其他
获得一等/三等奖学金，在校级社团担任总负责人，在院学生会担任副部长职位`

export default {
  name: '社招/校招简洁模版',
  primaryColor: '#555',
  primaryBackground: '#333',
  img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca4dab18c36043658d4cf4f8bb64e052~tplv-k3u1fbpfcp-watermark.image?',
  content
}
