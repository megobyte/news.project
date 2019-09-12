<template lang="pug">
  .popup
    .overlay(@click="$emit('close')")
    .window
      .title
        span {{title}}
        .close(@click="$emit('close')") &times;
      .content
        slot
</template>

<script>
export default {
  name: 'Popup',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    cursor: pointer;
  }

  .window {
    position: absolute;
    width: 100%;
    max-width: 500px;
    top: 35px;
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(#000, 0.3);

    .title {
      width: 100%;
      padding: 15px;
      font-size: 1em;
      font-weight: bold;
      @include flex(row);
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      background: #eee;

      .close {
        font-size: 1.5em;
        cursor: pointer;
        @include flex();
        overflow: hidden;
        width: 15px;
        height: 15px;
      }
    }

    .content {
      padding: 15px;
    }
  }
}
</style>
