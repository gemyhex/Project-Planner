<template>
  <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input v-model="title" type="text" required>
      <label>Details</label>
      <textarea v-model="details" required></textarea>
      <label>Completed?</label>
      <input type="checkbox" v-model="completed">
      <button>Add Project</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            title: "",
            details: "",
            completed: null
        }
    },
    methods: {
        handleSubmit(){
            let plan = {
                title: this.title ,
                details: this.details,
                completed: this.completed
            }
            fetch('http://localhost:3000/plans' , {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(plan)
            }).then(() => {
                this.$router.push('/')
            }).catch(err => console.log(err.message))
        }
    }
}
</script>

<style lang="scss">
form{
    width: 600px;
    margin-top: 25px;
    background: #fff;
    padding: 20px 15px;
    text-align: center;
    label,
    input,
    textarea{
        display: block;
        margin-bottom: 10px;
        width: 90%;
        margin: 10px auto;
    }
    label{
        font-weight: bold;
    }
    input{
        height: 30px;
        border: 0;
        border-bottom: 2px solid #ddd;
    }
    textarea{
        height: 70px;
        border: 1px solid #ddd;
    }
    button{
        width: 150px;
        height: 50px;
        background: rgb(22, 226, 83);
        color: white;
        font-weight: bold;
        cursor: pointer;
        border: 0;
    }
}
</style>