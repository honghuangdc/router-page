declare namespace RouterPage {
  /** 根路由 */
  type RootRouteKey = 'root';

  /** 未找到路由(捕获无效路径的路由) */
  type NotFoundRouteKey = 'not-found';

  /** 页面路由 */
  type PageRouteKey =
    | '404'
    | 'about'
    | 'demo'
    | 'home'
    | 'home_first'
    | 'home_four'
    | 'home_second'
    | 'home_third'
    | 'login';
}
