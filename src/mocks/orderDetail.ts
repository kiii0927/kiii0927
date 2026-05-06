export interface OrderDetail {
  orderId: string;
  orderStatus: string;
  pickupCode: string;
  storeName: string;
  storeTag: string;
  goodsName: string;
  goodsImage: string;
  goodsSpec: string;
  quantity: number;
  originalPrice: number;
  discount: number;
  actualPrice: number;
  plusSaved: number;
  paymentMethod: string;
  payTime: string;
  orderTime: string;
  deliveryMethod: string;
  deliveryAddress: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  expectDeliveryTime: string;
  deliveryType: string;
  returnPolicy: string;
  subsidyAmount: number;
}

export const mockOrderDetail: OrderDetail = {
  orderId: "2948357201837465",
  orderStatus: "完成",
  pickupCode: "3-2-7821",
  storeName: "网易严选京东自营旗舰店",
  storeTag: "自营",
  goodsName: "网易严选 纯棉抗菌毛巾三件套...",
  goodsImage:
    "https://img1.baidu.com/it/u=2120978018,2830167934&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  goodsSpec: "浅灰+米白+雾蓝 | 34cm×76cm",
  quantity: 2,
  originalPrice: 89.9,
  discount: 54.52,
  actualPrice: 35.38,
  plusSaved: 12.45,
  paymentMethod: "微信支付",
  payTime: "2026-05-02 19:18:06",
  orderTime: "2026-05-02 19:18:02",
  deliveryMethod: "兔喜快递超市-阳光花园店",
  deliveryAddress: "3号楼2单元旁快递柜",
  receiverName: "张明辉",
  receiverPhone: "138****7392",
  receiverAddress: "广东省广州市天河区体育西路128号星河大厦",
  expectDeliveryTime: "2026-05-03 09:00-18:00",
  deliveryType: "送货上门",
  returnPolicy: "支持7天无理由退货",
  subsidyAmount: 2,
};

// 备用数据1 - 电子产品
export const mockOrderDetail2: OrderDetail = {
  orderId: "5739201847562910",
  orderStatus: "完成",
  pickupCode: "5-1-3409",
  storeName: "小米京东自营旗舰店",
  storeTag: "自营",
  goodsName: "Xiaomi 蓝牙降噪耳机 Buds 5...",
  goodsImage:
    "https://img1.baidu.com/it/u=2120978018,2830167934&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  goodsSpec: "石墨黑 | 主动降噪款",
  quantity: 1,
  originalPrice: 399.0,
  discount: 120.0,
  actualPrice: 279.0,
  plusSaved: 25.6,
  paymentMethod: "京东支付",
  payTime: "2026-05-01 14:22:38",
  orderTime: "2026-05-01 14:22:35",
  deliveryMethod: "顺丰速运-翠苑驿站",
  deliveryAddress: "菜鸟驿站翠苑三区店",
  receiverName: "陈雨桐",
  receiverPhone: "159****4861",
  receiverAddress: "浙江省杭州市西湖区文三路478号华星时代广场A座",
  expectDeliveryTime: "2026-05-02 10:00-20:00",
  deliveryType: "站点自提",
  returnPolicy: "支持7天无理由退货",
  subsidyAmount: 1,
};

// 备用数据2 - 食品饮料
export const mockOrderDetail3: OrderDetail = {
  orderId: "8102938475610293",
  orderStatus: "完成",
  pickupCode: "2-3-6845",
  storeName: "三只松鼠京东自营旗舰店",
  storeTag: "自营",
  goodsName: "三只松鼠 巨型零食大礼包 混合坚果...",
  goodsImage:
    "https://img1.baidu.com/it/u=4256523405,3839319047&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  goodsSpec: "缤纷果仁款 | 1.2kg",
  quantity: 1,
  originalPrice: 128.0,
  discount: 69.01,
  actualPrice: 58.99,
  plusSaved: 8.8,
  paymentMethod: "白条",
  payTime: "2026-05-04 10:05:22",
  orderTime: "2026-05-04 10:05:19",
  deliveryMethod: "中通快递-龙湖驿站",
  deliveryAddress: "龙湖天街负一层快递服务中心",
  receiverName: "赵文轩",
  receiverPhone: "177****9548",
  receiverAddress: "四川省成都市武侯区天府大道中段688号国际人才城",
  expectDeliveryTime: "2026-05-05 11:00-19:00",
  deliveryType: "送货上门",
  returnPolicy: "支持7天无理由退货",
  subsidyAmount: 1,
};
