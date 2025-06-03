<template>
    <div> <ProjectDetailHeader :project="project" /></div>
<div class="paragraph">
        <h3>Overview</h3> 
        <strong>Virtual Assembly</strong> is the first Virtual Reality project I worked on. It allows user to assembly units to complete a specific machine component accodring to its blueprint. 
        <br>
        <br>
            I convert the project from a PC program to Virtual Reality program, opetimazing its interaction experience. 
        <br>
        <br>
        Here is the demo video of the prototype:
        <div class="paragraph center">
        <video controls style="width:100%; max-width:720px; height:auto;" poster="https://images.tsingloo.com/Virtual_Assembly_Demo.jpg">>
            <source src="https://game.tsingloo.com/Videos/Virtual_Assembly_Demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    
    <div class="paragraph">
    <h3>Main Features</h3>
        <ul>
        <li>Tree structure for assembly</li>
        <li>Multiple blueprints for choice</li>
        </ul>
    </div>

    <div>
    <div class="notice">
    Download the Android Build from <a href="https://game.tsingloo.com/backup/VAP_Demo.apk" target="_blank">here<i class="fa fa-file-zip-o"></i></a> (Verified on <a href="https://www.picoxr.com/cn/neo3/">pico neo 3</a>)
    </div>
</div>


    <div class="paragraph">
    <h3>Technical Insights</h3> 
    <strong>Virtual Assembly</strong> uses Unity's XR Interaction Toolkit to manage virtual reality stuff. 
    To enable dual-hand interactions, I redesigned the input system to accommodate simultaneous multi-object handling. 
    This involved decoupling the input and object behaviors from the previous PC-centric design. 
    Instead of relying solely on raycasting for object selection and placement, collision and distance is detected between the hands and objects to decide which object is being interacted with.
    <br>
    <br>
    The project uses a tree structure to represent the assembly process. Each node in the tree is a unit, and the leaf node is the final component. 
    If some units are not visible by occlusion, it will be outlined and blink to remind the user to complete the assembly.
    </div>
    </div>
</template>

<script setup lang="ts">
// Using <script setup> makes this much more concise
import { type PropType } from 'vue'; // 'type' import for PropType
import type ProjectData from '../../data/ProjectData'; // Adjust path as needed
import ProjectDetailHeader from '../ProjectDetailHeader.vue'; // Import the new header

// Define props using defineProps compiler macro
const props = defineProps({
  project: {
    type: Object as PropType<ProjectData>,
    required: false // Or true, if ProjectDetailView always supplies it.
                  // If true, you might not need the v-if="project" checks in the template as much,
                  // but it's safer to keep them if the project prop could ever be null/undefined initially.
  }
});
</script>