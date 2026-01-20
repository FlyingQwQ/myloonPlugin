// 读取请求 body
let requestBody = $request.body || ""; // POST 请求一般在 body 中
let requestUrl = $request.url || "";   // GET 请求可能在 URL 查询参数中

// 检查是否包含关键字 LocationLocusRequest
if (requestBody.includes("LocationLocusRequest") || requestUrl.includes("LocationLocusRequest")) {
    $notification.post(
        "高德接口检测",          // Title
        "LocationLocusRequest 触发", // SubTitle
        `请求内容或URL中包含关键字`  // Content
    );
}

// 一定要放行请求
$done({});
