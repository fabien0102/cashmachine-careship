<template>
  <div>
    <!-- Input -->
    <input v-model="amount" type="number" @keyup="refresh"/>

    <!-- Result -->
    <div v-if="$apollo.queries.notes.loading">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      {{ notes }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { amount: 0, notes: [], error: null }
  },

  apollo: {
    notes: {
      query: require('../graphql/Notes.gql'),
      variables () {
        return { amount: this.amount }
      },
      error (err) {
        this.error = err.message
      },
      update (data) {
        this.error = null
        return data
      }
    }
  },

  methods: {
    refresh () {
      this.$apollo.queries.notes.refresh()
    }
  }
}
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

.input {
  font-family: inherit;
  font-size: inherit;
  border: solid 2px #ccc;
  border-radius: 3px;
}

.error {
  color: red;
}
</style>
