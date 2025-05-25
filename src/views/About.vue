<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello! 你好！</h1>

    <div class="paragraph">
        This is the introduction page of my personal website.
    </div>

    <div class="photo">
      <img src="https://fakeimg.pl/200x100/?retina=1&text=200x100&font=noto" alt="Avatar of John" /> 
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