<template>
  <div id="app">
    <article class="card">
      <header>
        <h1>WANG XI</h1>
        <p>—— ❖ ——</p>
        <span>Front-End Developer</span>
      </header>
      <section class="info">
        <span></span>
        <p>🙊 {{ user.gender }} | {{ user.age }}</p>
        <p>🏠 {{ user.location }}</p>
      </section>
      <section class="contact" v-show="contact.phone || contact.email">
        <span></span>
        <p v-show="contact.phone">☏ {{ contact.phone }}</p>
        <p v-show="contact.email">✉ {{ contact.email }}</p>
      </section>
      <section class="footer" v-show="blog.url">
        <span></span>
        <a :href="blog.url">{{ blog.url }}</a>
      </section>
    </article>
    <section class="action">
      <div>
        <input type="text" v-model="inputPhone">
        <button @click="addPhone(inputPhone), clearPhone">Add Phone</button>
      </div>
      <div>
        <input type="text" v-model="inputEmail">
        <button @click="addEmail(inputEmail), clearEmail">Add Email&nbsp;</button>
      </div>
      <div>
        <input type="text" v-model="inputUrl">
        <button @click="addBlog(inputUrl), clearUrl">Add &nbsp;Blog&nbsp;</button>
      </div>
      <div class="btn-group">
        <button @click="removePhone">Remove Phone</button>
        <button @click="removeEmail">Remove Email</button>
        <button @click="removeBlog">Remove Blog</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      inputPhone: '',
      inputEmail: '',
      inputUrl: ''
    }
  },
  computed: {
    /*name () {
      return this.$store.state.name
    }*/
    ...mapState ({
      user: state => state.user.baseInfo,
      contact: state => state.user.contact,
      blog: state => state.user.blog
    }),
    /*getName () {
      return this.$store.getters.getName
    },
    getAfe () {
      return this.$store.getters.getAge
    }*/
    ...mapGetters ([
      'getUser',
    ])
  },
  methods: {
    /*changeName () {
      this.$store.commit('CHANGE_NAME', this.inputName)
    },
    changeAge () {
      this.$store.commit('CHANGE_AGE', this.inputAge)
    }*/
    ...mapActions ([
      'addPhone',
      'addEmail',
      'addBlog',
      'removePhone',
      'removeEmail',
      'removeBlog'
    ]),
    clearPhone () {
      console.log('11111');
      this.inputPhone = ''
    },
    clearEmail () {
      this.inputEmail = ''
    },
    clearUrl () {
      this.inputUrl = ''
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
.card, .action {
  display: inline-block;
}
article {
  font-weight: bold;
  position: relative;
  width: 260px;
  height: auto;
  padding: 40px 0;
  margin: 0 auto;
  font-family: 'FZShuTi';
  text-align: center;
  color: #555;
  background: #EEF0F7;
  box-shadow: 0 0 10px #ddd;
}
h1 {
  letter-spacing: 2px;
}
.action {
  width: 260px;
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
  background: #EEF0F7;
  box-shadow: 0 0 10px #ddd;
}
.action div {
  margin: 10px 0;
}
.action input {
  box-sizing: border-box;
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  outline: none;
  color: #666;
}
.action button {
  height: 30px;
  line-height: 30px;
  border: none;
  border-radius: 5px;  
  color: #fff;
  background: #6BAD8E;
  cursor: pointer;
  outline: none;
}
.info {
  margin-top: 100px;
  font-size: 14px;
}
.contact {
  margin-top: 10px;
  font-size: 14px;
}
.info span, .contact span, .footer span {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 70px;
  border-top: 1px solid #ddd;
}
.footer span {
  margin-bottom: 0;
}
.footer a {
  color: #666;
  text-decoration: none;
  font-size: 12px;
}
.action .btn-group {
  margin-top: 30px;
}
.btn-group button {
  display: block;
  width: 240px;
  margin: 10px;
  background: #BF6B6B;
}
</style>
