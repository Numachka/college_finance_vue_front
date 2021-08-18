<template>
  <div>
    <base-header :name="fullName">Welcome Worker </base-header>
    <base-table :columns="columnNames" :data="dummyCourseList"></base-table>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseTable from "@/components/base/BaseTable";
export default {
  name: "WorkerPage",
  components: {BaseTable, BaseHeader},
  data: function() {
    return {
      //TODO These will be filled according to the url received.
      fullName: "",
      columnNames: {
        colA: "Course Number",
        colB: "Course Name",
        colC: "Course Credit",
        colD: "Salary"
      },
      dummyCourseList: []
    }
  },
  beforeCreate() { //Before page loads we fetch data.

  }
}
</script>

<style scoped>

</style>