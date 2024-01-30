<script setup lang="ts">
import Nav from '@/components/layout/Nav.vue'
import Side from '@/components/layout/Side.vue'
import Welcome from '@/components/layout/Welcome.vue'
import Server from '@/components/layout/Server.vue'
import type { ServerType } from '@/types/server.types'

import { ref } from 'vue'

const selected = ref()

function handleSelect(server: ServerType) {
  selected.value = server
}
</script>

<template>
  <header>
    <Nav />
  </header>
  <aside>
    <Side @select="handleSelect" />
  </aside>
  <main>
    <Welcome v-if="!selected" />
    <Server v-else :server="selected" />
  </main>
</template>

<style lang="scss">
// GLOBAL STYLES

html {
  font-size: 16px;

  scroll-behavior: smooth;
}

body {
  min-height: 100vh;

  background: var(--surface-0);
}

main {
  position: absolute;
  left: 240px;
  top: 60px;

  width: calc(100vw - 240px);

  padding: 32px;
}
</style>
