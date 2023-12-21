<template>
  <div class="live-preview">
    <div class="switcher">
      <div :class="`switcher-item ${activeTab === 'preview' ? 'active' : ''}`" @click="activeTab = 'preview'">
        Preview
      </div>
      <div :class="`switcher-item ${activeTab === 'code' ? 'active' : ''}`" @click="activeTab = 'code'">
        Code
      </div>
    </div>
    <template v-if="activeTab === 'preview'">
      <iframe
        :src="source"
        class="component-preview" :height="300"></iframe>
    </template>

    <div v-if="activeTab === 'code'">
      <slot></slot>

    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'


const props = defineProps({
  storybookId: String,
  args: String
})

const source = computed(() => {
  return `https://64140cf50b8d988c175493a4-ogagtsocbe.chromatic.com/iframe.html?args=${props.args || ''}&id=${props.storybookId}&viewMode=story`;
});

const activeTab = ref('preview');



</script>

<style>
.live-preview {
  background: var(--vp-c-text-2);
  padding: 1rem;
  border-radius: 8px;
}

.switcher {
  display: flex;
  background-color: #cfcfcf;
  align-items: center;
  border-radius: 8px;
  width: fit-content;
  padding: 5px;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 1.5rem;
}

.switcher-item {
  color: #505050;
  padding: 5px 8px;
  border-radius: 0.25rem;
  min-width: 70px;
  text-align: center;
  cursor: pointer;
  display: block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.switcher-item.active {
  color: #02B1C3;
  background-color: white;
}

.component-preview {
  background: white;
  border-radius: 8px;
  min-width: 100%;
}
</style>
