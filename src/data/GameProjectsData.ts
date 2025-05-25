import ProjectData from '@/data/ProjectData'; // Adjust path

export default [
  new ProjectData(
    "project-1",
    "EolaneVR", // Name of the project
    "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_a6lZz0HJuk.gif",
    "EolaneVR", // Name of the component like project1_detail.vue
    "#989000DD",
    true,  // isHigh (e.g., EolaneVR is tall)
    true   // isWide (e.g., EolaneVR is wide)
  ),
  new ProjectData(
    "project-2",
    "WildPerception",
    "https://images.tsingloo.com/ShareX/2024/01/msedge_6kr9fWtPmd.gif",
    "WildPerception",
    "#383838DD",
    true,  // isHigh
    false  // not isWide
  ),
  new ProjectData(
    "project-3",
    "The Verdant Revival", // Assuming this is a 1x1 item
    "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_c6k0aFotAQ.gif",
    "The Verdant Revival",
    "#8CC21F",
    false, // not isHigh
    false  // not isWide
  ),
    new ProjectData(
    "project-4",
    "ABB Digital Twin", // Assuming this is a 1x1 item
    "https://images.tsingloo.com/abb-stack.gif",
    "ABB Digital Twin",
    "#005BAB",
    false, // not isHigh
    false  // not isWide
  ),
    new ProjectData(
    "project-5",
    "RTS Demo", // Assuming this is a 1x1 item
    "https://images.tsingloo.com/ShareX/2024/01/chrome_rmhnexaa9k.gif",
    "RTS Demo",
    "#2CC9C7",
    false, // not isHigh
    false  // not isWide
  ),

  new ProjectData(
    "project-6",
    "Space Fighter", // Assuming this is a 1x1 item
    "https://images.tsingloo.com/ShareX/2024/01/SpaceFighter_cCMGTNCmsN.gif",
    "Space Fighter",
    "#EDB9CC",
    false, // not isHigh
    false  // not isWide
  ),

      new ProjectData(
    "project-7",
    "Virtual Assembly", // Assuming this is a 1x1 item
    "https://images.tsingloo.com/ShareX/2024/01/PotPlayerMini64_Ij6JuZOjWZ.gif",
    "Virtual Assembly",
    "#BD2A6C",
    false, // not isHigh
    false  // not isWide
  ),
  // ... add other projects with their isHigh, isWide, and detailComponentName
];