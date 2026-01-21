// const requestUrl = $request.url || "";
// console.log("URL:", requestUrl);

// Method
// console.log("Method:", $request.method);

// Headers
// console.log("Headers:", JSON.stringify($request.headers, null, 2));


const TIME_KEY = "oa_last_exec_time";

// 读取上一次
const lastTime = $peristentStore.read(TIME_KEY);

if (lastTime) {
  console.log("上一次执行时间:", new Date(Number(lastTime)).toLocaleString());
} else {
  console.log("第一次执行，尚无历史时间");
}

// 覆盖写入当前时间
const now = Date.now();
$peristentStore.write(String(now), TIME_KEY);

console.log("本次执行时间:", new Date(now).toLocaleString());




$notification.post(
  "检测到签到页面",
  "",
  "当前时间: " + new Date(now).toLocaleString(),
);

// 一定要放行请求
$done({});
