export default ({ app }) => {
  console.log(process.client)
  if (!process.client) return;

  let hasRedirected = false;

  app.router.afterEach((to, from) => {
    // 避免多次重定向
    if (hasRedirected) return;
    hasRedirected = true;

    // 如果是浏览器刷新（from.name === undefined），且当前路由有 query 参数
    if (to.path === '/services/overview' && !from.name && Object.keys(to.query).length > 0) {
      // 清空当前路由的 query 参数，仅在浏览器刷新时生效
      app.router.replace({ ...to, query: {} });
    }
  });
};
