<template>
  <div class="container">
    <div class="main">
      <div class="img-wrapper">
<!--        <img src="../assets/2023-BMW-M5-exterior-8.jpg" v-if="imgVisible" alt="BMW-M5">-->
<!--        <img src="../assets/2023-BMW-M5-exterior-8.jpg" v-show="imgVisible" alt="BMW-M5">-->

        <img
            v-if="imgVisible"
            :class="imgFilters"
            :style="imgStyles"
            src="../assets/2023-BMW-M5-exterior-8.jpg"
            alt="BMW-M5"
        >
        <p v-else>"Image hidden"</p>
      </div>

    </div>
      <div class="controls">
        <h1>BMW M5</h1>

        <h2>Filters</h2>
        <div class="btn-group flex">
          <button
              type="button"
              :class="imgFilters.sepia ? 'active' : ''"
              @click="imgFilters.sepia = !imgFilters.sepia"
          >
            Sepia
          </button>
          <button
              type="button"
              :class="imgFilters.border ? 'active' : ''"
              @click="imgFilters.border = !imgFilters.border"
          >
            Border
          </button>
          <button
              type="button"
              :class="imgFilters.shadow ? 'active' : ''"
              @click="imgFilters.shadow = !imgFilters.shadow"
          >
            Shadow
          </button>
          <h2>Size</h2>
          <div class="btn-group">
            <label>
              Width: {{ imgSizes.currentWidth }}
              <input
                  type="range"
                  :value="imgSizes.currentWidth"
                  @input="imgSizes.currentWidth = $event.target.value"
                  :min="imgSizes.minWidth"
                  :max="imgSizes.maxWidth"
              >
            </label>
            <label>
              Height: {{ imgSizes.currentHeight }}
              <input
                  type="range"
                  :value="imgSizes.currentHeight"
                  @input="imgSizes.currentHeight = $event.target.value"
                  :min="imgSizes.minHeight"
                  :max="imgSizes.maxHeight"
              >
            </label>
          </div>
          <h2>Rotate</h2>
          <div class="btn-group">
            <label>

              Corner: {{rotate.value}}
              <input
              type="range"
                :value="rotate.value"
                @input="rotate.value = $event.target.value"
                :min="rotate.minRotate"
                :max="rotate.maxRotate"
              >
            </label>
          </div>
          <button @click="imgVisible= !imgVisible">
            {{imgVisible ? "Hide" : "Show"}}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeworkImg",
  data(){
    return{
      imgVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        shadow: false
      },
      imgSizes: {
        maxWidth: 680,
        maxHeight: 480,
        currentWidth: 680,
        currentHeight: 480,
      },
      rotate: {
        maxRotate: 360,
        minRotate: 0,
        value: 0,
      }
    }
  },
        computed: {
        imgStyles() {
        return {
          width: `${this.imgSizes.currentWidth}px`,
          height: `${this.imgSizes.currentHeight}px`,
          transform: `rotate(${this.rotate.value}deg)`
        }
      }
    }

}
</script>

<style lang="scss" scoped>
.container
{
  display: flex;
  justify-content: center;
}
.main
{
  display:flex;
  flex-direction: row-reverse;
}
.container {
  margin-top: 40px;
}
.controls {
  margin-left: 100px;
}
.img-wrapper {
  width: 640px;
  height: 480px;
  background-color: #cecece;
}
img {
  transition: 0.2s ease;
&.sepia {
   filter: sepia(100%);
 }
&.border {
   border: 5px solid #deae0a
 }
&.small {
   width: 400px;
 }
  &.shadow {
    -webkit-box-shadow: 0 1px 15px 5px #000000;
    box-shadow: 0 1px 15px 5px #000000;
  }
}
button {
  margin-right: 10px;
&.active {
   background-color: #dbdbdb;
 }
}
h2 {
  margin-bottom: 10px;
}
.btn-group {
  margin-bottom: 20px;
}
input[type="range"] {
  display: block;
}

button {
  margin-right: 10px;
&.active {
   background-color: #dbdbdb;
 }
}
</style>