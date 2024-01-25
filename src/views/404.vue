<template>
  <div class="http-404">404 🙈</div>
  <router-link to="/game-projects" class="wide-button">VIEW MY PROJECTS</router-link>
</template>

<style scoped>
.http-404 {
  font-size: 11em;
  line-height: 3em;
  text-align: center;
}

.wide-button {
  display: inline-block;
  width: 95%; /* Makes the button take the full width of its container */
  padding: 20px; /* Adds some padding for better visuals */
  background-color: #696969; /* Example background color */
  color: #dcdcdc; /* Text color */
  border: none; /* Removes the border */
  border-radius: 5px; /* Optional: rounds the corners */
  cursor: pointer; /* Changes the cursor to indicate it's clickable */
  font-size: 1.5em;
  line-height: 0.6em;
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
}
</style>
