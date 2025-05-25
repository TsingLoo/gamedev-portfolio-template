<template>
  <div class="project-detail-content">
    <component :is="currentProjectDetailComponent" :project="projectData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent, PropType, ref, watch } from 'vue';
import allProjects from '@/data/GameProjectsData';
import type ProjectData from '@/data/ProjectData';

export default defineComponent({
  name: 'ProjectDetailView',
  props: {
    projectId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const projectData = ref<ProjectData | undefined>();

    const currentProjectDetailComponent = computed(() => {
      if (projectData.value && projectData.value.detailComponentName) {
        console.log("Loading detail component:", projectData.value.detailComponentName);
        return defineAsyncComponent(() =>
          import(`@/components/project-details/${projectData.value.detailComponentName}.vue`)
        );
      }
      console.log("No project data or detail component name found for component loading.");
      return null;
    });

    watch(() => props.projectId, (newId) => {
      if (newId) {
        projectData.value = allProjects.find(p => p.id === newId);
        if (!projectData.value) {
          console.error(`Project with ID "${newId}" not found in allProjects data.`);
        }
      } else {
        projectData.value = undefined;
      }
    }, { immediate: true });

    return {
      projectData, // This is now passed as a prop
      currentProjectDetailComponent,
    };
  },
});
</script>

<style>
@import '@/css/common-project-details.css'; /* Common styles */

.project-detail-content {
  padding: 10px 20px;
  /* max-width: 900px; */
  /* margin: 0 auto; */
}
</style>