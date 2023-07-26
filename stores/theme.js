import { ref } from "vue";
import { defineStore } from "pinia";
export const useThemeStore = defineStore("Theme", () => {
  // 主题修改---------------
  let theme = ref("light");
  let bgcolor1 = ref("");
  let bgcolor2 = ref("");
  let autoChangeBg = () => {
    if (theme.value == "dark") {
      bgcolor1.value = "rgba(37, 37, 37,1)";
      bgcolor2.value = "rgba(37, 37, 37,1)";
    } else {
      let hour = new Date().getHours();
      hour < 1
        ? ((bgcolor1.value = "rgba(222, 222, 222, 1)"),
          (bgcolor2.value = "rgba(214, 219, 222, 1)"))
        : hour < 3
        ? ((bgcolor1.value = "rgba(204, 208, 217, 1)"),
          (bgcolor2.value = "rgba(166, 180, 193, 1)"))
        : hour < 6
        ? ((bgcolor1.value = "rgba(217, 218, 222, 1)"),
          (bgcolor2.value = "rgba(188, 189, 209, 1)"))
        : hour < 7
        ? ((bgcolor1.value = "rgba(217, 218, 222, 1)"),
          (bgcolor2.value = "rgba(200, 208, 218, 1)"))
        : hour < 10
        ? ((bgcolor1.value = "rgba(235, 242, 234, 1)"),
          (bgcolor2.value = "rgba(221, 230, 223, 1)"))
        : hour < 12
        ? ((bgcolor1.value = "rgba(232, 241, 236, 1)"),
          (bgcolor2.value = "rgba(215, 235, 223, 1)"))
        : hour < 14
        ? ((bgcolor1.value = "rgba(234, 243, 240, 1)"),
          (bgcolor2.value = "rgba(214, 236, 231, 1)"))
        : hour < 15
        ? ((bgcolor1.value = "rgba(235, 240, 246, 1)"),
          (bgcolor2.value = "rgba(210, 238, 241, 1)"))
        : hour < 16
        ? ((bgcolor1.value = "rgba(235, 240, 246, 1)"),
          (bgcolor2.value = "rgba(210, 238, 241, 1)"))
        : hour < 17
        ? ((bgcolor1.value = "rgba(235, 240, 246, 1)"),
          (bgcolor2.value = "rgba(210, 238, 241, 1)"))
        : hour < 18
        ? ((bgcolor1.value = "rgba(231, 243, 245, 1)"),
          (bgcolor2.value = "rgba(249, 242, 232, 1)"))
        : hour < 22
        ? ((bgcolor1.value = "rgba(215, 212, 221, 1)"),
          (bgcolor2.value = "rgba(194, 196, 199, 1)"))
        : ((bgcolor1.value = "rgba(222, 222, 222, 1)"),
          (bgcolor2.value = "rgba(215, 220, 223, 1)"));
      console.log("自动计算时间了", hour);
    }
  };
  autoChangeBg();
  let changeTheme = () => {
    if (theme.value === "dark") {
      theme.value = "light";
      if (document && document.documentElement)
        document.documentElement.dataset.bsTheme = "light";
      autoChangeBg();
    } else {
      theme.value = "dark";
      if (document && document.documentElement)
        document.documentElement.dataset.bsTheme = "dark";
      autoChangeBg();
    }
  };
  return {
    bgcolor1,
    bgcolor2,
    theme,
    changeTheme,
  };
});
