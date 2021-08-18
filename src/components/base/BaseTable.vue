<template>
  <div>
    <div class="modal">
      <list-overlay></list-overlay>
    </div>
    <ul class="coloredText">
      <li>Course Number</li>
      <li>Course Name</li>
      <li>Credits</li>
      <li>Price</li>
    </ul>
    <hr>
    <ul class="courseListItem"
        v-for="datum in data"
        :key="datum.colA"
        v-on:click="viewDetails(datum.colA, datum.colB, datum.colC, datum.colD,)">
      <li>{{ datum.colA }}</li>
      <li>{{ datum.colB }}</li>
      <li>{{ datum.colC }}</li>
      <li>{{ datum.colD }}</li>
    </ul>
    <ul class="coloredText">
      <li>Total price:</li>
      <li>{{ calculateTotalPayment }}</li>
    </ul>
  </div>
</template>

<script>
import ListOverlay from "@/components/overlays/ListOverlay";
export default {
  name: "BaseTable",
  components: {ListOverlay},
  props: ['data'],
  data() {
    return {
      totalPaymentValue: 0
    }
  },
  methods: {
    viewDetails(colA, colB, colC, colD) {

    }
  },
  computed: {
    calculateTotalPayment() {
      for (const datum of this.data) {
        let tempPrice = parseInt(datum.colD);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.totalPaymentValue += tempPrice;
      }
      return this.totalPaymentValue;
    }
  },
}
</script>

<style scoped>
div {
  display: grid;
  color: #ffffff;
}

div ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  list-style: none;
  padding: 0;
}

ul li {
  text-align: center;
  padding: 0.5em;
  overflow-x: hidden;
  max-width: 100%;
}

.courseListItem:hover {
  background-color: rgba(176, 178, 181, 0.4);
  cursor: pointer;
}

.coloredText {
  color: #1aa000;
}

hr {
  border: solid 1px #000000;
  width: 100%;
}
</style>