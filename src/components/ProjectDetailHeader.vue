<template>
  <div v-if="project" class="project-detail-header">
    <h1>{{ project.name }}</h1>
    <div v-if="project.iconUrl" class="project-banner">
      <img :src="project.iconUrl" :alt="project.name + ' main preview'" class="project-banner-image">
    </div>
  </div>
  <div v-else class="project-detail-header">
    <h1>Project Details</h1> </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type ProjectData from '@/data/ProjectData'; // Adjust path as needed

export default defineComponent({
  name: 'ProjectDetailHeader',
  props: {
    project: {
      type: Object as PropType<ProjectData>,
      required: false // Set to true if you always expect it.
                     // `ProjectDetailView.vue` should ensure it's passed when available.
    }
  }
});
</script>

<style scoped>

.project-detail-header {
  /* margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee; */
}

.project-detail-header h1 {
  /* font-size: 2.2em;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: left; */
}



/*
  Styles for .project-banner and .project-banner-image are assumed to be
  in your global/common CSS file (e.g., common-project-details.css)
  as they were defined before. If you want them scoped only to this header,
  you can move those specific rules here.
  Example (if moved from common CSS):
  .project-banner {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }

  .project-banner-image {
    max-width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
*/
</style>