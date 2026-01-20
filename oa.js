console.log("====== AMap http-request Triggered ======");

// URL
console.log("URL:", $request.url);

// Method
console.log("Method:", $request.method);

// Headers
console.log("Headers:", JSON.stringify($request.headers, null, 2));

// Body（如果存在）
if ($request.body) {
  console.log("Body:", $request.body);
} else {
  console.log("Body: <EMPTY>");
}

console.log("=========================================");

$done({});




// 读取请求 body
let requestBody = $request.body || ""; // POST 请求一般在 body 中
let requestUrl = $request.url || "";   // GET 请求可能在 URL 查询参数中

// 检查是否包含关键字 LocationLocusRequest
if (requestBody.includes("LocationLocusRequest") || requestUrl.includes("LocationLocusRequest")) {
    $notification.post(
        "检测到签到页面",          // Title
        "LocationLocusRequest 触发", // SubTitle
        `请求内容或URL中包含关键字`  // Content
    );
}

// 一定要放行请求
$done({});
