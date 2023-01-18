<template>
  <div class="search">
    <h1>I'll find you</h1>
        <input type="text" @input="searchName= $event.target.value">
          <p>All names: {{names.length}},matched: {{getFilledNames.length}}</p>
              <ul class="name">
                <li
                  v-for="(names,index) in getFilledNames"
                  :key="index"
                >{{names}}</li>
              </ul>
  </div>
</template>

<script>
export default {
  name: "HomeworkSearch",
  data(){
    return {
      searchName:'',
      names: ['Tom','Harry','Armen','Victor','Diego']
    }
  },
  computed:{
    getFilledNames(){
      return this.names.filter(name=>name.toLowerCase().includes(this.searchName.toLowerCase()))
    }
  }
}
</script>

<style scoped>

.search{
  display: flex;
  flex-direction: column;
  width:200px;
}
.name{
  display: flex;
  flex-direction: column;
}
li{
  list-style-type: none;
}
</style>