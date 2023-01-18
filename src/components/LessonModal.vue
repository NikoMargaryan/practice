<template>
  <div class="user-page">
    <button
      type="button"
      class="btn btn-primary"
      @click="openModal"
    >
      More
    </button>
    <modal
       v-if="isModalOpen"
       title="User Agreement"
       @close="isModalOpen = false"
    >
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
      </div>

    </modal>
    <TextEditor />
  </div>
</template>

<script>
import Modal from '@/components/Modal/'
import TextEditor from "@/components/TextEditor";

export default {
  components: { Modal , TextEditor},
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 24px;
}
</style>


