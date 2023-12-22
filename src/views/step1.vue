<template>
  <div class="mainApplication">
    <div class="d-flex">
      <div class="circle" v-if="currentStep === 1">
        <p>1</p>
      </div>
      <div class="circle">
        <p>2</p>
      </div>
      <div class="circle">
        <p>3</p>
      </div>
    </div>


    <div v-if="currentStep === 1">
      <!-- Step 1 content -->
    </div>
    <div v-else-if="currentStep === 2">
      <!-- Step 2 content -->
    </div>
    <div v-else-if="currentStep === 3">
      <!-- Step 2 content -->
    </div>
    <!-- Add more steps as needed -->
    
    <!-- Progress bar -->
    <div class="progress-bar">
      <div :style="{ width: (currentStep / totalSteps) * 100 + '%' }"></div>
    </div>
    
    <!-- Navigation buttons -->
    <div class="button-container">
      <button @click="prevStep" :disabled="currentStep === 1">Previous</button>
      <button @click="nextStep" :disabled="currentStep === totalSteps">Next</button>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    steps: Array, // Array of step names
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },

}
</script>
 
<style lang="scss" scoped>
.circle {
  width: 32px;
  height: 32px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  p {
    margin-bottom: 0;
  }
}

.progress-bar {
  background-color: #ccc;
  height: 10px;
  margin-top: 20px;
}

.progress-bar div {
  background-color: #007bff;
  height: 100%;
}

.button-container {
  margin-top: 20px;
  text-align: right;
}

</style>