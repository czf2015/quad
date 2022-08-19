import loadable from "@/plugins/loadable";

export default [
  {
    path: "/",
    redirect: "/low-code-editor",
  },
  {
    path: "/low-code-editor",
    component: loadable(() => import("@/pages/low-code-editor")),
  },
  {
    key: 'custom-page',
    component: loadable(() => import("@/pages/custom-page")),
  }
];
