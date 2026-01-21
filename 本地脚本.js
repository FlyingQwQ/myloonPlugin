const ReadKey = "oa_last_exec_time";

// 当前时间
const now = Date.now();

// 读取之前存入的时间
const lastTime = Number($persistentStore.read(ReadKey) || 0);

let messageTitle = "每日签到检测";
let messageBody = "";

if (lastTime) {
  const diffMinutes = (now - lastTime) / 1000 / 60;

  if (diffMinutes <= 30) {
    // 前 30 分钟内 → 已签到
    messageBody = "已签到 ✅\n上一次签到时间：" + new Date(lastTime).toLocaleString();
  } else {
    // 超过 30 分钟 → 未签到
    messageBody = "未签到 ⚠️\n上一次签到时间：" + new Date(lastTime).toLocaleString();
  }
} else {
  messageBody = "未找到历史签到记录";
}

// 发送通知
$notification.post(messageTitle, "", messageBody);

// 日志输出（可选）
console.log("cron 执行时间:", new Date(now).toLocaleString());
console.log("上一次签到时间:", lastTime ? new Date(lastTime).toLocaleString() : "未找到");

// 放行
$done({});