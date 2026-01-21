const requestUrl = $request.url || "";
console.log("URL:", requestUrl);

// Method
console.log("Method:", $request.method);

// Headers
console.log("Headers:", JSON.stringify($request.headers, null, 2));


$notification.post(
  "检测到签到页面",
  "触发",
  "请求 URL 或 Body 中包含关键字"
);

// 一定要放行请求
$done({});
