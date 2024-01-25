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
        <strong>The Verdant Revival</strong> is a survival game using Unity Engine. It is an adventure where the player steps into a world that’s gray and full of pollution. 
        Here, player's mission is to clean up the mess and turn the island from gray to green. 
        Do this by gathering trash, recycling it into handy items, and reviving tons of trees and plants.
        <br>
        <br>
        It was my individual courwork for CPT306-2223-S2-Principles of Computer Games Design.
        <br>
        <br>
        Here is the demo video of the prototype:
        </div>

    <div class="paragraph center">
    <video controls style="width:100%; max-width:1920px; height:auto;" poster="http://images.tsingloo.com/TheVerdantRevival_Demo.jpg">>
        <source src="https://game.tsingloo.com/Videos/TheVerdantRevival_Demo.mp4" type="video/mp4">
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
        <li>Perlin Noise-based map generator with seed</li>
        <li>Performance optimization by <a href="https://docs.unity3d.com/Manual/JobSystem.html">Job System</a>
        </ul>
    </div>

    <div class="paragraph">
    <h3>Technical Insights</h3>
    <strong>The Verdant Revival</strong>'s UI Manager comes from my <a href="https://github.com/TsingLoo/TinyUFramework/tree/main"><i class="fa fa-github fa-lg fa-fw"></i>TinyUFramework</a> and works well 
    with <a href="https://feel.moremountains.com/" target="_blank">FEEL</a> to load the scene and enhance interaction feedback. 
    It automatically registers the UI Panel prefabs in the asset folder and maintains their states to support the switch between different panels.
    <br>
    <br>
    The project uses the Burst Compiler to parallel the movements of blue cubes to simulate sea waves, getting a 2x performance boost rather than assigning a Monobehaviour to each cube to update its position in the main thread.
    The terrain is generated by Perlin Noise, and the nested ground cubes are removed to improve the performance further. The trees, rocks and toxics are distributed according to certain conditions (e.g., the trees are only generated on a 4x4 plain ground, and the corresponding ground will not instantiate toxics).
    <br>
    <br>
    Inspired by <a href="https://zelda.nintendo.com/tears-of-the-kingdom/">Zelda</a>, the game has a day-night cycle and the player's energy is demonstrated as a green ring.
    The energy will be recovered when the player is idle for a certain time and reduced when the player dashes. 
    The various feedbacks, screen effects and sounds are added to improve the overall feeling and experience.
    </div>
    `, "#e9a13c"),
    new ProjectData("project-4", "ABB Digital Twin", "https://images.tsingloo.com/abb-stack.gif", `
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
    This project is mainly separated into the robotic arm and the client Unity program on PC. 
    To maintain the communication, the Unity program pulls a thread to handle the data flow and check the value change in Update(). 
    The robotic arm will report its current state and task by around 20Hz and then be parsed in Unity to trigger corresponding events.
    <br> 
    <br> 
    Following the Model View Controller design pattern, Matlab takes the role of the controller to handle the solution of Inversed kinematic problems defined by the user's input command. 
    The states are organized as BindableProperty and register to UI elements, and the UI elements are only responsible for displaying and pushing new commands instead of operating on the state's data directly, 
    thus isolating the data from control logic and friendly for future extension.
    </div>


    `, "#ba372e"),
    new ProjectData("project-5", "RTS Demo", "https://images.tsingloo.com/ShareX/2024/01/chrome_rmhnexaa9k.gif", `
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
    This project takes client-server architecture to handle multiplayer mode. It supports the host lobby and joins the existing game by inputting the IP address and port.  
    As the Mirror's feature, the owner of a game session will be the host server. All the authentication-required functions are permitted on the server, and the server syncs the objects to the client.
    Remote Procedure Call is widely applied to this project. Build and destroy tanks are executed through RPCs, ensuring that actions performed by one player are accurately replicated across all connected clients.  
    
    </div>
    `, "#5a78af"),
    new ProjectData("project-6", "Space Fighter", "https://images.tsingloo.com/ShareX/2024/01/SpaceFighter_cCMGTNCmsN.gif", `
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
    <video controls style="width:100%; max-width:720px; height:auto;" poster="http://images.tsingloo.com/SpaceFighter_Demo.jpg">>
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
    The particles storage area is managed as a 2-dimentional array. Instead of hardly placing the incoming particle when it hits the placed one, this project allows the particle to bounce according to physics and do a tween to move to given place.
    This requires the safety check when a free particle hit a particle in tween to avoid overlapping and false placement.

    
    `, "#80cbc4"),
    new ProjectData("project-7", "Virtual Assembly", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_Ij6JuZOjWZ.gif", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
    <h3>Main Features</h3>
        <ul>
        <li>Multiplayer powered by Mirror</li>
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