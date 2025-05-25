<template>
  <div> <div class="paragraph">
    <h3>Project Overview</h3> 

    <p>
        This is the content 
    </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EolaneVRDetails', // Component name
  // You can add props here if you need to pass data into this component
  // For example, if some part of the content was still dynamic from ProjectData
});
</script>

<style scoped>
/* Styles specific to EolaneVR's details.
   "scoped" means these styles will only apply to this component. */
.paragraph {
  margin-bottom: 20px;
  line-height: 1.6; /* Example: improve readability */
}
.paragraph.center { /* More specific selector if needed */
  text-align: center;
}
.paragraph h3 { /* Target h3 within .paragraph if that's the structure */
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 1.4em; /* Example */
}
.paragraph ul {
  list-style-position: inside;
  padding-left: 0; /* Reset padding if list-style-position is inside */
}
.paragraph ul li {
  margin-bottom: 5px; /* Example spacing */
}
.pc-screenshot {
  max-width: 48%; /* Adjust as needed for your layout */
  margin: 1%;
  height: auto;
  display: inline-block; /* For side-by-side images */
  vertical-align: top; /* Align images if they have different heights */
}
.one-image {
  max-width: 90%; /* Or a specific pixel width */
  margin: 20px auto;
  display: block;
}
.notice {
  background-color: #f8f9fa; /* Lighter background */
  padding: 15px;
  margin: 20px 0;
  border-left: 4px solid #007bff; /* Example border color */
  border-radius: 4px;
}
.youtube, video {
  display: block; /* Ensure block display for margin auto to work */
  margin: 20px auto; /* Center the video/iframe */
  max-width: 100%; /* Ensure responsiveness */
}
.youtube { /* Specific for iframes if needed */
  height: 315px; /* Default 16:9 aspect ratio for 560px width */
  /* Consider aspect ratio boxes for responsive iframes if fixed height isn't ideal */
}
</style>