<template>
  <div>
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
          input-id="inputTotal"
          input-type="text"
          input-name="total"
          label-for="total"
          label="Balance"
      ></base-input>
    </div>
    <base-button v-on:click.native="addPerson()">Create</base-button>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";

export default {
  name: "BaseForm",
  components: {
    BaseInput, BaseButton
  },
  props: ["type"],
  data: function() {
    return {
      //TODO stopped here... working on adding new people to the system.
      // gotta think of a way to remove them too..
      // Maybe change their status to active: false.
      typeOfUser: "",
      typeOfCurrency: "",
      http: new XMLHttpRequest()
    }
  },
  copmuted: {
    typeOfUser() {
      if (this.type.localeCompare("student")) {
          this.typeOfUser = "student";
          this.typeOfCurrency = "Balance";
      } else {
        this.typeOfUser = "worker";
        this.typeOfCurrency = "Payment";
      }
    }
  },
  methods: {
    addPerson() {
      //Helpers
      // let that = this;
      //Get values form input fields.
      let type = document.getElementById("inputType").value;
      let email = document.getElementById("inputEmail").value;
      let role = "PLAYER" //It's always a player.
      let username = document.getElementById("inputUsername").value;
      let avatar = document.getElementById("inputAvatar").value;
      let name = document.getElementById("inputName").value;
      let balance = document.getElementById("inputTotal").value;

      console.log("" + type + email + role + username + avatar +  name + balance);

      // //Create body of create user request.
      // let userBody = JSON.stringify({
      //   "email": email,
      //   "role": role,
      //   "username": username,
      //   "avatar": avatar
      // });
      //
      // //create new user in server.
      // let url = `${that.$store.state.sessionServerURLPrefix}/twins/users`;
      // that.http.open("POST", url, true);
      // that.http.setRequestHeader('Accept', 'application/json');
      // that.http.setRequestHeader('Content-Type', 'application/json');
      // that.http.send(userBody);
      // that.http.onreadystatechange = function () {
      //   if (this.readyState == 4 && this.status == 200) {
      //     //create body of create item request.
      //     let itemBody = JSON.stringify({
      //       "itemId": {
      //         "space": that.$store.state.sessionSpace,
      //         "id": ""
      //       },
      //       "type": "",
      //       "name": Name,
      //       "active": true,
      //       "createdTimestamp": "",
      //       "createdBy": {
      //         "userId": {
      //           "space": that.$store.state.sessionSpace,
      //           "email": that.$store.state.sessionEmail
      //         }
      //       },
      //       "location": {
      //         "lat": 0,
      //         "lng": 0
      //       },
      //       "itemAttributes": {
      //         "userId": {
      //           "space": that.$store.state.sessionSpace,
      //           "email": email
      //         },
      //         "role": role,
      //         "username": username,
      //         "avatar": avatar,
      //         "balance": balance
      //       }
      //     });
      //
      //     //create new user in database.
      //     url = `${that.$store.state.sessionServerURLPrefix}/twins/items/` +
      //     `${that.$store.state.sessionSpace}/${that.$store.state.sessionEmail}`;
      //     that.http.open("POST", url, true);
      //     that.http.setRequestHeader('Accept', 'application/json');
      //     that.http.setRequestHeader('Content-Type', 'application/json');
      //     that.http.send(itemBody);
      //     that.http.onreadystatechange = function () {
      //       if (this.readyState == 4 && this.status == 200) {;
      //         that.$router.push("manager");
      //       }
      //     }
      //   }
      // }
    }
  }
}
</script>

<style scoped>

</style>