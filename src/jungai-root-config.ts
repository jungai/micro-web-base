import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@jungai/micro-vue3",
  app: () => System.import("@jungai/micro-vue3"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
