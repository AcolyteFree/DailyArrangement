/**
 * 工具类
 */


/**
 * 对某个对象进行排序
 * @param {Object} object 基本对象
 *
 */
function sortObjectKey (object) {
    let sortkeys = Object.keys(object).sort()
    let retObj = {}
    sortkeys.forEach(item => {
        retObj[item] = object[item]
    })
    return retObj
}


/**
 * 求下一个月第一天
 * @param {Date|String} date 日期
 */
function nextMonth (date) {
    let nowDate, next
    if (date instanceof Date) {
        nowDate = date
    } else {
        nowDate = new Date(date)
    }
    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth()
    if (nowDate.getMonth === 11) {
        // 月底， 选择下明年
        next = new Date(nowYear + 1, 1, 1)
    } else {
        next = new Date(nowYear, nowMonth + 1, 1)
    }
    return next
}


/**
 * 获得cookie
 * @param name
 * @returns {string}
 */
function getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
    return ''
}

/**
 * 设置cookie
 * @param name
 * @param value
 * @param expiresHours
 */
function setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + exdays * 60 * 60 * 1000)
    // var expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue
}


/**
 * 将一个日期分解为年，月，日
 * @param {Date|String} date 日期
 *
 */
function resolveDate (date) {
    if (typeof date === 'string') date = parseInt(date)
    if (typeof date === 'number') date = new Date(date)
    if (date instanceof Date) {
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            date: date.getDate()
        }
    } else {
        return null
    }
}


/**
 * 返回 2017-08-18 的日期格式
 * @param {Object} dateObj  分解后的日期格式
 */
function dateFormatBar (dateObj) {
    dateObj = resolveDate(dateObj)
    // debugger
    let month = dateObj.month
    let date = dateObj.date
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    return dateObj.year + '-' + month + '-' + date
}


/**
 * 返回 08-18 的日期格式
 * @param {Object} dateObj  分解后的日期格式
 */
function dateFormat (dateObj) {
    dateObj = resolveDate(dateObj)
    // debugger
    let month = dateObj.month + 1
    let date = dateObj.date
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    return month + '-' + date
}


/**
 * 返回 当前日期的下一天 2017-10-30  => 2017/10/31
 * @param {*} date
 */
function dateNextDay (date) {
    let mt = date.replace(/-/g, '/')
    let day = 24 * 60 * 60 * 1000
    let mtms = new Date(mt).getTime()
    return dateFormatBar(mtms + day)
}


/**
 * 返回 20170818 的日期格式
 * @param {Object} dateObj  分解后的日期格式
 */
function dateFormatMMdd (dateObj) {
    dateObj = resolveDate(dateObj)
    // debugger
    let month = dateObj.month + 1
    let date = dateObj.date
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    return dateObj.year + '' + month + '' + date
}


/**
 * 获取参数
 * @param name
 * @returns {null}
 */
function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r !== null) return unescape(r[2])
    return null
}


/**
 * 将非正常号码，解析为正常号码
 * @param {String | Number} phone  电话号码， 有多种形式，可能有 189-5164-0521 189 5164 0521
 */
function parseTell (phone) {
    phone = phone.replace('+86', '')
    phone = phone.replace(/\s/g, '')
    phone = phone.replace(/-/g, '')
    phone = phone.replace(/_/g, '')
    return phone
}


/**
 * 求明天
 * @param {Date} date 日期对象
 */
function tomorrow (date) {
    if (date instanceof Date) {
        const cloneDate = new Date(date.toString())
        cloneDate.setDate(cloneDate.getDate() + 1)
        return cloneDate
    }
    throw TypeError('请输入日期对象')
}


/**
 * 请时间的 Year-month-date 格式
 * @param {Date} date 日期对象
 */
function dateHyphen (date) {
    if (date instanceof Date) {
        return (
            date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        )
    }
    throw TypeError('请输入日期对象')
}


/**
 * 返回 当前日期的后三周 2017-10-1  => 2017/10/22
 * @param {*} date
 */
function dateNextThreeWeek (date) {
    let day = 24 * 60 * 60 * 1000 * 21
    let mtms = new Date(date).getTime()
    return mtms + day
}


// 浮点数加法运算
function FloatAdd (arg1, arg2) {
    var r1, r2, m
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}


// 浮点数减法运算
function FloatSub (arg1, arg2) {
    var r1, r2, m, n
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    // 动态控制精度长度
    n = (r1 = r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
}


// 浮点数乘法运算
function FloatMul (arg1, arg2) {
    var m = 0
    var s1 = arg1.toString()
    var s2 = arg2.toString()
    try {
        m += s1.split('.')[1].length
    } catch (e) {}
    try {
        m += s2.split('.')[1].length
    } catch (e) {}
    return (
        Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
    )
}


/**
 * 获取两个数值的小数点后面数字的长度
 *
 * @inner
 * @param {number} num1 第一个数值
 * @param {number} num2 第二个数值
 * @return {Array} 每个数值小数点后面数字的个数
 */
function decimalLength (num1, num2) {
    var length1
    var length2
    try {
        length1 = num1.toString().split('.')[1].length
    } catch (e) {
        length1 = 0
    }
    try {
        length2 = num2.toString().split('.')[1].length
    } catch (e) {
        length2 = 0
    }
    return [length1, length2]
}


/**
 * 两个浮点数相除
 *
 * @public
 * @param {number} num1 第一个数值
 * @param {number} num2 第二个数值
 * @return {number} 相除的结果
 */
function computeDivide (num1, num2) {
    var result = decimalLength(num1, num2)
    var length1 = result[0]
    var length2 = result[1]
    var integer1 = +num1.toString().replace('.', '')
    var integer2 = +num2.toString().replace('.', '')

    // 默认保留小数点最长的个数
    return integer1 / integer2 * Math.pow(10, length2 - length1)
}


/**
 * 下载excel 需要后端提供接口
 * @param {*} url
 */
function downLoadUrl (url) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
        document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
}

/**
 * 下载excel txt
 *  不需要接口 ,利用blob对象
 * @param {*} url
 */
function dataToTxt(){
    var content = this.getTxt()
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = 'xxxx';
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content],{type:"text/plain",endings:"native"});
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}