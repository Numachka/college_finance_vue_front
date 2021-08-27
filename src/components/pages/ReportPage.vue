<template>
  <div>
    <base-header>College Finance Report</base-header>
    <base-subheader>Basics</base-subheader>
    <base-text>Total amount of students in college: {{ this.studentAmount }}</base-text>
    <base-text>Raking in a total of: {{ this.studentTotalBalance }}$</base-text>
    <base-text>Total amount of workers in college: {{ this.workerAmount }}</base-text>
    <base-text>Costing a total of: {{ this.workerTotalPayment }}$</base-text>
    <base-text>Total of people : {{ this.totalPeople }}</base-text>
    <base-subheader>Finances</base-subheader>
    <base-text>Income: {{ this.income }}$</base-text>
    <base-text>Liabilities: {{ this.liabilities }}$</base-text>
    <base-text>Revenue: {{ this.revenue }}$</base-text>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseSubheader from "@/components/base/BaseSubheader";
import BaseText from "@/components/base/BaseText";

export default {
  name: "ReportPage",
  components: {BaseText, BaseHeader, BaseSubheader},
  data: function () {
    return {
      studentAmount: 0,
      studentTotalBalance: 0,
      workerAmount: 0,
      workerTotalPayment: 0,
      totalPeople: 0,
      income: 0,
      liabilities: 0,
      revenue: 0,
      http: new XMLHttpRequest()
    }
  },
  methods: {
    loadReport() {
      let that = this;
      let userBody = JSON.stringify({
        "userId": {
          "space": that.$store.state.sessionSpace,
          "email": that.$store.state.sessionEmail
        },
        "role": "PLAYER", //turn into a player for operations.
        "username": that.$store.state.sessionUsername,
        "avatar": that.$store.state.sessionAvatar
      });
      //First http request -> turn manager to player.
      let url = `${that.$store.state.sessionServerURLPrefix}/twins/users/` +
          `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`;
      that.http.open("PUT", url, true);
      that.http.setRequestHeader('Accept', 'application/json');
      that.http.setRequestHeader('Content-Type', 'application/json');
      that.http.send(userBody);
      that.http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //Invoke operation for generate_student_report.
          //Create body of operation.
          let operationBody = JSON.stringify({
            "operationId": {
              "space": that.$store.state.sessionSpace,
              "id": ""
            },
            "type": "generate_report",
            "item": {
              "itemId": {
                "space": that.$store.state.sessionSpace,
                "id": "ae1260fa-244a-4108-8660-e6e15b281f81" //Default player fix.
              }
            },
            "createdTimestamp": "",
            "invokedBy": {
              "userId": {
                "space": that.$store.state.sessionSpace,
                "email": that.$store.state.sessionEmail
              }
            },
            "operationAttributes": {
              "key1": ""
            }
          });
          //second http request -> get students report.
          url = `${that.$store.state.sessionServerURLPrefix}/twins/operations`;
          that.http.open("POST", url, true);
          that.http.setRequestHeader('Accept', 'application/json');
          that.http.setRequestHeader('Content-Type', 'application/json');
          that.http.send(operationBody);
          that.http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              let resp = this.response;
              let data = JSON.parse(resp);
              //Turn back to manager.
              userBody = JSON.stringify({
                "userId": {
                  "space": that.$store.state.sessionSpace,
                  "email": that.$store.state.sessionEmail
                },
                "role": "MANAGER", //turn back into manager.
                "username": that.$store.state.sessionUsername,
                "avatar": that.$store.state.sessionAvatar
              });
              //Third http request -> turn player to manager.
              url = `${that.$store.state.sessionServerURLPrefix}/twins/users/` +
                  `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`;
              that.http.open("PUT", url, true);
              that.http.setRequestHeader('Accept', 'application/json');
              that.http.setRequestHeader('Content-Type', 'application/json');
              that.http.send(userBody);
              that.http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                  for (const datum of data) {
                    if (datum.type == "student") {
                      that.totalPeople++;
                      that.studentAmount++;
                      that.studentTotalBalance += parseInt(datum.itemAttributes.balance);
                      that.income += parseInt(datum.itemAttributes.balance);
                    } else {
                      that.workerAmount++;
                      that.totalPeople++;
                      that.workerTotalPayment += parseInt(datum.itemAttributes.payment);
                      that.liabilities += parseInt(datum.itemAttributes.payment);
                    }
                    that.revenue = that.income - that.liabilities;
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  mounted() {
    this.loadReport();
  }
}
</script>

<style scoped>

</style>