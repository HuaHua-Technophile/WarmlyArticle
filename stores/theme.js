import {
  ref
} from "vue";
import {
  defineStore
} from "pinia";
export const useThemeStore = defineStore("Theme", () => {
  // 主题修改---------------
  let theme = ref("light");
  let changeTheme = () => {
    if (theme.value === "dark") {
      theme.value = "light";
      if (document && document.documentElement)
        document.documentElement.dataset.bsTheme = "light";
    } else {
      theme.value = "dark";
      if (document && document.documentElement)
        document.documentElement.dataset.bsTheme = "dark";
    }
  };
  return {
    theme,
    changeTheme,
  };
});