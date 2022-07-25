import Loadable from "@/components/Loadable";

export const components = {
  Button: Loadable(() => import("@/components/Button")),
};
