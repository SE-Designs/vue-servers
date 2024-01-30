<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue'
</script>

<template>
  <nav class="nav">
    <h1>VueServers</h1>
    <a href="https://github.com/SE-Designs/vue-servers">
      <Button>
        <GithubIcon />
      </Button>
    </a>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 60px;

  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #333;
}
</style>
