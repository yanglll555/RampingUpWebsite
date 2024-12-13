import { LOCALE_NAME } from './constants'

const tools = {
  /**
   * open url in new tab
   * 新标签页打开网站
   *
   * @param {string} url
   */
  openUrl(url) {
    const a = document.createElement('a'),
      body = document.body
    a.href = url
    a.target = '_blank'
    a.style.display = 'none'
    body.appendChild(a)
    a.click()
    body.removeChild(a)
  },

  /**
   * set scroll bar width
   * 获取并设置滚动条的宽度
   */
  setScrollWidth() {
    // Create a temporary div container and append it into the body
    // 生成一个临时的 div 加入 body
    const container = document.createElement('div')
    container.style.overflow = 'scroll'
    document.body.appendChild(container)

    // Add ad fake div inside the container
    // 生成一个假的 div 放入 container
    const inner = document.createElement('div')
    container.appendChild(inner)

    // Calculate the width based on the container width minus its child width
    // 计算两者的宽度差
    const width = container.offsetWidth - inner.offsetWidth
    document.body.removeChild(container)

    // set scroll width
    // 设置滚动条宽度
    document.documentElement.style.setProperty('--scrollbarWidth', `${width}px`)
  },

  /**
   * get or set locale
   * 获取或者设置语言
   */
  triggleLocale(locale) {
    return locale ? localStorage.setItem(LOCALE_NAME, locale) : localStorage.getItem(LOCALE_NAME)
  },

  /**
   * date format
   * 时间格式转化
   */
  dateFormat(inputDateString) {
    // 创建 Date 对象，将输入的字符串解析为日期
    const date = new Date(inputDateString);

    // 月份名称映射表
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // 获取年、月、日
    const year = date.getFullYear(); // 年份
    const monthIndex = date.getMonth(); // 月份，从 0 开始
    let day = date.getDate(); // 日
    day = day < 10 ? `0${day}` : day

    // 根据月份索引获取月份名称
    const monthName = monthNames[monthIndex];

    // 构建转换后的日期格式
    const formattedDate = `${monthName} ${day}, ${year}`;
    return formattedDate
  },

  /**
   * throttle
   * 节流函数
   */
  throttle(func, wait) {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            func.apply(this, args);
        }
    };
  },

  /**
   * daysAgo
   * 计算多少天以前
   */
  calculateDaysAgo(dateString) {
    // 获取当前日期
    const currentDate = new Date();
    
    // 将传入的日期字符串转换为日期对象
    const inputDate = new Date(dateString);
    
    // 计算时间差，得到的结果是毫秒
    const timeDifference = currentDate - inputDate;
    
    // 将毫秒转换为天数
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    // 返回几天前
    return `${daysDifference} Days ago`;
  }
}

export default tools
