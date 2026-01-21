const TIME_KEY = "oa_last_exec_time";
const INTERVAL = 10 * 1000; // 10 秒

const now = Date.now();
const lastTime = Number($peristentStore.read(TIME_KEY) || 0);

if (now - lastTime > INTERVAL) {
  $notification.post(
    "检测到签到页面",
    "",
    "触发时间: " + new Date(now).toLocaleString()
  );

  // 只有真正通知了，才写时间
  $peristentStore.write(String(now), TIME_KEY);
} else {
  console.log("命中频控，跳过通知");
}

$done({});
