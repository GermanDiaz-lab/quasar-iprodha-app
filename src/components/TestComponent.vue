<template>
  <div ref="draggableContainer" id="draggable-container">
    <div id="draggable-header" @mousedown="dragMouseDown">
      <slot name="header"></slot>
    </div>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'DraggableDiv',
  setup() {
    const positions = ref({
      clientX: undefined,
      clientY: undefined,
      movementX: 0,
      movementY: 0,
    });

    const draggableContainer = ref(null);

    const dragMouseDown = (event) => {
      event.preventDefault();
      positions.value.clientX = event.clientX;
      positions.value.clientY = event.clientY;
      document.onmousemove = elementDrag;
      document.onmouseup = closeDragElement;
    };

    const elementDrag = (event) => {
      event.preventDefault();
      positions.value.movementX = positions.value.clientX - event.clientX;
      positions.value.movementY = positions.value.clientY - event.clientY;
      positions.value.clientX = event.clientX;
      positions.value.clientY = event.clientY;
      let newTop =
        draggableContainer.value.offsetTop - positions.value.movementY;
      let newLeft =
        draggableContainer.value.offsetLeft - positions.value.movementX;

      if (newTop <= 0) newTop = 0;
      if (newLeft <= 0) newLeft = 0;

      draggableContainer.value.style.top = newTop + 'px';
      draggableContainer.value.style.left = newLeft + 'px';
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    return {
      positions,
      draggableContainer,
      dragMouseDown,
      elementDrag,
      closeDragElement,
    };
  },
};
</script>

<style>
#draggable-container {
  position: absolute;
  width: 400px;
  z-index: 2000;
  top: 0px;
  left: 0px;
}
#draggable-header {
  z-index: 2000;
  cursor: all-scroll;
}
</style>
