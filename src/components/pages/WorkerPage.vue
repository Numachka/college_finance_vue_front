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
      dummyCourseList: [],
      http: new XMLHttpRequest()
    }
  },
  methods: {
//Displays the list in the student.html page inside of ul element with id "studentList".
    displayWorkerData() {
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
          that.displayWorkerDetails(data);
        }
      }
    },
    displayWorkerDetails(userData) {
      this.fullName = userData.name;
    }
  },
  computed: {},
  beforeMount() {
    this.displayWorkerData();
  },
  mounted() {
    this.dummyCourseList = [
      {
        colA: "10123",
        colB: "Engineering",
        colC: "worker1@example.com",
        colD: "3000"
      },
      {
        colA: "10124",
        colB: "Vue",
        colC: "worker1@example.com",
        colD: "3500"
      },
      {
        colA: "10125",
        colB: "Philosophy",
        colC: "worker1@example.com",
        colD: "1000"
      },
    ]
  }
}
</script>

<style scoped>

</style>