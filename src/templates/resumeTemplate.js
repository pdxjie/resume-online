/**
 * @Author: 派同学
 * @Description: How
 */
import ikun from '@/assets/images/ikun.jpg'
import { v4 as uuidv4 } from 'uuid'
export const normalTemplate = {
  basicInfo: {
    title: '基础信息',
    cover: 'https://edu-2330.oss-cn-beijing.aliyuncs.com/2023/04/05/template1.png',
    tag: '计算机专业',
    edit: false,
    isAppear: true,
    avatar: ikun,
    basicInfos: [
      {
        id: uuidv4(),
        basicKey: '姓名',
        basicVal: '小黑子',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '性别',
        basicVal: '男',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '薪资',
        basicVal: '面议',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '电话',
        basicVal: '12312344321',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '邮箱',
        basicVal: 'ikun-lover@163.com',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '工作年限',
        basicVal: '1 - 3年',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      },
      {
        id: uuidv4(),
        basicKey: '个人网站',
        basicVal: 'https://github.com/xxx',
        placeholderKey: '属性',
        placeholderVal: '属性值'
      }
    ]
  },
  otherInfos: [
    {
      id: uuidv4(),
      sort: 1,
      title: '教育经历',
      edit: false,
      isAppear: true,
      fromDate: '2019/09/01',
      toDate: '2023/07/01',
      toNow: false,
      isDisable: false,
      subject: '郑州大学',
      major: '软件工程专业',
      content: '**主修课程：Java、C++、数据结构、计算机算法设计与分析、数据库原理、计算机网络等。**',
      children: []
    },
    {
      id: uuidv4(),
      sort: 2,
      title: '相关技能',
      edit: false,
      isAppear: true,
      fromDate: '',
      toDate: '',
      toNow: false,
      isDisable: true,
      subject: '',
      major: '',
      content: `

  **技术栈：**

  &ensp;&ensp;&ensp;&ensp;Java、MySQL、MQ、Redis、Zookeeper、Dubbo、Nginx、ElasticSearch、Netty、Spring、MyBatis、Javascript、NodeJS、网络协议、UML建模语言、数据结构和算法等。

      `,
      children: []
    },
    {
      id: uuidv4(),
      sort: 3,
      title: '项目经历',
      edit: false,
      isAppear: true,
      fromDate: '2020/10/11',
      toDate: '2021/01/23',
      toNow: false,
      isDisable: false,
      subject: '公司甲',
      major: 'Java后端开发工程师',
      content: `

  **1、交易链路领域化服务建设（技术负责人 + PM + 核心服务开发）**

  **主要功能：**

  &ensp;&ensp;&ensp;&ensp; 为了统一多个上层业务的交易链路，可以更高效的做到对交易链路的资损防控及异常的统一处理，搭建了订单领域服务，包括但不限于订单创建、订单预支付、标记支付、订单的交付、订单的履约等功能。商品领域服务的搭建，包括但不限于商品的创建、审核、上下架等功能。以及营销服务的搭建，包括但不限于优惠券、优惠码、限时折扣、订单满减等功能。

  **模型设计：**

  &ensp;&ensp;&ensp;&ensp; 对订单模型进行了领域化建模，抽象了订单基础信息、订单支付、订单商品、订单商品的履约、订单权益、以及订单佣金等领域模型的设计。对不同的订单类型领域服务做了策略模式的设计，减小了业务变更的影响且大大提高了不同类型的订单接入服务的效率。

          `,
      children: [
        {
          id: uuidv4(),
          sort: 1,
          edit: false,
          isAppear: true,
          isLeaf: true,
          fromDate: '2020/10/11',
          toDate: '2021/01/23',
          toNow: false,
          isDisable: false,
          subject: '公司乙',
          major: '前端开发工程师',
          content: `

  **1、交易链路领域化服务建设（技术负责人 + PM + 核心服务开发）**

  **主要功能：**

  &ensp;&ensp;&ensp;&ensp;为了统一多个上层业务的交易链路，可以更高效的做到对交易链路的资损防控及异常的统一处理，搭建了订单领域服务，包括但不限于订单创建、订单预支付、标记支付、订单的交付、订单的履约等功能。商品领域服务的搭建，包括但不限于商品的创建、审核、上下架等功能。以及营销服务的搭建，包括但不限于优惠券、优惠码、限时折扣、订单满减等功能。

  **模型设计：**

  &ensp;&ensp;&ensp;&ensp;对订单模型进行了领域化建模，抽象了订单基础信息、订单支付、订单商品、订单商品的履约、订单权益、以及订单佣金等领域模型的设计。对不同的订单类型领域服务做了策略模式的设计，减小了业务变更的影响且大大提高了不同类型的订单接入服务的效率。

          `
        },
        {
          id: uuidv4(),
          sort: 2,
          edit: false,
          isAppear: true,
          isLeaf: true,
          fromDate: '2020/10/11',
          toDate: '2021/01/23',
          toNow: false,
          isDisable: false,
          subject: '公司丙',
          major: '全栈开发工程师',
          content: `

  **1、交易链路领域化服务建设（技术负责人 + PM + 核心服务开发）**

  **主要功能：**

  &ensp;&ensp;&ensp;&ensp;为了统一多个上层业务的交易链路，可以更高效的做到对交易链路的资损防控及异常的统一处理，搭建了订单领域服务，包括但不限于订单创建、订单预支付、标记支付、订单的交付、订单的履约等功能。商品领域服务的搭建，包括但不限于商品的创建、审核、上下架等功能。以及营销服务的搭建，包括但不限于优惠券、优惠码、限时折扣、订单满减等功能。

  **模型设计：**

  &ensp;&ensp;&ensp;&ensp;对订单模型进行了领域化建模，抽象了订单基础信息、订单支付、订单商品、订单商品的履约、订单权益、以及订单佣金等领域模型的设计。对不同的订单类型领域服务做了策略模式的设计，减小了业务变更的影响且大大提高了不同类型的订单接入服务的效率。

          `
        }
      ]
    },
    {
      id: uuidv4(),
      sort: 4,
      title: '荣誉证书',
      edit: false,
      isAppear: true,
      fromDate: '2023/01/01',
      toDate: '2023/01/01',
      toNow: false,
      isDisable: false,
      subject: '',
      major: '',
      content: `

  英语八级 - 教师资格证 - 高级人才证书 - 优秀毕业生xxx

      `,
      children: []
    },
    {
      id: uuidv4(),
      sort: 5,
      title: '个人评价',
      edit: false,
      isAppear: true,
      fromDate: '',
      toDate: '',
      toNow: false,
      isDisable: true,
      subject: '',
      major: '',
      content: `

  - 对开放平台领域、交易领域有深刻的理解和架构经验；
  - 熟悉IoT物联网平台的系统架构及实现；
  - 有大量分布式高并发架构设计和开发经验；
  - 主导过多个跨部门、跨团队的大型的项目管理和开发落地；
  - 且个人对技术有孜孜不倦的追求和热情；
      `,
      children: []
    }
  ]
}
