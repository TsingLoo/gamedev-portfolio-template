<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello! 你好！</h1>

    <div class="paragraph">
      <div>
        I'm <strong>TsingLoo (Xiaonan Pan)</strong>, a passionate developer with 2+ years of experience in <strong>Game Client Engineering</strong>, <strong>Graphics</strong>, and <strong>Virtual Reality</strong>.
        I'm willing to try new technologies from various fields, with a solid interest in exploring the dynamic world of gaming.
        Recently, I've been engaged with Asgard's Wrath 2 and Palworld, and I am thrilled at the prospect of creating epic content inspired by such groundbreaking games.
      </div>

      <div style="margin-top: 20px;">I work on various projects and write <a href='http://www.tsingloo.com' target='blank'>blogs</a> to share my experiences.</div>
      <router-link to="/game-projects" class="wide-button">Click here to view my projects</router-link>     

      <div style="margin-top: 20px;">I'm currently applying for a <strong>M.S. in Computer Science</strong> in the field of <strong>Software Engineering</strong>, <strong>Graphics</strong>, <strong>Human–Computer Interaction</strong> and <strong>Game Development</strong>. I'm always enthusiastic about meeting new people and working together to create something innovative and exciting.</div>
                                    <div style="margin-top: 20px;">You can reach me at <a href="mailto:TsingLoo@Outlook.com">TsingLoo@Outlook.com</a> or <router-link to="/contact">through here</router-link>.</div>
     
    </div>

    <div class="photo">
      <img :src="`./img/avatar.png`" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>

.wide-button {
  display: inline-block;
  width: 100%; /* Makes the button take the full width of its container */
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
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>