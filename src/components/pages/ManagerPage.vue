<template>
  <div>
    <base-header>Personnel and Payment Management</base-header>
    <div class="innerDiv firstDiv">
      <base-subheader>Students</base-subheader>
      <base-table :data="dummyStudentList"></base-table>
      <base-button>Add Student</base-button>
      <base-button>Show Students</base-button>
    </div>
    <div class="innerDiv">
      <base-subheader>Workers</base-subheader>
      <base-table :data="dummyWorkerList"></base-table>
      <base-button>Add Worker</base-button>
      <base-button>Show Workers</base-button>
    </div>
    <div>
      <base-subheader>Finances</base-subheader>
      <base-button>Generate Report</base-button>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseSubheader from "@/components/base/BaseSubheader";
import BaseTable from "@/components/base/BaseTable";
import BaseButton from "@/components/base/BaseButton";

export default {
  name: "ManagerPage",
  components: {BaseButton, BaseTable, BaseHeader, BaseSubheader},
  data: function () {
    return {
      dummyStudentList: [
        {
          colA: "jack.jpg",
          colB: "Nahum Kletkin",
          colC: "nuumachkka@gmail.com",
          colD: "4000"
        }
      ],
      dummyWorkerList: [
        {
          colA: "worker,jpg",
          colB: "Worker Name",
          colC: "worker@example.com",
          colD: "4000"
        }
      ]
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}

.innerDiv {
  margin-bottom: 10em;
}
</style>