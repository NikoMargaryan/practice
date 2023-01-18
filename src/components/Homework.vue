<template>
  <div class="input">
    <p>Choose the amount</p>
    <button
        type="button"
        @click="minus"
    >
      -
    </button>
    <input
        type="number"
        :value="count"
        :min="minCount"
        :max="maxCount"
    >
    <button
        type="button"
        @click="plus"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
name: "Homework",
  data(){
    return {
      count:1,
      maxCount:10,
      minCount:1
    }
  },
  methods:{
    plus(){
      if(this.count < this.maxCount){
        this.count++
      }
    },
    minus(){
      if(this.count > this.minCount){
        this.count--
      }
    }
  }
}
</script>

<style scoped>

</style>