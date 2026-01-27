// 假期工具与签到检测整合脚本
// 适用于移动设备脚本引擎，无需外部引入js

// === 配置部分 ===
// 在此处粘贴ICS文件的内容
const ICS_CONTENT = `BEGIN:VCALENDAR
PRODID:-//ShuYZ.com//China Public Holidays 2.0//CN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:ShuYZ中国节假日
X-WR-TIMEZONE:Asia/Shanghai
X-WR-CALDESC:2023~2026年中国放假、调休和补班日历 更新时间2025-11-04 23:59:04
BEGIN:VTIMEZONE
TZID:Asia/Shanghai
X-LIC-LOCATION:Asia/Shanghai
BEGIN:STANDARD
TZOFFSETFROM:+0800
TZOFFSETTO:+0800
TZNAME:CST
DTSTART:19700101T000000
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260101
DTEND;VALUE=DATE:20260102
DTSTAMP:20260101T000000Z
UID:20260101T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:一、元旦：1月1日（周四）至3日（周六）放假调休，共3天。1月4日（周日）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:元旦 假期 第1天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260102
DTEND;VALUE=DATE:20260103
DTSTAMP:20260102T000000Z
UID:20260102T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:一、元旦：1月1日（周四）至3日（周六）放假调休，共3天。1月4日（周日）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:元旦 假期 第2天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260103
DTEND;VALUE=DATE:20260104
DTSTAMP:20260103T000000Z
UID:20260103T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:一、元旦：1月1日（周四）至3日（周六）放假调休，共3天。1月4日（周日）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:元旦 假期 第3天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART:20260104T090000
DTEND:20260104T180000
DTSTAMP:20260104T000000Z
UID:20260104T000001_compensateday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:一、元旦：1月1日（周四）至3日（周六）放假调休，共3天。1月4日（周日）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:元旦 补班 第1天/共1天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：元旦 补班 第1天/共1天
END:VALARM
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260215
DTEND;VALUE=DATE:20260216
DTSTAMP:20260215T000000Z
UID:20260215T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第1天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260216
DTEND;VALUE=DATE:20260217
DTSTAMP:20260216T000000Z
UID:20260216T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第2天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260217
DTEND;VALUE=DATE:20260218
DTSTAMP:20260217T000000Z
UID:20260217T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第3天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260218
DTEND;VALUE=DATE:20260219
DTSTAMP:20260218T000000Z
UID:20260218T000001_holiday4@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第4天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260219
DTEND;VALUE=DATE:20260220
DTSTAMP:20260219T000000Z
UID:20260219T000001_holiday5@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第5天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260220
DTEND;VALUE=DATE:20260221
DTSTAMP:20260220T000000Z
UID:20260220T000001_holiday6@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第6天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260221
DTEND;VALUE=DATE:20260222
DTSTAMP:20260221T000000Z
UID:20260221T000001_holiday7@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第7天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260222
DTEND;VALUE=DATE:20260223
DTSTAMP:20260222T000000Z
UID:20260222T000001_holiday8@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第8天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260223
DTEND;VALUE=DATE:20260224
DTSTAMP:20260223T000000Z
UID:20260223T000001_holiday9@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:春节 假期 第9天/共9天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART:20260214T090000
DTEND:20260214T180000
DTSTAMP:20260214T000000Z
UID:20260214T000001_compensateday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:春节 补班 第1天/共2天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：春节 补班 第1天/共2天
END:VALARM
END:VEVENT
BEGIN:VEVENT
DTSTART:20260228T090000
DTEND:20260228T180000
DTSTAMP:20260228T000000Z
UID:20260228T000001_compensateday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:二、春节：2月15日（农历腊月二十八、周日）至23日（农历正月初七、周一）放假调休，共9天。2月14日（周六）、2月28日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:春节 补班 第2天/共2天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：春节 补班 第2天/共2天
END:VALARM
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260404
DTEND;VALUE=DATE:20260405
DTSTAMP:20260404T000000Z
UID:20260404T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:三、清明节：4月4日（周六）至6日（周一）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:清明节 假期 第1天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260405
DTEND;VALUE=DATE:20260406
DTSTAMP:20260405T000000Z
UID:20260405T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:三、清明节：4月4日（周六）至6日（周一）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:清明节 假期 第2天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260406
DTEND;VALUE=DATE:20260407
DTSTAMP:20260406T000000Z
UID:20260406T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:三、清明节：4月4日（周六）至6日（周一）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:清明节 假期 第3天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260501
DTEND;VALUE=DATE:20260502
DTSTAMP:20260501T000000Z
UID:20260501T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:劳动节 假期 第1天/共5天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260502
DTEND;VALUE=DATE:20260503
DTSTAMP:20260502T000000Z
UID:20260502T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:劳动节 假期 第2天/共5天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260503
DTEND;VALUE=DATE:20260504
DTSTAMP:20260503T000000Z
UID:20260503T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:劳动节 假期 第3天/共5天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260504
DTEND;VALUE=DATE:20260505
DTSTAMP:20260504T000000Z
UID:20260504T000001_holiday4@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:劳动节 假期 第4天/共5天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260505
DTEND;VALUE=DATE:20260506
DTSTAMP:20260505T000000Z
UID:20260505T000001_holiday5@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:劳动节 假期 第5天/共5天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART:20260509T090000
DTEND:20260509T180000
DTSTAMP:20260509T000000Z
UID:20260509T000001_compensateday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:四、劳动节：5月1日（周五）至5日（周二）放假调休，共5天。5月9日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:劳动节 补班 第1天/共1天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：劳动节 补班 第1天/共1天
END:VALARM
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260619
DTEND;VALUE=DATE:20260620
DTSTAMP:20260619T000000Z
UID:20260619T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:五、端午节：6月19日（周五）至21日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:端午节 假期 第1天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260620
DTEND;VALUE=DATE:20260621
DTSTAMP:20260620T000000Z
UID:20260620T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:五、端午节：6月19日（周五）至21日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:端午节 假期 第2天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260621
DTEND;VALUE=DATE:20260622
DTSTAMP:20260621T000000Z
UID:20260621T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:五、端午节：6月19日（周五）至21日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:端午节 假期 第3天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260925
DTEND;VALUE=DATE:20260926
DTSTAMP:20260925T000000Z
UID:20260925T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:六、中秋节：9月25日（周五）至27日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:中秋节 假期 第1天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260926
DTEND;VALUE=DATE:20260927
DTSTAMP:20260926T000000Z
UID:20260926T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:六、中秋节：9月25日（周五）至27日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:中秋节 假期 第2天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20260927
DTEND;VALUE=DATE:20260928
DTSTAMP:20260927T000000Z
UID:20260927T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:六、中秋节：9月25日（周五）至27日（周日）放假，共3天。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:中秋节 假期 第3天/共3天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261001
DTEND;VALUE=DATE:20261002
DTSTAMP:20261001T000000Z
UID:20261001T000001_holiday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第1天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261002
DTEND;VALUE=DATE:20261003
DTSTAMP:20261002T000000Z
UID:20261002T000001_holiday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第2天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261003
DTEND;VALUE=DATE:20261004
DTSTAMP:20261003T000000Z
UID:20261003T000001_holiday3@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第3天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261004
DTEND;VALUE=DATE:20261005
DTSTAMP:20261004T000000Z
UID:20261004T000001_holiday4@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第4天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261005
DTEND;VALUE=DATE:20261006
DTSTAMP:20261005T000000Z
UID:20261005T000001_holiday5@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第5天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261006
DTEND;VALUE=DATE:20261007
DTSTAMP:20261006T000000Z
UID:20261006T000001_holiday6@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第6天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART;VALUE=DATE:20261007
DTEND;VALUE=DATE:20261008
DTSTAMP:20261007T000000Z
UID:20261007T000001_holiday7@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:国庆节 假期 第7天/共7天
TRANSP:TRANSPARENT
END:VEVENT
BEGIN:VEVENT
DTSTART:20260920T090000
DTEND:20260920T180000
DTSTAMP:20260920T000000Z
UID:20260920T000001_compensateday1@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:国庆节 补班 第1天/共2天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：国庆节 补班 第1天/共2天
END:VALARM
END:VEVENT
BEGIN:VEVENT
DTSTART:20261010T090000
DTEND:20261010T180000
DTSTAMP:20261010T000000Z
UID:20261010T000001_compensateday2@shuyz.com
CREATED:20251104T235904Z
DESCRIPTION:七、国庆节：10月1日（周四）至7日（周三）放假调休，共7天。9月20日（周日）、10月10日（周六）上班。\n\n放假通知: https://www.gov.cn/zhengce/content/202511/content_7047090.htm
LAST-MODIFIED:20251104T235904Z
SEQUENCE:0
STATUS:TENTATIVE
SUMMARY:国庆节 补班 第2天/共2天
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
DESCRIPTION:补班提醒：国庆节 补班 第2天/共2天
END:VALARM
END:VEVENT
END:VCALENDAR`;

// === 功能函数 ===

/**
 * 检查指定日期是否是假期
 * @param {string} dateStr - 日期字符串，格式：YYYY-MM-DD
 * @returns {boolean} - 是否是假期
 */
function isHoliday(dateStr) {
    const dateKey = dateStr.replace(/-/g, '');
    const holidayPattern = 'DTSTART;VALUE=DATE:' + dateKey;
    return ICS_CONTENT.includes(holidayPattern) && ICS_CONTENT.includes('假期');
}

/**
 * 检查指定日期是否是补班
 * @param {string} dateStr - 日期字符串，格式：YYYY-MM-DD
 * @returns {boolean} - 是否是补班
 */
function isCompensatedWorkday(dateStr) {
    const dateKey = dateStr.replace(/-/g, '');
    const compensatedPattern = 'DTSTART:' + dateKey + 'T';
    return ICS_CONTENT.includes(compensatedPattern) && ICS_CONTENT.includes('补班');
}

/**
 * 检查指定日期是否是周末
 * @param {string} dateStr - 日期字符串，格式：YYYY-MM-DD
 * @returns {boolean} - 是否是周末
 */
function isWeekend(dateStr) {
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}

/**
 * 检查指定日期的状态
 * @param {string} dateStr - 日期字符串，格式：YYYY-MM-DD
 * @returns {string} - 日期状态
 */
function checkDateStatus(dateStr) {
    if (isHoliday(dateStr)) {
        return '假期';
    } else if (isCompensatedWorkday(dateStr)) {
        return '补班（上班日）';
    } else if (isWeekend(dateStr)) {
        return '周末（休息）';
    } else {
        return '工作日（上班）';
    }
}

/**
 * 提取指定年份的假期信息
 * @param {number} year - 年份
 * @returns {Array} - 假期信息数组
 */
function extractHolidaysByYear(year) {
    const yearStr = year.toString();
    const holidays = [];
    
    // 按事件分割ICS内容
    const events = ICS_CONTENT.split('BEGIN:VEVENT');
    
    events.forEach(event => {
        if (event.includes('END:VEVENT') && event.includes('假期')) {
            // 提取开始日期
            const startMatch = event.match(/DTSTART(?:;VALUE=DATE)?:([^\n]+)/);
            if (startMatch) {
                const startDate = startMatch[1].trim();
                // 检查是否是指定年份
                if (startDate.includes(yearStr)) {
                    // 提取摘要
                    const summaryMatch = event.match(/SUMMARY:([^\n]+)/);
                    if (summaryMatch) {
                        const summary = summaryMatch[1].trim();
                        holidays.push({
                            date: startDate,
                            summary: summary
                        });
                    }
                }
            }
        }
    });
    
    return holidays;
}

/**
 * 生成指定年份的假期日历
 * @param {number} year - 年份
 * @returns {string} - 日历字符串
 */
function generateHolidayCalendar(year) {
    const holidays = extractHolidaysByYear(year);
    let calendar = `\n${year}年假期日历\n\n`;
    
    // 按月份分组
    const holidaysByMonth = {};
    holidays.forEach(holiday => {
        if (holiday.date) {
            let month;
            if (holiday.date.length === 8) {
                // 日期格式：YYYYMMDD
                month = holiday.date.substring(4, 6);
            } else if (holiday.date.length === 15) {
                // 日期时间格式：YYYYMMDDTHHMMSS
                month = holiday.date.substring(4, 6);
            }
            
            if (month) {
                if (!holidaysByMonth[month]) {
                    holidaysByMonth[month] = [];
                }
                holidaysByMonth[month].push(holiday);
            }
        }
    });
    
    // 月份名称
    const monthNames = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    
    // 遍历月份输出
    for (let month = 1; month <= 12; month++) {
        const monthStr = month.toString().padStart(2, '0');
        const monthHoliday = holidaysByMonth[monthStr];
        
        if (monthHoliday && monthHoliday.length > 0) {
            calendar += `${monthNames[month]}\n`;
            calendar += '====================\n';
            
            monthHoliday.forEach(holiday => {
                let date = '';
                if (holiday.date.length === 8) {
                    // 日期格式：YYYYMMDD
                    date = holiday.date.substring(6, 8);
                } else if (holiday.date.length === 15) {
                    // 日期时间格式：YYYYMMDDTHHMMSS
                    date = holiday.date.substring(6, 8);
                }
                
                calendar += `${date}日: ${holiday.summary}\n`;
            });
            
            calendar += '\n';
        }
    }
    
    return calendar;
}

/**
 * 显示帮助信息
 */
function showHelp() {
    console.log('假期工具使用说明：');
    console.log('1. 检查指定日期状态：checkDate("YYYY-MM-DD")');
    console.log('   例如：checkDate("2026-02-15")');
    console.log('');
    console.log('2. 生成指定年份假期日历：generateCalendar(年份)');
    console.log('   例如：generateCalendar(2026)');
    console.log('');
    console.log('3. 示例：');
    console.log('   checkDate("2026-02-15") // 检查2026年2月15日是否是假期');
    console.log('   generateCalendar(2026) // 生成2026年的假期日历');
}

/**
 * 检查指定日期并显示结果
 * @param {string} dateStr - 日期字符串，格式：YYYY-MM-DD
 */
function checkDate(dateStr) {
    if (!dateStr) {
        console.log('请输入日期，格式：YYYY-MM-DD');
        return;
    }
    
    // 检查日期格式
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateStr)) {
        console.log('日期格式错误，请使用YYYY-MM-DD格式');
        return;
    }
    
    const status = checkDateStatus(dateStr);
    console.log(`${dateStr} 是 ${status}`);
}

/**
 * 生成指定年份的假期日历并显示
 * @param {number} year - 年份
 */
function generateCalendar(year) {
    if (!year) {
        console.log('请输入年份');
        return;
    }
    
    const calendar = generateHolidayCalendar(year);
    console.log(calendar);
}

// === 签到检测功能 ===

const ReadKey = "oa_last_exec_time";

// 当前时间
const now = Date.now();

// 读取之前存入的时间
const lastTime = Number($persistentStore.read(ReadKey) || 0);

let messageTitle = "每日签到检测";
let messageBody = "";

// 获取当前日期
const today = new Date();
const todayStr = today.getFullYear() + '-' + 
                (today.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                today.getDate().toString().padStart(2, '0');

// 检查今天的状态
const todayStatus = checkDateStatus(todayStr);

// 根据日期状态调整消息
if (todayStatus.includes('假期') || todayStatus.includes('周末')) {
  messageTitle = "签到提醒（休息日）";
  messageBody = "今日状态：" + todayStatus + "\n温馨提示：今天是休息日，无需签到";
} else {
  // 工作日或补班日，检查签到状态
  if (lastTime) {
    const diffMinutes = (now - lastTime) / 1000 / 60;

    if (diffMinutes <= 30) {
      // 前 30 分钟内 → 已签到
      messageBody = "已签到 ✅";
    } else {
      // 超过 30 分钟 → 未签到
      messageBody = "未签到 ⚠️";
    }
  } else {
    messageBody = "未找到历史签到记录";
  }

  // 添加日期状态信息
  messageBody += "\n今日状态：" + todayStatus;

  // 补班日提示
  if (todayStatus.includes('补班')) {
    messageTitle = "签到提醒（补班日）";
    messageBody += "\n温馨提示：今天是补班日，记得签到";
  }
}

// 构建通知内容
let subTitle = "";
let content = messageBody;

// 根据通知类型调整子标题
if (messageTitle.includes('休息日')) {
  subTitle = "无需签到";
} else if (messageTitle.includes('补班日')) {
  subTitle = "记得签到";
} else if (messageBody.includes('已签到')) {
  subTitle = "签到状态";
} else if (messageBody.includes('未签到')) {
  subTitle = "签到提醒";
} else if (messageBody.includes('未找到历史签到记录')) {
  subTitle = "首次运行";
}

// 发送通知
$notification.post(messageTitle, subTitle, content);

// 日志输出（可选）
console.log("cron 执行时间:", new Date(now).toLocaleString());
console.log("上一次签到时间:", lastTime ? new Date(lastTime).toLocaleString() : "未找到");
console.log("今日状态:", todayStatus);

// 放行
$done({});
