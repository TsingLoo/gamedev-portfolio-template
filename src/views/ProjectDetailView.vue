<template>
  <div v-if="project" class="project-detail-container">
    <h1>{{ project.name }}</h1>
    <img :src="project.iconUrl" :alt="project.name" class="project-thumbnail" />
    <p v-if="project.color" :style="{ backgroundColor: project.color, padding: '5px', color: 'white' }">
      Theme Color: {{ project.color }}
    </p>

    <component :is="detailsComponentLoader" />

  </div>
  <div v-else>
    <p>Project not found or loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent, PropType } from 'vue';
import type ProjectData from '@/data/ProjectData'; // Assuming ProjectData is a class/type
import allProjects from '@/data/GameProjectsData'; // Your array of projects

export default defineComponent({
  name: 'ProjectDetailView',
  props: {
    // Assuming you pass the project ID via route param or prop
    projectId: {
      type: String as PropType<string>,
      required: true,
    },
  },
    setup(props) {
    console.log("ProjectDetailView props.projectId:", props.projectId); // <-- ADD THIS

    const project = computed<ProjectData | undefined>(() => {
        const foundProject = allProjects.find(p => p.id === props.projectId);
        console.log("Found project:", foundProject); // <-- ADD THIS
        return foundProject;
    });

    const detailsComponentLoader = computed(() => {
        if (project.value && project.value.detailComponentName) {
        console.log("Loading component:", project.value.detailComponentName); // <-- ADD THIS
        console.log("Full import path:", `@/components/project-details/${project.value.detailComponentName}.vue`); // <-- ADD THIS
        return defineAsyncComponent(() =>
            import(`@/components/project-details/${project.value.detailComponentName}.vue`)
        );
        }
        console.log("Project or detailComponentName not found, loader is null"); // <-- ADD THIS
        return null;
    });

    return {
        project,
        detailsComponentLoader,
    };
    },
});
</script>

<style scoped>
.project-detail-container {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}
.project-thumbnail {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h1 {
  margin-bottom: 15px;
}
</style>