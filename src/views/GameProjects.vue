
<template>
  <div> <ProjectDetailView v-if="isDetailView" :project-id="currentProjectId" />
    <div v-else-if="projectNotFoundInRoute">
      <h1>Project Not Found</h1>
      <p>The project named "{{ $props.projectName }}" could not be found.</p>
      <router-link :to="{ name: 'GameProjects' }">Back to all projects</router-link>
    </div>
    <div v-else> <h1>Projects</h1>
          <div style="margin-bottom: 30px;">
      I'm excited about working on various projects that enhance my skills in C#, C++, Python, JavaScript, Unity, OpenCV, OpenGL, etc.<br><br>
      My experience spans various domains, from software frameworks to specific gameplay mechanics and indie games to Virtual Reality applications.
      I enjoy handling various tasks within these areas. Below, I present some projects showing my approach, perspective, and interests in these fields.
    </div>


      <ProjectsList :projects="allProjectsData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Not strictly needed here if ProjectsList handles nav
import ProjectsList from '@/components/ProjectsList.vue'; // Your original-style list
import ProjectDetailView from '@/views/ProjectDetailView.vue'; // The detail view component
import gameProjectsData from '@/data/GameProjectsData';
import type ProjectData from '@/data/ProjectData';

// Helper for creating URL-friendly slugs and for lookup
const slugify = (name: string): string => name.toLowerCase().replace(/\s+/g, '-');

export default defineComponent({
  name: 'GameProjectsView',
  components: {
    ProjectsList,
    ProjectDetailView
  },
  props: {
    projectName: { // This prop is populated by router if :projectName is in URL
      type: String,
      default: null
    }
  },
  setup(props) {
    const allProjectsData = ref<ProjectData[]>(gameProjectsData);
    const currentProjectId = ref<string | null>(null);
    const projectNotFoundInRoute = ref(false);

    const isDetailView = computed(() => !!currentProjectId.value);

    const findAndSetProjectForDetailView = (slugFromRoute: string | null) => {
      if (slugFromRoute) {
        const normalizedSlug = slugFromRoute.toLowerCase(); // Assuming slugs are already hyphenated if needed
        const project = allProjectsData.value.find(p => slugify(p.name) === normalizedSlug);

        if (project) {
          currentProjectId.value = project.id;
          projectNotFoundInRoute.value = false;
          console.log(`Displaying details for ${project.name} (ID: ${project.id}) based on slug: ${slugFromRoute}`);
        } else {
          console.warn(`Project with slug "${slugFromRoute}" not found.`);
          currentProjectId.value = null;
          projectNotFoundInRoute.value = true;
        }
      } else {
        // No projectName in route, so we are showing the list
        currentProjectId.value = null;
        projectNotFoundInRoute.value = false;
      }
    };

    // Watch for changes in the projectName prop (which comes from the route param)
    // This handles navigation between different project detail URLs and initial load
    watch(() => props.projectName, (newSlug) => {
      findAndSetProjectForDetailView(newSlug);
    }, { immediate: true }); // immediate: true to run on initial load

    // If you want to scroll to top when detail view appears/changes
    watch(currentProjectId, (newId, oldId) => {
      if (newId && newId !== oldId) {
        window.scrollTo(0, 0);
      }
    });

    return {
      allProjectsData,
      isDetailView,
      currentProjectId,
      projectNotFoundInRoute,
    };
  }
});
</script>

<style scoped>
/* Add any specific styles for GameProjects.vue container if needed */
</style>