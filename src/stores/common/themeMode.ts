import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeModeStore = defineStore('themeMode', () => {
  // state
  const themeMode = ref<{}|null>(null)

  // getters
  const getThemeMode = computed(() => themeMode.value)

  // actions
  function setThemeMode(mode: {}|null) {
    themeMode.value = mode
  }

  return { themeMode, getThemeMode, setThemeMode }
})
