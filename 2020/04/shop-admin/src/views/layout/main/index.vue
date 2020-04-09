<template>
  <section>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'layoutMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>
