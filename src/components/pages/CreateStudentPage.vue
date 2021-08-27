<template>
<div>
  <base-header>New Student Information</base-header>
  <div class="modalInputDiv">
    <base-input
        input-id="inputEmail"
        input-type="email"
        input-name="email"
        label-for="email"
        label="Email"
    ></base-input>
    <base-input
        input-id="inputUsername"
        input-type="text"
        input-name="username"
        label-for="username"
        label="Username"
    ></base-input>
    <base-input
        input-id="inputAvatar"
        input-type="text"
        input-name="avatar"
        label-for="avatar"
        label="Avatar"
    ></base-input>
    <base-input
        input-id="inputName"
        input-type="text"
        input-name="name"
        label-for="name"
        label="Name"
    ></base-input>
    <base-input
        input-id="inputBalance"
        input-type="text"
        input-name="total"
        label-for="total"
        label="Balance"
    ></base-input>
  </div>
  <base-button v-on:click.native="addStudent()">Create</base-button>
</div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";

export default {
  name: "CreateStudentPage",
  props: ["type"],
  components: { BaseHeader, BaseInput, BaseButton},
  data: function() {
    return {
      http: new XMLHttpRequest()
    }
  },
  methods: {
    addStudent() {
      //Helpers
      let that = this;
      //Get values form input fields.
      let email = document.getElementById("inputEmail").value;
      let role = "PLAYER" //It's always a player.
      let username = document.getElementById("inputUsername").value;
      let avatar = document.getElementById("inputAvatar").value;
      let name = document.getElementById("inputName").value;
      let balance = document.getElementById("inputBalance").value;

      //Create body of create user request.
      let userBody = JSON.stringify({
        "email": email,
        "role": role,
        "username": username,
        "avatar": avatar
      });

      //create new user in server.
      let url = `${that.$store.state.sessionServerURLPrefix}/twins/users`;
      that.http.open("POST", url, true);
      that.http.setRequestHeader('Accept', 'application/json');
      that.http.setRequestHeader('Content-Type', 'application/json');
      that.http.send(userBody);
      that.http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //create body of create item request.
          let itemBody = JSON.stringify({
            "itemId": {
              "space": that.$store.state.sessionSpace,
              "id": ""
            },
            "type": "student",
            "name": name,
            "active": true,
            "createdTimestamp": "",
            "createdBy": {
              "userId": {
                "space": that.$store.state.sessionSpace,
                "email": that.$store.state.sessionEmail
              }
            },
            "location": {
              "lat": 0,
              "lng": 0
            },
            "itemAttributes": {
              "userId": {
                "space": that.$store.state.sessionSpace,
                "email": email
              },
              "role": role,
              "username": username,
              "avatar": avatar,
              "balance": balance
            }
          });

          //create new user in database.
          url = `${that.$store.state.sessionServerURLPrefix}/twins/items/` +
          `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`;
          that.http.open("POST", url, true);
          that.http.setRequestHeader('Accept', 'application/json');
          that.http.setRequestHeader('Content-Type', 'application/json');
          that.http.send(itemBody);
          that.http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              that.$router.go(-1);
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  div {
    display: grid;
    justify-items: center;
  }
</style>