export function useNav() {
  const isScrolled = ref(false)
  const menuOpen = ref(false)

  const onScroll = () => { isScrolled.value = window.scrollY > 60 }
  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { isScrolled, menuOpen }
}
