<template>
  <div>
    <base-header>
      College Finance <br>
      Digital Twin <br>
      (Demo)
    </base-header>
    <base-input input-id="email"
                input-type="email"
                input-name="email"
                label-for="email"
                label=""></base-input>
    <BaseButton @click.native="login()">Login</BaseButton>
    <base-text>
      Hello! Welcome to our college finance digital twin demo project. <br><br>
      In this small CRUD full stack web application we have built a demo for managing students and workers in a college. <br><br>
      Enter one of the demo email login addresses to login as that person in the system to view his use cases. <br>
      manager@example.com, student1@example.com or worker1@example.com. <br>
      The most interesting one is the manager page. From it you can view all the users in the system and generate a report. <br><br>
      Front end is built using Vue.js and its family. <br>
      Back end is built with Java and Spring Boot. <br>
      Database is MySQL hosted on Firebase. <br>
      The application was deployed using Heroku. <br> <br>
      Shahar Michalei, Nahum Kletkin, Ram Friedman, Naor Pahima, Nir Shervi and Gal Birka @ Afeka College of Engineering
    </base-text>
    <br>

      <base-text>
        <a href="https://github.com/Numachka/college_finance_digital_twin">Click here to view the source code on GithHub</a>
      </base-text>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseButton from "@/components/base/BaseButton";
import BaseInput from "@/components/base/BaseInput";
import BaseText from "@/components/base/BaseText";

export default {
  name: "LoginPage",
  components: {BaseText, BaseInput, BaseButton, BaseHeader},
  data: function() {
    return {
      showOverlay: false,
      http: new XMLHttpRequest()
    }
  },
  methods: {
    login() {
      let that = this; //This/That helper for callback functions.
      let tempEmail = document.getElementById("email").value;
      const url = `${that.$store.state.sessionServerURLPrefix}/twins/users/login/${that.$store.state.sessionSpace}/${tempEmail}`;
      that.http.open("GET", url, true);
      that.http.setRequestHeader('Accept', 'application/json');
      that.http.send();
      that.http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let resp = this.response;
          let userData = JSON.parse(resp);
          switch (userData.role) {
            case "PLAYER":
              // eslint-disable-next-line no-case-declarations
              const userEmail = userData.userId.email;
              that.userSetUp(tempEmail, userEmail);
              break;
            case "MANAGER":
              that.$store.commit('setSessionEmail', tempEmail);
              that.$store.commit('setSessionRole', userData.role);
              that.$store.commit('setSessionUsername', userData.username);
              that.$store.commit('setSessionAvatar', userData.avatar);
              that.$router.push("manager");
              break;
            default:
              break;
          }
        }
      }
    },
    userSetUp(tempEmail, userEmail) {
      let that = this; //This/That helper for callback functions.
      const url = `${that.$store.state.sessionServerURLPrefix}/twins/items/${that.$store.state.sessionSpace}/${tempEmail}`;
      that.http.open("GET", url, true);
      that.http.setRequestHeader('Accept', 'application/json');
      that.http.send();
      that.http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let resp = this.response;
          let itemData = JSON.parse(resp);
          for (const datum of itemData) {
            let checkedEmail = datum.itemAttributes.userId.email;
            if (userEmail.localeCompare(checkedEmail) == 0) {
              console.log(that.$store.state.sessionEmail);
              that.$store.commit('setSessionId', datum.itemId.id);
              that.$store.commit('setSessionEmail', tempEmail);
              const userType = datum.type;
              that.userRedirection(userType);
            }
          }
        }
      }
    },
    userRedirection(userType) {
      switch (userType) {
        case "student":
          this.$router.push("student/1");
          break;
        case "worker":
          this.$router.push("worker/1");
          break;
        default:
          break;
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