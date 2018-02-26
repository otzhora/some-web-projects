<template>
    <div class='root'>
        <div class='input_container'>
            <input @keyup.enter="addNewTodo" v-model="newTodosText">
            <button @click="addNewTodo"> Добавить </button>
        </div>

        <div class='todo_container' 
        v-for="(todo, i) in todos" :key="i"  
        v-if="shown_all ? true : todo.isCompleted === shown_com">
            <div :class="{ completed: todo.isCompleted, changeble: mod === i }" 
            @click="todo.isCompleted=!todo.isCompleted"
            @dblclick="modify(i)"
            @keyup.enter="mod = -1">  
            {{ i + 1}}. {{ todo.text }} </div>
            <button @click='remove(i)'> Удалить </button>
        </div>

        <div class="bottom_menu">
            <button @click="changeStat(1)"
            :class="{active_button : shown_all}"> Все </button>
            <button @click="changeStat(2)"
            :class="{active_button: !shown_all && !shown_com}"> Активные </button>
            <button @click="changeStat(3)"
            :class="{active_button: shown_com}"> Выполенные </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodosText : '',
            todos : [],
            shown_all: true,
            shown_com: false,
            mod: -1
        }
    },
    methods:{
        addNewTodo: function () {
            if(this.mod === -1){
                this.todos.push({ text: this.newTodosText, isCompleted: false })
            } else {
                this.todos[this.mod].text = this.newTodosText
                this.mod = -1
            }
            this.newTodosText = ''
        },
        remove: function (i) {
            this.todos.splice(i, 1)
        }, 
        changeStat: function (i) {
            if(i === 1) {
                this.shown_all = true
                this.shown_com = false
            }
            if(i === 2) {
                this.shown_all = false
                this.shown_com = false;
            }
            if(i === 3) {
                this.shown_all = false;
                this.shown_com = true;
            }
        }, 
        modify: function(i) {
            this.mod = i
            this.newTodosText = this.todos[i].text
        }
    }
}
</script>


<style>
.root {
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input_container {
    flex-direction: column;
}

.todo_container {
    display: flex;
    flex-direction:  row;
}

.completed {
    text-decoration:line-through
}

.bottom_menu {
    display: flex;

    flex-direction: row;
    padding: 10px;
}

.active_button {
    background-color: rgb(6, 52, 255);
    color: #ffffff;
}

</style>
