<script setup lang="ts">
import servers from '@/data/servers'
import LaptopIcon from '@/components/icons/LaptopIcon.vue'
import CloudIcon from '@/components/icons/CloudIcon.vue'
import ComputerTowerIcon from '@/components/icons/ComputerTowerIcon.vue'
import UserIcon from '../icons/UserIcon.vue'
import type { ServerType } from '@/types/server.types'

const emit = defineEmits(['select'])

function handleSelect(server: ServerType) {
  emit('select', server)
}
</script>
<template>
  <div class="aside">
    <div class="aside__list">
      <h2>Available servers:</h2>
      <div
        class="aside__item"
        v-for="server in servers"
        :key="server.customer_id"
        @click="handleSelect(server)"
      >
        <div class="aside__item-text">
          <UserIcon />
          <p>{{ server.customer_id }}</p>
        </div>
        <div class="aside__item-tags">
          <LaptopIcon v-if="server.server_type === 'vds'" />
          <CloudIcon v-else-if="server.server_type === 'hosting'" />
          <ComputerTowerIcon v-else-if="server.server_type === 'dedicated'" />
        </div>
      </div>
    </div>
    <hr />
    <div class="aside__bottom">
      <a href="https://github.com/SE-Designs/vue-servers">
        <small>Built by SE-Designs</small>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aside {
  position: fixed;
  left: 0;
  top: 60px;

  width: 240px;
  height: fit-content;
  min-height: calc(100vh - 60px);

  padding: 32px;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #333;

  &__list {
    display: flex;
    flex-direction: column;
  }

  & h2 {
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 18px;
  }

  &__item {
    width: 100%;
    padding: 8px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--surface-400);
    background-color: var(--surface-50);
    border-radius: var(--border-radius);

    margin-bottom: 12px;

    transition: all 0.2s;

    cursor: pointer;

    font-weight: 500;

    &:hover {
      opacity: 0.8;
    }

    &-text {
      display: flex;
      align-items: center;

      & p {
        margin-left: 4px;
      }
    }

    &-tags {
      max-height: 16px;
    }
  }

  & hr {
    width: 100%;
    height: 1px;

    margin: 24px 0;

    color: #333;
    background-color: #333;
  }

  &__bottom {
    & small {
      opacity: 0.4;

      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
