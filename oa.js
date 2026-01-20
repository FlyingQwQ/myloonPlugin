console.log("🔥 AMap Script Triggered");

$notification.post(
  "OA",      // Title：通知标题
  "SubTitle 可以为空",  // SubTitle：子标题
  "Content 是详细内容" // Content：详细内容
);

$done({});
