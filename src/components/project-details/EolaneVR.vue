<template>
    <div> <ProjectDetailHeader :project="project" /></div>

 <div class="paragraph">
    <h3>Overview</h3> 
     <strong>EolaneVR</strong> is a Virtual Reality training system for the feeder loading operation of Surface-mount technology(SMT) customized for <strong><a href="https://www.eolane.com/en/eolane-china">éolane CHINA</a></strong>.
     <br>
     <br>
     As the project leader and the main programmer, I spearheaded the development process, designed and coordinated task assignments, and conducted feedback reviews for better iteration.
     <br>
     <br>
     Here is the demo video of the prototype:
     </div>

    <!-- Video Frame -->
    <div class="paragraph center">
        <video controls style="width:100%; max-width:1920px; height:auto;" poster="https://images.tsingloo.com/eolane_wide_logo.png">>
            <source src="https://game.tsingloo.com/Videos/EolaneVR_Demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    
    <div class="paragraph">
    <h3>Main Features</h3> 
        <ul>
        <li>Training mode with detailed instruction</li>
        <li>Exam mode with reviewable results</li>
        <li>Real-time tape simulation</li>
        <li>Full feeder loading process</li>
        <li>Text & Voice guide</li>
        <li>International support</li>
        </ul>
    </div>

    <div class="paragraph">
    <h3>Technical Insights</h3> 

    <strong>EolaneVR</strong> uses <a href="https://earnestrobot.notion.site/earnestrobot/Auto-Hand-f78a404f6baf4d85ab705c0d1f92c30e">Auto Hand</a> and <a href="https://qframework.cn/qf">QFramework</a> to handle the interaction with
    OpenXR compatible devices(e.g., Meta Quest 2) and build up the base skeleton following <a href="https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/">S.O.L.I.D.</a> principles for agile development.

    It incorporates the simulation of the tape and film using Obi Rope and Filo packages. It supports multiple modes like training and exam for users to practice and test their skills and it achieves realistic illumination and shadow by using the HDRP pipeline and Adaptive Probe Volume.
    <br>
    <br>
    The project originally designed and implemented the user guide system with configurable text and voice from serialized assets like .csv and reserved customizable callbacks and events in the behavior of critical objects like feeders and racks for future extension. 
    The whole mechanism is driven by events and object-oriented, so the user can interact with the feeder at different stages, and the system can respond to the user's action accordingly. 
    Besides the core mechanism, I developed some powerful components and toolkits to extend the existing plugins and packages(e.g.,
        <a href="https://github.com/TsingLoo/TinyUFramework/blob/117caf045c1ab9f485c49643f42e87ee3fa4ae22/Editor/EditorHelper.cs#L261"><i class="fa fa-github fa-lg fa-fw"></i>Localization Asset Generator</a>,
        <a href="https://github.com/TsingLoo/TinyUFramework/blob/e1286621f6131892dc3a22fa34605d8fd8b21796/Utils/CoolDowns.cs"><i class="fa fa-github fa-lg fa-fw"></i>CoolDowns Manager</a>
        ), 
    for team to boost development.
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