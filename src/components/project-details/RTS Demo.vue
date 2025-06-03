<template>
    <div> <ProjectDetailHeader :project="project" /></div>
<div class="paragraph">
    <h3>Overview</h3> 
    <a href="https://github.com/TsingLoo/RealTimeStrategy"><i class="fa fa-github fa-lg fa-fw"></i><strong>RTS Demo</strong></a> is a multiplayer real-time strategy game. It supports five players at the maximum play at the same time. It supports Game Lobby, Building, Single and Group Command, etc.

    <br>
    <br>
    I followed the tutorial on <a href="https://www.gamedev.tv/p/unity-multiplayer-coding-and-networking">GameDev.tv</a> to complete this simple but complete demo:
    <br> 


    
    <div class="paragraph center">
    <iframe class="youtube" src="https://player.bilibili.com/player.html?aid=635202527&bvid=BV1rb4y1Y75s&cid=469752869&p=1" frameborder="0" framespacing="0" allowfullscreen></iframe>
    </div>

    <div>
        <div class="notice">
    Download the Windows Build from <a href="https://game.tsingloo.com/backup/RTS.zip" target="_blank">here<i class="fa fa-file-zip-o"></i></a>
        </div>
    </div>

</div>
    
    <div class="paragraph">
    <h3>Main Features</h3>
        <ul>
        <li>Multiplayer powered by <a href="https://github.com/TsingLoo/RealTimeStrategy"><i class="fa fa-github fa-lg fa-fw"></i><strong>Mirror</strong></a></li>
        <li>Build and destroy</li>
        <li>Single unit and group units command</li>
        </ul>
    </div>

    <div class="paragraph">
    <h3>Technical Insights</h3> 
    <a href="https://github.com/TsingLoo/RealTimeStrategy"><i class="fa fa-github fa-lg fa-fw"></i><strong>RTS Demo</strong></a> takes client-server architecture to handle multiplayer mode. It supports the host lobby and joins the existing game by inputting the IP address and port.  
    As the Mirror's feature, the owner of a game session will be the host server. All the authentication-required functions are permitted on the server, and the server syncs the objects to the client.
    Remote Procedure Call is widely applied to this project. Build and destroy tanks are executed through RPCs, ensuring that actions performed by one player are accurately replicated across all connected clients.  
    
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