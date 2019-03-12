<template>
    <v-container grid-list-lg>
        <v-layout wrap row>
            <v-flex xs12 sm12 md8 offset-md2>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs5 md7>
                            <v-text-field label="Поиск по заголовку" v-model="search"></v-text-field>
                        </v-flex>
                        <v-flex xs7 md5>
                            <v-select label="Категории"  v-model="value" :items="categories" attach chips multiple></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>

            <v-flex xs12 sm12 md8 offset-md2>
                <v-card v-for="news in filteredNews" :key="news.id" class="mb-4">
                    <v-img
                            class="white--text"
                            height="210px"
                            :src="news.imageId"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{news.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title>
                        <div>
                            <span class="grey--text">Категория: {{news.category}}</span><br>
                            <span>{{news.title}}</span><br>
                        </div>
                        <v-card-text>
                            {{news.description}}
                        </v-card-text>
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-card-actions>
                        <v-btn flat color="orange" :to="'/news/'+news.id">Открыть</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        name: "NewsList",
        data(){
            return{
                search:null,
                value:[],
                categories:['мероприятия','изменения']
            }
        },
        computed:{
            newslist(){
                return this.$store.getters.getNews;
            },
            filteredNews(){
                var newslist = this.newslist;

                if (this.search){
                    newslist = newslist.filter(n => n.title.toLowerCase().indexOf(this.search.toLowerCase()) >=0);
                }

                if (this.value.length){
                    newslist = newslist.filter(n => this.value.filter(v => n.category.indexOf(v)!== -1).length > 0);
                }
                return newslist;
            }
        }
    }
</script>

<style scoped>

</style>