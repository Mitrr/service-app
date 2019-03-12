<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Регистрация аккаунта</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-alert :value="error" type="warning">
                            {{error}}
                        </v-alert>
                        <v-form v-model="valid">
                            <v-text-field prepend-icon="person" name="login" label="e-mail" type="email" required v-model="email" :rules="emailRules"></v-text-field>
                            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" required v-model="password"
                            :rules="passwordRules"></v-text-field>
                            <v-text-field id="status" prepend-icon="lock" name="status-code" label="Status-code" type="text"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click.prevent="signup" :disabled="processing || !valid">Регистрировать</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return{
                errFlag:false,
                email:null,
                password:null,
                valid:false,

                passwordRules: [
                    v => !!v || 'Введите пароль',
                    v => (v && v.length>=6) || 'Слишком короткий пароль'
                ],
                emailRules: [
                    v => !!v || 'Введите email',
                    v => /.+@.+/.test(v) || 'Неверный email'
                ]
            }
        },
        computed:{
            error(){
                return this.$store.getters.getError;
            },
            processing(){

                return this.$store.getters.getProcessing;
            },
            isUserAuthed(){
                return this.$store.getters.getIsAuthed;
            }
        },
        watch:{
            isUserAuthed(val){
                if (val===true){
                   /* var userID = this.$store.getters.getUserID;*/
                    this.$router.push('/account');
                    /*this.$router.push({name:'account',params:{userID}});*/
                }
            }
        },
        methods:{
            signup(){
                this.$store.dispatch('SIGNUP',{email:this.email, password:this.password})
            }
        }
    }
</script>

<style scoped>

</style>