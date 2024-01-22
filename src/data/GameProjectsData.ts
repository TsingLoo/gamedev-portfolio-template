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
    Besides the core mechanism, I developed some powerful components and toolkits to extend the existing plugins and packages(e.g., <a href="https://github.com/TsingLoo/TinyUFramework/blob/117caf045c1ab9f485c49643f42e87ee3fa4ae22/Editor/EditorHelper.cs#L261"><i class="fa fa-github fa-lg fa-fw"></i>Localization Asset Generator</a>), 
    for team to boost development.
    </div>

    `, "#989000", true),
    new ProjectData("project-2", "Wild Perception", "https://images.tsingloo.com/ShareX/2024/01/msedge_6kr9fWtPmd.gif", `
    <div class="paragraph">
    <h3>Overview</h3> 
        <strong>Wild Perception</strong> is an enhancing toolkit for generating large-scale Multi-View Video Dataset in the format of the Wildtrack dataset. 
        It is now part of the work of a computer vision research on the multi-view tasks. The source code and detailed instructions are now available on:<br>
        <a href="https://github.com/TsingLoo/com.tsingloo.wildperception"><i class="fa fa-github fa-lg fa-fw"></i>com.tsingloo.wildperception</a> & 
        <a href="https://github.com/TsingLoo/MultiviewX_Perception"><i class="fa fa-github fa-lg fa-fw"></i>MultiviewX_Perception</a>.
        <br>
        <br>
        It was my Final Year Project at Xi'an Jiaotong-Liverpool University and received the <strong>Best Performance in Final Year Project</strong> prize in 2023, which is the top 1 out of 256 students.
    </div>

    <div class="paragraph">
        <div class="notice">
        You can download the submitted final report on this from <a href="https://game.tsingloo.com/backup/Final_Report.pdf" target="_blank">here</a>.
</div>
    </div>

    <div class="paragraph">
    <h3>Main Features</h3> 
        <ul>
        <li>Capable of generating large scale datasets</li>
        <li>Camera calibration</li>
        <li>High fidelity images</li>
        <li>Integrated package and quick start</li>
        <li>Visulize camera's field of view</li>
        <li>Support for Unity SyntheticHumans Package</li>
        </ul>
    </div>


    <div class="paragraph">
    <h3>Technical Insights</h3>
    

    </div>
    `, "#383838"),
    new ProjectData("project-3", "The Verdant Revival", "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_c6k0aFotAQ.gif", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotograpRhy">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
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
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

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