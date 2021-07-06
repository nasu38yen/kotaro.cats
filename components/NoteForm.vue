<template>
    <v-form ref="form1" @submit.prevent="submit">
        <v-text-field v-model="note.id" label="slug"
                    required></v-text-field>
        <v-text-field v-model="note.title" label="タイトル"
                    required></v-text-field>
        <v-textarea v-model="note.text" label="内容"
                    required rows="20"></v-textarea>
        <div>
            <v-btn type="submit">登録</v-btn>
            <!-- <v-btn v-if="note.createdAt" nuxt :to="{name:'note-id', params:{id:note.id}}">戻る</v-btn>
            <v-btn v-else nuxt to="/note/last">戻る</v-btn> -->
        </div>
    </v-form>
</template>

<script>
import moment from 'moment';
import { mapState } from "vuex";

export default ({
    name: 'NoteForm',
    props: {
        note: {
            type: Object,
        } 
    },

    computed: {
        ...mapState({userInfo: 'userInfo'}),
    },

    methods: {
      async submit () {
        this.$refs.form1.validate()
        this.note.updatedAt = moment().format("YYYY/MM/DD HH:mm:ss");
        if (!this.note.createdAt) {
            this.note.createdAt = this.note.updatedAt;
        }
        //this.note.author = this.userInfo.userDetails;
        this.note.author = 'kotaro';

        const url = '/note'
        await this.$axios.post(url, this.note)
        if (this.note.id) {
            this.$router.push('/note/' + this.note.id)
        } else {
            this.$router.push('/')
        }
      },
    },  
})
</script>