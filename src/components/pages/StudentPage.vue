<template>
  <div>
    <base-header :name="fullName">Welcome Student</base-header>
    <base-table :columns="columnNames" :data="dummyCourseList"></base-table>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseTable from "@/components/base/BaseTable";

export default {
  name: "StudentPage",
  components: {BaseTable, BaseHeader},
  data: function () {
    return {
      fullName: "",
      balance: 0,
      http: new XMLHttpRequest(),
      columnNames: {
        colA: "Course Number",
        colB: "Course Name",
        colC: "Course Credit",
        colD: "Price"
      },
      dummyCourseList: []
    }
  },
  methods: {
//Displays the list in the student.html page inside of ul element with id "studentList".
    displayStudentData() {
      let that = this;
      const url = `${that.$store.state.sessionServerURLPrefix}/twins/items/`+
          `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}/`+
          `${that.$store.state.sessionSpace}/${that.$store.state.sessionID}`;
      that.http.open("GET", url, true);
      that.http.setRequestHeader('Accept', 'application/json');
      that.http.send();
      that.http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let resp = this.response;
          let data = JSON.parse(resp);
          that.displayStudentDetails(data);
        }
      }
    },
    displayStudentDetails(userData) {
      this.fullName = userData.name;
    }
  },
  computed: {},
  beforeMount() {
    this.displayStudentData();
  },
  mounted() {
    this.dummyCourseList = [
      {
        colA: "10123",
        colB: "Linear Algebra",
        colC: "student1@example.com",
        colD: "4000"
      },
      {
        colA: "10124",
        colB: "Calculus",
        colC: "student1@example.com",
        colD: "2000"
      },
      {
        colA: "10125",
        colB: "Physics",
        colC: "student1@example.com",
        colD: "1000"
      },
    ]
  }
}
</script>

<style scoped>

</style>