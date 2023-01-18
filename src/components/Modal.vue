<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeModal"
          >
            <span class="aria" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
            class="modal-body"
                 @scroll='onScroll'
        >
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
            >
              Cancel
            </button>
            <button
                type="button"
                class="btn btn-secondary"
                :disabled="!isRulesRead"
            >
              Agree
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>
<!--                    ref="modalBody"-->
<!--                    @scroll="onBodyScroll"-->
<script>

// import ScrollHandler from "@/mixins/scrollHandler";

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  // mixins: [ScrollHandler],
  data(){
    return {
      isRulesRead: false
    }
  },
  created(){
    this.$log()
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    onScrollEnd() {
      this.isRulesRead = true
    }


    // onBodyScroll() {
    //   const modalBody = this.$refs.modalBody
    //   if(modalBody.clientHeight + modalBody.scrollTop >=
    //   modalBody.scrollHeight) {
    //     this.isRulesRead= true
    //   }
    // }
  }
  // mounted() {
  //   const modalBody = this.$refs.modalBody
  //   modalBody.scrollTop = modalBody.scrollHeight - modalBody.clientHeight
  // },
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}

//.modal-header{
//  display: flex;
//  justify-content: space-between;
//}
//.close{
//  width: 26px;
//  height: 26px;
//}
//
//.modal-content{
//  height: 150px;
//  width: 300px;
//  display: flex;
//  border: 1px solid black;
//  flex-direction: column;
//}
</style>