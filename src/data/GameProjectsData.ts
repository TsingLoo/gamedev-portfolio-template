import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "EolaneVR", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_a6lZz0HJuk.gif", 
    `
    <div class="paragraph">
    <h3>Overview</h3> 
     <strong>EolaneVR</strong> is a Virtual Reality training system for the feeder loading operation of Surface-mount technology(SMT) customized for <strong><a href="https://www.eolane.com/en/eolane-china">éolane CHINA</a></strong>.
     </br>
     </br>
     As the project leader and the main programmer, I spearheaded the development process, designed and coordinated task assignments, and conducted feedback reviews for better iteration.
     </br>
     </br>
     Here is the demo video of the prototype:
     </div>

    <!-- Video Frame -->
    <div class="paragraph center">
        <video controls style="width:100%; max-width:1920px; height:auto;" poster="http://images.tsingloo.com/eolane_wide_logo.png">>
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

    This project uses <a href="https://earnestrobot.notion.site/earnestrobot/Auto-Hand-f78a404f6baf4d85ab705c0d1f92c30e">Auto Hand</a> and <a href="https://qframework.cn/qf">QFramework</a> to handle the interaction with
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

    `, "#989000", true),
    new ProjectData("project-2", "WildPerception", "https://images.tsingloo.com/ShareX/2024/01/msedge_6kr9fWtPmd.gif", `
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
    <img class="pc-screenshot" src="http://images.tsingloo.com/a0435962706012e99823eb0e827e900.jpg" alt="Drawing Overload Screenshot" />
    </div>

    <strong><a href="https://github.com/TsingLoo/MultiviewX_Perception"><i class="fa fa-github fa-lg fa-fw"></i>MultiviewX_Perception</a></strong> is a Python program designed for processing and annotating the data and images from wildperception. 
    It supports multi-thread processing and receives various arguments to enable advanced features like .gif preview and visualization of the field of view from calibrations.

    
    <div class="paragraph center">
    <img class="one-image" src="http://images.tsingloo.com/image-20231118223027230.png"/>
    </div>

    </div>
    `, "#383838"),
    new ProjectData("project-3", "The Verdant Revival", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_c6k0aFotAQ.gif", `
    <div class="paragraph">
    <h3>Overview</h3> 
        <strong>The Verdant Revival</strong> is a survival game using Unity Engine. It is an adventure where player steps into a world that’s gray and full of pollution. 
        Here, player's mission is to clean up the mess and turn the island from gray to green. Do this by gathering trash, recycling it into handy items, and reviving tons of trees and plants.
        <br>
        <br>
        Here is the demo video of the prototype:
        </div>

    <div class="paragraph center">
    <video controls style="width:100%; max-width:1920px; height:auto;" poster="http://images.tsingloo.com/screenshot_verdantrevival.png">>
        <source src="https://game.tsingloo.com/Videos/VerdantRevival_Demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

<div>
    <div class="notice">
    Download the Windows Build from <a href="https://game.tsingloo.com/backup/TheVerdantRevival.zip" target="_blank">here<i class="fa fa-file-zip-o"></i></a>, 
    Game Design Report is available <a href="https://game.tsingloo.com/backup/TheVerdantRevival_GameDesignReport.pdf" target="_blank">here<i class="fa fa-file-pdf-o"></i></a>
    </div>
</div>

    <div class="paragraph">
    <h3>Main Features</h3> 
        <ul>
        <li>Environmental estoration mechanic</li>
        <li>Day-Night cycle</li>
        <li>Energy mechanic</li>
        <li>Perlin Noise-based map generator</li>
        <li>Performance optimization by <a href="https://docs.unity3d.com/Manual/JobSystem.html">Job System</a>
        </ul>
    </div>

    <div class="paragraph">
    <h3>Technical Insights</h3>
    </div>
    <strong>The Verdant Revival</strong>'s UI Manager comes from my <a href="https://github.com/TsingLoo/TinyUFramework/tree/main"><i class="fa fa-github fa-lg fa-fw"></i>TinyUFramework</a> and works well 
    with <a href="https://feel.moremountains.com/" target="_blank">FEEL</a> to load the scene and enhance interaction feedbacks. It automalcially registers the UI Panel prefabs in the asset folder and maintains theirs states 
    to support the switch bettween different panels. 
    <br>
    The projects uses Burst Compiler to parrallel the movements of blue cubes to simulate waves, getting a perfromance boost froom 

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#e9a13c"),
    new ProjectData("project-4", "ABB Digital Twin", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_ueCyolgPGb.gif", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main Features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#ba372e"),
    new ProjectData("project-5", "RTS Demo", "https://images.tsingloo.com/ShareX/2024/01/chrome_rmhnexaa9k.gif", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main Features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-6", "Space Fighter", "https://images.tsingloo.com/ShareX/2024/01/SpaceFighter_cCMGTNCmsN.gif", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#80cbc4"),
    new ProjectData("project-7", "Virtual Assembly", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_Ij6JuZOjWZ.gif", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#9ca5c0")
];