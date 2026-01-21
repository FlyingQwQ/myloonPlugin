// 固定存储 key
const TIME_KEY = "oa_last_exec_time";

// 当前时间
const now = Date.now();
const nowText = new Date(now).toLocaleString();

// 写入（不存在则创建，存在则覆盖）
$peristentStore.write(String(now), TIME_KEY);

// 日志（可选）
console.log("oa.js 执行，写入时间:", nowText);
console.log("URL:", $request.url);

// 通知提示
$notification.post(
  "脚本已执行",
  "时间已记录",
  nowText
);

// 放行请求
$done({});
