import ProjectData from '@/data/ProjectData'; // Adjust path

export default [
  new ProjectData(
    "project-1",
    "TheNameOfTheProject_1", // Name of the project
    "https://fakeimg.pl/200x100/?retina=1&text=Portfolio&font=noto",
    "project1_detail", // Name of the component like project1_detail.vue
    "#989000DD",
    true,  // isHigh (e.g., EolaneVR is tall)
    true   // isWide (e.g., EolaneVR is wide)
  ),
  new ProjectData(
    "project-2",
    "TheNameOfTheProject_2",
    "https://fakeimg.pl/200x100/?retina=1&text=200x100&font=noto",
    "project2_detail",
    "#383838DD",
    true,  // isHigh
    false  // not isWide
  ),
  new ProjectData(
    "project-3",
    "TheNameOfTheProject_3", // Assuming this is a 1x1 item
    "https://fakeimg.pl/400x400/?retina=1&text=400x400&font=noto",
    "project3_detail",
    "#e9a13cDD",
    false, // not isHigh
    false  // not isWide
  ),
  // ... add other projects with their isHigh, isWide, and detailComponentName
];