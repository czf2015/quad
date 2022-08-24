import loadable from "@/plugins/loadable";

export default [
  {
    path: "/",
    redirect: "/low-code-editor",
  },
  {
    path: "/demo/:componentName",
    component: loadable(() => import("@/pages/demo")),
  },
  {
    path: "/low-code-editor",
    component: loadable(() => import("@/pages/low-code-editor")),
  },
  {
    path: '/publish-console',
    component: loadable(() => import("@/pages/publish-console")),
  },
  {
    key: 'publish-page',
    component: loadable(() => import("@/pages/publish-page")),
  }
];
