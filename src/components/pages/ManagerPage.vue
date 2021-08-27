<template>
  <div>
    <base-header>Personnel and Payment Management</base-header>
    <div class="innerDiv firstDiv">
      <base-subheader>Students</base-subheader>
      <base-table :columns="studentColumn" :data="studentList"></base-table>
      <router-link to="/create-page/student">
        <base-button :type="'student'">Add Student</base-button>
      </router-link>
    </div>
    <div class="innerDiv">
      <base-subheader>Workers</base-subheader>
      <base-table :columns="workerColumn" :data="workerList"></base-table>
      <router-link to="/create-page/worker">
        <base-button :type="'worker'">Add Worker</base-button>
      </router-link>
    </div>
    <div>
      <base-subheader>Finances</base-subheader>
      <router-link to="/report">
        <base-button>Generate Report</base-button>
      </router-link>
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
      studentColumn: {
        colA: "Avatar",
        colB: "Full Name",
        colC: "Email",
        colD: "Balance"
      },
      studentList: [],
      workerColumn: {
        colA: "Avatar",
        colB: "Full Name",
        colC: "Email",
        colD: "Payment"
      },
      workerList: [],
      http: new XMLHttpRequest()
    }
  },
  methods: {
    generateStudentList() {
      let that = this;
      //Turn into player first.
      //Create body of create user request.
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
          //Create body of operation.
          let operationBody = JSON.stringify({
            "operationId": {
              "space": that.$store.state.sessionSpace,
              "id": ""
            },
            "type": "get_student_information", //Invoke operation for get_student_information
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
                  `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`
              that.http.open("PUT", url, true);
              that.http.setRequestHeader('Accept', 'application/json');
              that.http.setRequestHeader('Content-Type', 'application/json');
              that.http.send(userBody);
              that.http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                  for (const datum of data) {
                    that.createStudentListItem(datum);
                  }
                }
              }
            }
          }
        }
      }
    },
    createStudentListItem(data) {
      let tempStudent = {
        colA: data.itemAttributes.avatar,
        colB: data.name,
        colC: data.itemAttributes.userId.email,
        colD: data.itemAttributes.balance
      }
      this.studentList.push(tempStudent);
      this.generateWorkerList();
    },
    generateWorkerList() {
      let that = this;
      //Turn into player first.
      //Create body of create user request.
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
          //Create body of operation.
          let operationBody = JSON.stringify({
            "operationId": {
              "space": that.$store.state.sessionSpace,
              "id": ""
            },
            "type": "get_worker_information", //Invoke operation for get_worker_information
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
          //second http request -> get workers report.
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
                  `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`
              that.http.open("PUT", url, true);
              that.http.setRequestHeader('Accept', 'application/json');
              that.http.setRequestHeader('Content-Type', 'application/json');
              that.http.send(userBody);
              that.http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                  for (const datum of data) {
                    that.createWorkerListItem(datum);
                  }
                }
              }
            }
          }
        }
      }
    },
    createWorkerListItem(data) {
      let tempWorker = {
        colA: data.itemAttributes.avatar,
        colB: data.name,
        colC: data.itemAttributes.userId.email,
        colD: data.itemAttributes.payment
      }
      this.workerList.push(tempWorker);
    },
  },
  mounted() {
    this.generateStudentList();
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