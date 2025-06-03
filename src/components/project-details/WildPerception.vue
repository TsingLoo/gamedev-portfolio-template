<template>
    <div> <ProjectDetailHeader :project="project" /></div>

<div class="paragraph">
    <h3>Overview</h3> 
        <strong>WildPerception</strong> is an enhancing toolkit for generating large-scale Multi-View Video Dataset in the format of the Wildtrack dataset. 
        It is now part of the work of computer vision research on multi-view tasks. WildPerception consists of <a href="https://github.com/TsingLoo/com.tsingloo.wildperception"><i class="fa fa-github fa-lg fa-fw"></i>com.tsingloo.wildperception</a> &
        <a href="https://github.com/TsingLoo/MultiviewX_Perception"><i class="fa fa-github fa-lg fa-fw"></i>MultiviewX_Perception</a>, the source code and detailed instructions are now available.
        <br>
        <br>
        It was my Final Year Project at Xi'an Jiaotong-Liverpool University and received the <strong>Best Performance in Final Year Project</strong> prize in 2023, which is the top 1 out of 256 students.
    </div>

    <div>
        <div class="notice">
        Download the submitted final report from <a href="https://game.tsingloo.com/backup/Final_Report.pdf" target="_blank">here<i class="	fa fa-file-pdf-o"></i></a>
        </div>
    </div>

    <div class="paragraph">
    <h3>Main Features</h3> 
        <ul>
        <li>Capable of generating large-scale datasets</li>
        <li>Camera calibration</li>
        <li>High fidelity images</li>
        <li>Integrated package and quick start</li>
        <li>Visualise overlapped field of view of cameras</li>
        <li>Support custom humanoid pedestrian models</li>
        <li>Support for<a href="https://github.com/TsingLoo/com.tsingloo.wildperception"><i class="fa fa-github fa-lg fa-fw"></i>SyntheticHumans Package</a></li>
        </ul>
    </div>


    <div class="paragraph">
    <h3>Technical Insights</h3>
    <strong><a href="https://github.com/TsingLoo/com.tsingloo.wildperception"><i class="fa fa-github fa-lg fa-fw"></i>com.tsingloo.wildperception</a></strong>(wildperception)
    extends<a href="https://github.com/Unity-Technologies/com.unity.perception?tab=readme-ov-file"><i class="fa fa-github fa-lg fa-fw"></i>Perception Package</a> to specilize its ability for 
    multi-camera scnario. It is an organized package for Unity Editor and is easy to set up. Most properties of it are exposed on the inspector, and various gizmos are drawn to help users make intuitive senses. 
    It can generate over 9,000 1080p frames of 90 pedestrians from 6 cameras(1,500 each) in the Area of Interest within 15 minutes on a PC with 12900K and 3080Ti.
    </div>
<div class="paragraph center">
    <img class="pc-screenshot" src="https://images.tsingloo.com/bbox_cam7_frame2_portfolio.png" alt="Drawing Overload Screenshot" />
    <img class="pc-screenshot" src="https://images.tsingloo.com/bbox_cam4_frame2_portfolio.png" alt="Drawing Overload Screenshot" />
</div>
    By following the <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr98-71.pdf">calibration method proposed by Zhang Zhengyou</a>, 
    wildperception creates groups of virtual checkboard points in space, calculates the corresponding projected points on the screen of each camera, and then passes these points to OpenCV to finish the calibration.  
    This approach is independent and suitable for any <a href="https://docs.unity3d.com/2022.3/Documentation/Manual/PhysicalCameras.html">Physical Camera</a>, it can provide both intrinsic and extrinsic of cameras for further work. 
    By offering AbstractPedestrianModelProvider class, users can inherit it to make their provider support loading humanoid models for specific requirements. 
    <div class="paragraph center">
    <img class="pc-screenshot" src="https://images.tsingloo.com/image-20230302220210978_virtualchessboard.png"/>
    <img class="pc-screenshot" src="https://images.tsingloo.com/a0435962706012e99823eb0e827e900.jpg" alt="Drawing Overload Screenshot" />
    </div>

    <strong><a href="https://github.com/TsingLoo/MultiviewX_Perception"><i class="fa fa-github fa-lg fa-fw"></i>MultiviewX_Perception</a></strong> is a Python program designed for processing and annotating the data and images from wildperception. 
    It supports multi-thread processing and receives various arguments to enable advanced features like .gif preview and visualization of the field of view from calibrations.

    
    <div class="paragraph center">
    <img class="one-image" src="https://images.tsingloo.com/image-20231118223027230.png"/>
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