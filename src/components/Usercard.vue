<template>
  <div class="user-card">
    <h1>How to earn money</h1>
      <div class="main-information">
        <img src="../assets/homepage_banner_m.jpg" alt="pic" width="500px">

        <div class="info">
          <h2>
<!--              {{ getAuthorFullName ('type') }}-->
              {{ getAuthorFullName }}
          </h2>
            <strong>Business coach</strong>
              <ul>
                <li>I train people</li>
                <li>I know what you need</li>
                <li>Get rich with me</li>
              </ul>
        </div>
      </div>
    <p>Participants: {{users.length}}</p>
    <ul>
      <li
          v-for="(user, index) in users"
          :key="index"

      >{{`${index +1} ${getFullName(user)}`}}
      </li>
    </ul>
    <button
        type="button"
        @click="currentPage--"
    >
      Пред.
    </button>
    <button
        type="button"
        v-for="page in pages"
        :key="page"
        @click="currentPage = page"
    >
      {{ page }}
    </button>

    <button
        type="button"
        @click="currentPage++"
    >
      След.
    </button>
    <p>Page: {{ currentPage }} of {{ pages }}</p>
  </div>
</template>

<script>
export default {
  name: "Usercard",
  data(){
    return{
      firstName: 'John',
      secondName: 'Abraham',
      lastName: 'Smith',
      users: [
        {
          firstName: 'Sam',
          secondName: 'Robert',
          lastName: 'Brown'
        },
        {
          firstName: 'Ben',
          secondName: 'Andrew',
          lastName: 'White'
        },
        {
          firstName: 'Garry',
          secondName: 'Phil',
          lastName: 'Anderson'
        }
      ],
      pages: 3,
      currentPage: 1

    }
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },
  // methods: {
  //   getAuthorFullName(type) {
  //     return `${this.firstName} ${this.secondName} ${this.lastName} ${type}`.toUpperCase()
  //   }
  // }
  methods:{
    getFullName(user){
      return `${user.firstName} ${user.secondName} ${user.lastName}`
    },
    loadUsers(page) {
      console.log(`Загрузка пользователей, страница - ${page}`)
    }
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }
}
</script>

<style scoped>
.user-card {
  margin-top: 40px;
}
.info {
  margin-left: 50px;
}
.main-information{
  display:flex;
}
ul{
  list-style-type: none;
}
li{
  color: #42b983;
}
h2 {
  margin-bottom: 14px;
}
</style>
