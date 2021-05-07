<template>
    <div class="card">
    <div class="data">{{ value }}%</div>
    <input class="slider" type="range" min="0" max="100" step="1" v-model="value" @input="updateSlider">
    <div class="group-btns center">
      <button class="btn" @click="value = 25">25%</button>
      <button class="btn" @click="value = 50">50%</button>
      <button class="btn" @click="value = 75">75%</button>
      <button class="btn" @click="value = 100">100%</button>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        value: 35.4,
      
    }),
    methods: {
     updateSlider(e) {
            let clickedElement = e.target,
                min = clickedElement.min,
                max = clickedElement.max,
                val = clickedElement.value;
     }
   }
}
</script>

<style>
.data
{
    color: #4f608f;
    margin-bottom: 20px;
    display: flex;
}
/* The slider itself */
.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 25px;
    background-image: linear-gradient(to right, #ADD8E6 0%, #bbff00 100%);
    background-repeat: no-repeat;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    padding: 18px 0;
    border-radius: 20px;
    margin-bottom: 20px;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1;
    /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 25px;
    border-radius: 50%;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #fff;

    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #04AA6D;
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
}
</style>