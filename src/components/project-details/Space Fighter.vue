<template>
    <div> <ProjectDetailHeader :project="project" /></div>
<div class="paragraph">
    <h3>Overview</h3> 
    <strong>Space Fighter</strong> is a 2D causal Match 3 game. The player controls a spaceship to avoid the debris and collect the RGB particle to get the corresponding score. 
    The spped of incoming particles will get faster as player getting more score. 
    
    <br>
    <br>
    It was my individual courwork for CPT306-2223-S2-Principles of Computer Games Design.
    <br>
    <br>
    Here is the demo video of the prototype:
    <div class="paragraph center">
    <video controls style="width:100%; max-width:720px; height:auto;" poster="https://images.tsingloo.com/SpaceFighter_Demo.jpg">>
        <source src="https://game.tsingloo.com/Videos/SpaceFighter_Demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

<div>
    <div class="notice">
    Download the Windows Build from <a href="https://game.tsingloo.com/backup/SpaceFighter.zip" target="_blank">here<i class="fa fa-file-zip-o"></i></a> 
    </div>
</div>

    <div class="paragraph">
    <h3>Main Features</h3>
        <ul>
        <li>Match 3 mechanism</li>
        <li>Tween animation</li>
        <li>Physcial collision and bounce</li>
        </ul>
    </div>

    <div class="paragraph">
    <h3>Technical Insights</h3> 
    <strong>Space Fighter</strong> uses my <a href="https://github.com/TsingLoo/TinyUFramework/tree/main"><i class="fa fa-github fa-lg fa-fw"></i>TinyUFramework</a> to handle the UI layout and speed up the developemnt with its utils. 
    The particles storage area is managed as a 2-dimentional array. 
    Instead of hardly placing the incoming particle when it hits the placed one, this project allows the particle to bounce according to physics and do a tween to move to given place. 
    This requires the safety check when a free particle hit a particle in tween to avoid overlapping and false placement.
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