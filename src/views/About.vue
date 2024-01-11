<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello! 你好！</h1>

    <div class="paragraph">
      <div>
        I'm <strong>TsingLoo (Xiaonan Pan)</strong>, a passionate developer with 2+ years of experience in <strong>Game Client Engineering</strong>, <strong>Graphics</strong>, and <strong>Virtual Reality</strong>.
        I am passionate about trying new technologies from various fields, with a solid interest in exploring the dynamic world of gaming.
        Recently, I've been engaged with Asgard's Wrath 2, and I am excited about the prospect of creating epic content inspired by such groundbreaking games.
      </div>

      <div style="margin-top: 20px;">I work on <router-link to='/game-projects'>my game projects</router-link> and write a <a href='http://www.tsingloo.com' target='blank'>blog</a> to share my experiences.</div>

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