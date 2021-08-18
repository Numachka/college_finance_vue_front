<template>
<div>
  <base-header>
    College Finance <br>
    Digital Twin <br>
    (Demo)
  </base-header>
  <router-link to="/student/1"><BaseButton>Login as student 1</BaseButton></router-link>
  <router-link to="/worker/1"><BaseButton>Login as worker 1</BaseButton></router-link>
  <router-link to="/manager"><BaseButton>Login as manager</BaseButton></router-link>
  <p id="tutorial"></p>
  <a href="https://github.com/Numachka/college_finance_digital_twin" id="source"></a>
</div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import BaseButton from "@/components/base/BaseButton";
export default {
  name: "LoginPage",
  components: { BaseButton, BaseHeader},
  data: function() {
    return {
      showOverlay: false,
    }
  },
  mounted() {
    typeWriter();
  }
}
let i = 0;
let j = 0;
let speed = 35;
let tutorialMessage =  `Hello! Welcome to our college finance digital twin demo project.\n` +
    `In this small CRUD full stack application we have built a demo for managing students and workers in a college.\n` +
    `Choose one of the login buttons to login as that person in the system to view his use cases.\n` +
    `The most interesting one is the manager page. From it you can view all the users in the system and generate a report.\n`+
    `Front end is built using Vue.js.\n` +
    `Back end is built with Java and Spring Boot.\n` +
    `Database is MySQL hosted on \n` +
    `The application was deployed using Heroku CLI.\n\n` +
    `Shahar Michalei, Nahum Kletkin, Ram Friedman, Naor Pahima, Nir Shervi and Gal Birka. `;
let sourceCode = `Click here to view the source code on GithHub.`;

function typeWriter() {
  if (i < tutorialMessage.length) {
    document.getElementById("tutorial").innerHTML += tutorialMessage.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("source").innerHTML += sourceCode.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}
</script>

<style scoped>
div {
  display: grid;
  justify-items: center;
}

#tutorial, #source {
  color: #ffffff;
  justify-self: start;
  max-width: 100%;
  line-height: 1.2em;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

#source {
  text-align: center;
}
</style>