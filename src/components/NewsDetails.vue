<template>
    <v-container grid-list-md v-if="news" fluid>
        <v-layout wrap>
            <v-flex xs12 sm10 md10 offset-sm1>
                <v-card>
                    <v-img :src="news.imageId"  aspect-ratio="2.8"></v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{news.title}}</h3>

                            <div class="grey--text">Категория: {{news.category}}</div>

                            <div>{{news.description}}</div>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <div>
                            {{news.text}}
                        </div>
                    </v-card-text>
                    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="primary" dark>
                        <v-btn color="white" flat value="recent" to='/news' >
                            <span>Назад</span>
                            <v-icon>arrow_back</v-icon>
                        </v-btn>
                        <v-btn color="white" flat value="favorites">
                            <span>Нравится</span>
                            <v-icon>favorite</v-icon>
                        </v-btn>
                        <v-btn color="white" flat value="nearby">
                            <span>Hyinya</span>
                            <v-icon>place</v-icon>
                        </v-btn>
                    </v-bottom-nav>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NewsDetails",
        data(){
            return{
                bottomNav:'recent'
            }
        },
        props:{
            'id':{
                type:String,
                required: true
            }
        },
        computed:{
          news(){
              return this.$store.getters.getNews.find(n => n.id == this.id);
          }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>