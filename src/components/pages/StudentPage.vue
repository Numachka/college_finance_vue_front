<template>
  <div>
    <base-header :name="fullName">Welcome Student </base-header>
    <base-table :columns="columnNames" :data="dummyCourseList"></base-table>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseTable from "@/components/base/BaseTable";
export default {
  name: "StudentPage",
  components: {BaseTable, BaseHeader},
  data: function() {
    return {
      //TODO These will be filled according to the url received.
      fullName: "Nahum Kletkin",
      columnNames: {
        colA: "Course Number",
        colB: "Course Name",
        colC: "Course Credit",
        colD: "Price"
      },
      dummyCourseList: [
        {
          colA: "10121",
          colB: "Linear Algebra",
          colC: "5",
          colD: "1000"
        },
        {
          colA: "10122",
          colB: "Calculus 2",
          colC: "5",
          colD: "1000"
        },
        {
          colA: "40121",
          colB: "Finances for Engineers",
          colC: "2",
          colD: "400"
        },
        {
          colA: "10126",
          colB: "Linear Algebra",
          colC: "5",
          colD: "1000"
        },
        {
          colA: "10125",
          colB: "Calculus 2",
          colC: "5",
          colD: "1000"
        },
        {
          colA: "40123",
          colB: "Finances for Engineers",
          colC: "2",
          colD: "400"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>