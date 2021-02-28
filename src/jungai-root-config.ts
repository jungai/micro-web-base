import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@jungai/micro-vue3",
  app: () => System.import("@jungai/micro-vue3"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@jungai/micro-react",
  app: () => System.import("@jungai/micro-react"),
  activeWhen: ["/react"],
});

start({
  urlRerouteOnly: true,
});
