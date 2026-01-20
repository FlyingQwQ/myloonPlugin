// amap_detect.js

// 只作为监听器，不修改请求

const now = new Date();
console.log("AMap /v3/place/around detected at", now.toISOString());

// // 示例：只在 9 点前执行逻辑
// if (now.getHours() < 9) {
//   // 这里写你真正想做的事情
//   console.log("Before 9 AM, execute logic");
// }

// 一定要放行
$done({});
