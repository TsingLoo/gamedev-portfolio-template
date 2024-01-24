<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      I'm excited about working on various projects that enhance my skills in C#, C++, Python, JavaScript, Unity, OpenCV, OpenGL, etc.<br><br>
      My experience spans various domains, from software frameworks to specific gameplay mechanics and indie games to Virtual Reality applications.
      I enjoy handling various tasks within these areas. Below, I present some projects showing my approach, perspective, and interests in these fields.</div>

      <ProjectsList ref="projects" v-bind:projects="projects" />

    <!-- <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  mounted() {
    let projectName = this.$route.params.projectName.replace(/-/g, ' ');
    console.log("GameProjects.vue mounted, projects:", projectName);
    

    this.$nextTick(() => {
      if (this.$refs.projects) {
        this.$refs.projects.showDetailsByName(projectName);
      } else {
        console.log('projects is not available');
      }
      }
    );
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
