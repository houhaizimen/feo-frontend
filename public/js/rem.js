!(function () {
  function isMobile() {
    var isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) != null
    var isVPhone = window.name === 'mobile'
    return isPhone || isVPhone
  }
  function htmlFontSize () {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const parts = location.pathname.replace(/(^\/|\/$)/g, '').split('/')
    const html = document.querySelector('html')
    if (isMobile()) {
      if (parts[0] !== 'm') {
        location.href = ['', 'm'].concat(parts).join('/')
      }
      const width = w > 750 ? 750 : w
      const fz = ~~(width * 100000 / 37.5) / 10000
      html.style.cssText = 'font-size: ' + fz + 'px'
      const realfz = ~~(+window.getComputedStyle(html).fontSize.replace('px', '') * 10000) / 10000
      html.classList.add('mobile-mode')
      if (fz !== realfz) {
        html.style.cssText = 'font-size: ' + fz * (fz / realfz) + 'px'
      }
    } else {
      if (parts[0] === 'm') {
        if (parts.length > 1) location.href = [''].concat(parts.slice(1)).join('/') // 保证跳转的时候页面数据一致
        else location.href = '/'
      }
      const width = w > 1920 ? 1920 : w < 1200 ? 1200 : w
      const fz = ~~(width * 100000 / 192) / 10000
      html.style.cssText = 'font-size: ' + fz + 'px'
    }
  }
  
  window.addEventListener(
    'resize',
    (function () {
      htmlFontSize()
      return arguments.callee
    })(),
    false
  )
})()
