<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
}

.layout {
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.layout img {
  max-width: 200px;
  flex-shrink: 0;
  height: 100%;
}
</style>
