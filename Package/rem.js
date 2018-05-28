;
(function (win, lib) {
    var doc = win.document
    var docEl = doc.documentElement
    var metaEl = doc.querySelector('meta[name="viewport"]')
    var dpr = 0
    var scale = 0
    var tid
    var flexible = lib.flexible || (lib.flexible = {})
    if (metaEl) {
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
        if (match) {
            scale = parseFloat(match[1])
            dpr = parseInt(1 / scale)
        }
    }
    docEl.setAttribute('data-dpr', dpr)

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width
        if (width / dpr > 540) {
            width = 540 * dpr
        }
        var rem = width / 10
        docEl.style.fontSize = rem + 'px'
        flexible.rem = win.rem = rem
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
    }, false)
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid)
            tid = setTimeout(refreshRem, 300)
        }
    }, false)
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px'
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = 12 * dpr + 'px'
        }, false)
    }
    refreshRem()
})(window, window['lib'] || (window['lib'] = {}))