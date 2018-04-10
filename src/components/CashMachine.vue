<template>
  <div class="cash-machine">
    <!-- Input -->
    <form>
      <label for="amount">Your amount:</label>
      <input id="amount" v-model="amount" type="number" @keyup="refresh"/>
    </form>

    <!-- Result -->
    <Spinner v-if="$apollo.queries.notes.loading" />
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else>
      <div class="notes-container">
        <Note v-for="(note, i) in notes" :key="i" :value="note"/>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue'
import Note from './Note.vue'

export default {
  data () {
    return { amount: 0, notes: [], error: null }
  },

  components: {
    Note,
    Spinner
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
        return data.notes
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
.cash-machine {
  text-align: center;
}
form {
  position: relative;
}
label {
  position: absolute;
  font-family: 'Bangers', cursive;
  color: white;
  top: -20px;
}
input {
  padding: 10px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3)
}
.notes-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
}
.error {
  margin-top: 2em;
}
</style>
