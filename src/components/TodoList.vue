<template>
  <div>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">message</i>
            <textarea
              id="icon_prefix2"
              class="materialize-textarea"
              v-model="newTodo"
              @keyup.enter="addTodo"
            ></textarea>
            <label for="icon_prefix2">New Todo</label>
          </div>
          <div class="col s1 left">
            <a class="waves-effect waves-dark btn btn-2" @click="addTodo">Send</a>
          </div>
        </div>
      </form>
    </div>

    <!-- tarea -->

    <div class="extra-container">
      <div>
        <label class="input">
          <input type="checkbox" :checked="anyRemaining" @change="checkAllTodos">
          <a class="waves-effect waves-light btn-small btn-2">Check All</a>
        </label>
      </div>
      <p>{{ remaining }} items Left</p>
    </div>
    <div v-for="(todo, index) in Todolist" :key="todo.id" class="row" id="todos">
      <div class="col s12 m8 offset-m2 todo">
        <div class="card-panel">
          <div
            v-if="!todo.editing"
            @dblclick="editTodo(todo)"
            class="row todo-item-label"
            :class="{completed: todo.completed}"
          >
            <div class="col m4 left-align">
              <label>
                <input type="checkbox" v-model="todo.completed">
                <span>{{ todo.date }}</span>
              </label>
            </div>
            <div class="col m4 center-align">{{todo.title}}</div>
            <div class="col m4 right-align">
              <a class="waves-effect waves-dark btn mi-btn" @click="editTodo(todo)">
                <i class="material-icons right">mode_edit</i>
              </a>
              <a class="waves-effect waves-dark btn mi-btn" @click="removeTodo(index)">
                <i class="material-icons right">delete</i>
              </a>
            </div>
          </div>
          <div v-else class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea
                    v-model="todo.title"
                    id="icon_prefix2"
                    class="materialize-textarea"
                    @keyup.enter="doneEdit(todo)"
                    @blur="doneEdit(todo)"
                    v-focus
                  ></textarea>
                  <label for="icon_prefix2">Edit</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- tarea -->
  </div>
</template>

<script>
export default {
  name: "Todo-list",
  data() {
    return {
      newTodo: "",
      idTodo: 3,
      hour:
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds() +
        " hrs",
      Todolist: [
        {
          id: 1,
          title: "Tarea ejemplo uno",
          completed: false,
          editing: false,
          date:
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds() +
            " hrs"
        },
        {
          id: 2,
          title: "Tarea ejemplo dos",
          completed: false,
          editing: false,
          date:
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds() +
            " hrs"
        }
      ]
    };
  },
  computed: {
    remaining() {
      return this.Todolist.filter(todo => todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.Todolist.push({
        id: this.idTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
        date: this.hour
      });
      this.newTodo = "";
      this.idTodo++;
      M.toast({ html: "Tarea guardada con éxito!" });
    },
    editTodo(todo) {
      todo.editing = true;
    },
    doneEdit(todo) {
      todo.editing = false;
      M.toast({ html: "Tarea editada exitosamente!"});
    },
    removeTodo(index) {
      M.toast({ html: `Se ha eliminado la tarea ${index} con éxtito` });
      this.Todolist.splice(index, 1);
    },
    checkAllTodos() {
      this.Todolist.forEach(todo => (todo.completed = event.target.checked));
    }
  }
};
</script>


<style>
.mi-btn {
  background-color: #35495e;
}

.mi-btn:hover {
  background-color: #41b883;
}
.completed {
  text-decoration: line-line;
  color: #41b883;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c2c50;
  margin-left: 12px;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
}

.todo-item-edit:focus {
  overflow-inline: none;
}

.input:hover {
  cursor: pointer;
}

.btn-2 {
  background-color: #41b883;
}

.btn-2:hover {
  background-color: #35495e;
}
</style>
