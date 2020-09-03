<template>
  <div>
    <table class="table" style="margin: 30px auto; width:70%">
      <thead>
        <th></th>
        <th>使用者名稱</th>
        <th>Email</th>
        <th>評價</th>
        <th>留言</th>
      </thead>
      <tbody>
        <tr v-for="item in UserComments" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="commentDelete(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.data.name }}
          </td>
          <td class="align-middle">{{ item.data.email }}</td>

          <td class="align-middle">{{ item.data.grading }}</td>
          <td class="align-middle">{{ item.data.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      UserComments: []
    }
  },
  methods: {
    commentGet () {
      const vm = this
      const api = 'https://json-server-test999.herokuapp.com/posts'
      vm.$http.get(api).then(response => {
        vm.UserComments = response.data
      })
    },
    commentDelete (id) {
      const vm = this
      const api = `https://json-server-test999.herokuapp.com/posts/${id}`
      vm.$http.delete(api).then(response => {
        vm.commentGet()
      })
    }
  },
  created () {
    this.commentGet()
  }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
