import { createApp } from "vue";
import { U } from "@adc/vigour-ui/lib/spl";
// 只使用@adc/vigour-ui能力不用具体组件只需引入core.css即可。
// 否则按需引入 import "@adc/vigour-ui/lib/style/index.css";
import "@adc/vigour-ui/lib/style/core.css";
import router from "../router";
import App from "./app";
import { initDirectives } from "../directives";
import { initComponents } from "../components";
import "../assets/style/theme/default.css";
  import { initStore } from "../store";

// 加载ADC主题样式变量
U.loadCurrentTheme().then(() => {
  // 加载自定义主题样式变量
  let theme = U.getCurrentThemeName();
  if (theme && theme !== "light") {
    let id = "demo-theme-style";
    let styleTag = document.getElementById(id);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.setAttribute("id", id);
      document.body.appendChild(styleTag);
    }
    styleTag.innerText = import(`../assets/style/theme/${theme}.css`);
  }
});

const i18n = U.initI18n();

const app = createApp(App);

app.use(i18n)
  .use(router);

initComponents(app);
initDirectives(app);
initStore(app);

app.mount("#app");