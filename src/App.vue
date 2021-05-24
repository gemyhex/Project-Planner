<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Project</router-link>

  </div>
  <router-view />
</template>

<style lang="scss">
*{
  transition: 0.5s all ease-in-out;
  box-sizing: border-box;
  outline: none;
}
body{
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}
.nav{
  text-align: center;
  a{
    text-decoration: none;
    color: rgb(155, 152, 152);
    margin: 0 10px;
    font-weight: bold;
    &:hover{
      color: black;
    }
  }
}

</style>
