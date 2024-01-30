<script setup lang="ts"></script>

<template>
  <div class="container">
    <h3>Welcome</h3>
    <p>Select an item from sidebar in the left to edit data.</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 60px - 64px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

  border-radius: 20px;

  background: #111;

  & h3 {
    font-size: 2rem;

    margin-bottom: 8px;
  }

  & p {
    opacity: 0.6;
  }
}
</style>
