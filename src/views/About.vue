<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello! 你好！</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Xiaonan(Ashton) Pan</strong>, a passionate developer with 2+ years of experience in <strong>Game Client Engineering</strong>, <strong>Graphics</strong>, and <strong>Virtual Reality</strong>.
        I'm willing to try new technologies from various fields, with a solid interest in exploring the dynamic world of gaming.
        I am currently a <strong>Master's student</strong> at <a href="https://www.upenn.edu/" target="_blank"><strong>University of Pennsyvania</strong></a>, majoring in <a href="https://www.cis.upenn.edu/graduate/program-offerings/mse-in-computer-graphics-and-game-technology/" target="_blank"><strong>Computer Graphics and Game Technology</strong></a>.
      </div>

      <div style="margin-top: 20px;">I work on various projects and write <a href='http://www.tsingloo.com' target='blank'>blogs</a> to share my experiences.</div>
      <router-link to="/game-projects" class="wide-button">Click here to view my projects</router-link>

      <div style="margin-top: 20px;">I'm currently applying for a job in the field of <strong>Comptuer Graphics</strong>, <strong>Game Development</strong> & <strong>Software Engineering</strong>. I'm always enthusiastic about meeting new people and working together to create something innovative and exciting.</div>
      <div style="margin-top: 20px;">You can reach me at <a href="mailto:xiaonan.application@outlook.com">xiaonan.application@outlook.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="https://images.tsingloo.com/princeton_lowquali.jpg" alt="Xiaonan - Princeton photo" />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.wide-button {
  display: inline-block;
  width: 95%; /* Makes the button take the full width of its container */
  padding: 10px; /* Adds some padding for better visuals */
  background-color: #696969; /* Example background color */
  color: #dcdcdc; /* Text color */
  border: none; /* Removes the border */
  border-radius: 5px; /* Optional: rounds the corners */
  cursor: pointer; /* Changes the cursor to indicate it's clickable */
  font-size: 1em;
  line-height: 0.6em;
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
}

.paragraph {
  max-width: 700px; /* Adjust as needed */
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px; /* Initial top margin for smaller screens */
  text-align: right; /* Right-aligns image within its container on smaller screens */
}

.photo img {
  max-width: 280px; /* Example: Control the image size */
  height: auto;     /* Maintain aspect ratio */
  display: block;   /* Can help with spacing issues */
}

@media only screen and (min-width: 620px) { /* Or a breakpoint that suits your design, e.g., 768px or 992px */
  .paragraph {
    float: left;
    width: 60%; /* Example: Adjust width to make space for the photo */
    /* Or use max-width and let the photo take the remaining space */
  }

  .photo {
    float: left; /* Float the photo to the right */
    width: 30%; /* Example: Adjust width for the photo container */
    padding-left: 60px; /* Add some space between paragraph and photo */
    margin-top: 0; /* Reset top margin for larger screens */
    text-align: left; /* Or center, or remove if image fills the container */
  }

  .photo img {
    margin-left: 16; /* If you want the image itself to be right-aligned within the .photo div */
    margin-right: 0;
    /* Adjust other image styles as needed for the side-by-side layout */
  }
}
</style>