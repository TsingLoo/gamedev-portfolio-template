// src/components/ProjectsList.vue
<template>
  <div> <div class="projects-list">
      <div
        v-for="project in projects"
        :key="project.id"
        @click="navigateToProject(project)"
        class="project-item"
        :class="{ 'wide': project.isWide, 'high': project.isHigh }"
      >
        <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
        </div>
        <div class="title-bar" :style="{ 'background-color': project.accentColor }">
          <div class="title-text">
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from 'vue-router';
import type ProjectData from "@/data/ProjectData";

// Helper for creating URL-friendly slugs
const slugify = (name: string): string => name.toLowerCase().replace(/\s+/g, '-');

export default defineComponent({
  name: "ProjectsList",
  props: {
    projects: {
        type: Array as PropType<ProjectData[]>,
        required: true
    }
  },
  setup() {
    const router = useRouter();

    const navigateToProject = (item: ProjectData) => {
      if (!item || !item.name) {
        console.error("navigateToProject: Invalid project item or missing name", item);
        return;
      }
      const projectSlug = slugify(item.name);
      // Navigate to the route that GameProjects.vue handles,
      // setting the projectName parameter.
      router.push({ name: 'GameProjects', params: { projectName: projectSlug } });
      // The GameProjects.vue component will then pick up this param
      // and switch its view to ProjectDetailView.
    };

    // The showDetailsByName method (if called from a parent that itself gets a name from URL)
    // would effectively do the same: find project, then navigateToProject(foundProject).
    // However, with the current setup, GameProjects.vue handles direct URL access itself.
    // So, showDetailsByName in this component might not be needed if GameProjects.vue manages all name-based routing.

    return {
      navigateToProject,
      // You might still need showDetailsByName if GameProjects.vue parent specifically calls it on $refs
      // For example, for an initial load based on URL before this component's setup runs fully.
      // But the watch in GameProjects.vue should handle that better.
    };
  },
});
</script>

<style scoped>
/* YOUR ORIGINAL <style scoped> for ProjectsList.vue GOES HERE */
/* Ensure it includes: */
/* .projects-list (with grid, grid-template-columns, grid-auto-rows, grid-gap, grid-auto-flow: row dense;) */
/* .project-item (with height, width, overflow, cursor, position, etc., and possibly min-width:0, min-height:0, align-self:start if using the stricter grid) */
/* .project-item-image (with background-size, background-position, height, width, transition) */
/* .project-item-image:hover (transform: scale) */
/* .project-item:hover (filter: brightness) */
/* .title-bar (position, bottom, width, background-color) */
/* .title-text (padding) */
/* .wide (grid-column-end: span 2) */
/* .high (grid-row-end: span 2) */
/* and your @media query */

.project-item {
  height: 300px; /* Default height outside media query */
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #ccc;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease-in-out;
}
.project-item:hover .project-item-image {
  transform: scale(1.05);
}

.project-item:hover {
  filter: brightness(110%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}

.title-text {
  padding: 10px 15px;
  color: white; /* Consider dynamic text color if accentColor can be light */
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: 250px; /* Your original. If images still overflow, make this fixed or ensure content fits */
    /* grid-auto-flow: row dense; /* Add if you want dense packing */
  }

  .project-item {
    margin: 0px;
    height: 100%; /* Fills the grid cell defined by grid-auto-rows and row spans */
    /* For better grid behavior, especially if content is larger than cell: */
    min-width: 0;
    min-height: 0;
    /* align-self: start; /* Uncomment if you don't want items to stretch vertically */
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}
</style>