export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  qty: number;
}

export interface Address {
  name: string;
  phone: string;
  fullAddress: string;
}

export interface Order {
  id: string;
  status: string;
  createdAt: string;
  address: Address;
  products: Product[];
  total: number;
  shipping: number;
  paymentMethod: string;
  orderNo: string;
}

const mockOrder: Order = {
  id: "OD202605060001",
  status: "卖家已发货",
  createdAt: "2026-05-06 14:32",
  address: {
    name: "张三",
    phone: "13800138000",
    fullAddress: "北京市朝阳区望京街道 XX 小区 3 单元 502",
  },
  products: [
    {
      id: 1,
      title: "小米智能手环 7（黑色） 睡眠心率监测 续航长",
      image: "https://picsum.photos/seed/product1/400/400",
      price: 199,
      qty: 1,
    },
    {
      id: 2,
      title: "罗技无线鼠标 M350 舒适便携 静音按键",
      image: "https://picsum.photos/seed/product2/400/400",
      price: 89,
      qty: 2,
    },
  ],
  total: 377,
  shipping: 0,
  paymentMethod: "在线支付（支付宝）",
  orderNo: "202605061234567890",
};

export default mockOrder;
