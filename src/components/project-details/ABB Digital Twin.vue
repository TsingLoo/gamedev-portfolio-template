<template>
    <div> <ProjectDetailHeader :project="project" />

    <div class="paragraph">
        <h3>Overview</h3> 
        <strong>ABB Digital Twin</strong> is a system that allows users to monitor the state of joints and motors on the screen and control the robot arm by dragging the slider and setting a specific value in real time. 
        <br>
        <br>
        I handled the socket communication between Unity, Matlab, and ABB arm and extracted events from the dataflow, thus extending essential features based on the <a href="https://github.com/rparak/Unity3D_Robotics_ABB"><i class="fa fa-github fa-lg fa-fw"></i>Unity3D_Robotics_ABB</a>.
        <br>
        <br> 

        <div class="paragraph center">
        <img class="pc-screenshot" src="https://images.tsingloo.com/abb-joints-control.gif" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://images.tsingloo.com/abb-linear.gif" alt="Drawing Overload Screenshot" />
        </div>

        </div>
        
        <div class="paragraph">
            <h3>Main Features</h3>
            <ul>
            <li>Bidirectional control</li>
            <li>Inversed kinematic</li>
            <li>Socket communication</li>
            <li>Event driven</li>
            </ul>
        </div>

        <div class="paragraph">
        <h3>Technical Insights</h3> 
        <strong>ABB Digital Twin</strong> is mainly separated into the robotic arm and the client Unity program on PC. 
        To maintain the communication, the Unity program pulls a thread to handle the data flow and check the value change in Update(). 
        The robotic arm will report its current state and task by around 20Hz and then be parsed in Unity to trigger corresponding events.
        <br> 
        <br> 
        Following the Model View Controller design pattern, Matlab takes the role of the controller to handle the solution of Inversed kinematic problems defined by the user's input command. 
        The states are organized as BindableProperty and register to UI elements, and the UI elements are only responsible for displaying and pushing new commands instead of operating on the state's data directly, 
        thus isolating the data from control logic and friendly for future extension.
        </div>
    </div>
</template>

<script setup lang="ts">
// Using <script setup> makes this much more concise
import { type PropType } from 'vue'; // 'type' import for PropType
import type ProjectData from '../../data/ProjectData'; // Adjust path as needed
import ProjectDetailHeader from '../ProjectDetailHeader.vue'; // Import the header with corrected path

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