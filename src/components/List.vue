<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <div class="form-control">
        <input class="mr-4"
        type="text" 
        :placeholder="placeholderString" 
        v-model="inputValue"
        @keypress.enter="addNewContact"
        ><button class="btn" @click="addNewContact">Добавить</button>
    </div>
    <hr/>
    <div class="form-control">
        <input type="text" v-model="search" :placeholder="placeholderSearch" >
    </div>
    <ul class="list" v-if="contacts.length !== 0">
        <li class="list-item" v-for="contact in contactsByTitle" v-bind:key="contact.id">
        <router-link :to="'/contacts/' + contact.id"> {{ contact.id }} {{ contact.name }} </router-link>
        <button class="btn danger" @click="removeContact(idx)">Удалить</button>
        </li>
        <hr/>
        <li>
        <strong>Общее количество: {{ contacts.length }}</strong>
        </li>
    </ul>
    <div v-else>Заметок нет. Добавьте новую.</div> 
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Список пользователей',
            placeholderString: 'Введите имя нового пользователя',
            placeholderSearch: 'Поиск по имени',
            inputValue: '',
            search: '',
            contacts: [
            {id: 1, name: 'Даниил Романович'},
            {id: 2, name: 'София Саввична'},
            {id: 3, name: 'Алексей Эмильевич'},
            {id: 4, name: 'Руслан Михайлович'},
        ],
        nextTodoId: 5
        }
    },
    
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        
        addNewContact() {
            if(this.inputValue !== '')
            {
              this.contacts.push({
                id: this.nextTodoId++,
                name: this.inputValue
              })
              this.inputValue = ''  
            }
            
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeContact(idx) {
            this.contacts.splice(idx, 1)
        }
    },
    computed: {
    contactsByTitle() {
      return this.contacts.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }

 
      
 

}
</script>