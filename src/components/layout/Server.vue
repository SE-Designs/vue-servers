<script setup lang="ts">
import serverTypes from '@/data/const/types'
import UserIcon from '@/components/icons/UserIcon.vue'
import servers from '@/data/servers'
import { computed, ref } from 'vue'
import type { ServerType } from '@/types/server.types'

const props = defineProps({
  server: {
    type: Object,
    required: true
  }
})

const isEditMode = ref(false)
const serverEdit = ref({
  name: '',
  type: ''
})

function updateServer() {
  const thisServer = servers.filter(
    (server: ServerType) => server.customer_id === props.server.customer_id
  )[0]

  thisServer.server_name = serverEdit.value.name
  thisServer.server_type = serverEdit.value.type

  isEditMode.value = false
}

const buttonText = computed(() => (isEditMode.value ? 'Cancel' : 'Edit'))
</script>
<template>
  <div class="container" v-if="!isEditMode">
    <h2>View mode:</h2>
    <div class="container__card">
      <UserIcon />
      <h3>{{ server.customer_id }}</h3>
    </div>
    <div class="container__card">
      <p>
        server name: <b>{{ server.server_name }}</b>
      </p>
    </div>
    <div class="container__card">
      <p>
        server type: <b>{{ server.server_type }}</b>
      </p>

      <div class="container__icon">
        <LaptopIcon v-if="server.server_type === 'vds'" />
        <CloudIcon v-else-if="server.server_type === 'hosting'" />
        <ComputerTowerIcon v-else-if="server.server_type === 'dedicated'" />
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <h2>Edit mode:</h2>
    <div class="container__card">
      <p>Server name:</p>
      <InputText placeholder="Type a server name" type="text" v-model="serverEdit.name" />
    </div>
    <div class="container__card">
      <p>Server type:</p>
      <Dropdown
        v-model="serverEdit.type"
        :options="serverTypes"
        placeholder="Select a server type"
        class="w-full md:w-14rem"
      />
    </div>
  </div>
  <hr />
  <div class="actions">
    <Button size="small" @click="isEditMode = !isEditMode">{{ buttonText }}</Button>
    <Button v-if="isEditMode" severity="secondary" size="small" @click="updateServer">Save</Button>
  </div>
</template>

<style scoped lang="scss">
.container {
  &__card {
    margin-top: 12px;

    display: flex;
    align-items: center;

    & > p {
      margin-right: 8px;
    }

    & > h3 {
      margin-left: 8px;
    }
  }

  &__icon {
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 8px;

    color: var(--surface-400);
    background-color: var(--surface-50);
    border-radius: var(--border-radius);
  }
}

hr {
  width: 100%;
  height: 1px;

  margin: 24px 0;

  color: #333;
  background-color: #333;
}

.actions {
  display: flex;
  gap: 8px;
}
</style>
