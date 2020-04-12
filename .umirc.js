// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'mengma',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  routes: [
    { path: '/', component: './index' },
    { path: '/page1', component: './page1' },
    {
      path: '/login',
      component: '../layouts/login',
      routes: [{ path: '/login', component: './login' }],
    },
    { path: '/register', component: './login/registor' },
    { path: '/user1', component: './page1', Routes: ['src/pages/auth'] },
  ],
};
