<template>
    <q-layout id="login">
        <div class="q-pa-sm q-ml-md q-mr-md" style="max-width: 400px">
            <div id="foto">
                <q-img
                        :src="url"
                        spinner-color="white"
                        style="height: 140px; max-width: 150px"
                />
            </div>
            <div id="progress" v-show="mostrarProgress">
                <q-circular-progress
                        indeterminate
                        size="50px"
                        color="white"
                        class="q-ma-md"
                />
            </div>

            <div id="form" v-show="!mostrarProgress">
                <q-form
                        class="q-gutter-md"
                        color="white"
                        ref="formLogin"
                >
                    <q-input
                            v-show="novoUsuario"
                            color="white"
                            filled
                            ref="nome"
                            v-model="nome"
                            label="Nome"
                            lazy-rules
                            dark
                            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                    >
                        <template v-slot:append>
                            <q-icon name="person"/>
                        </template>
                    </q-input>

                    <q-input
                            ref="email"
                            color="white"
                            filled
                            v-model="email"
                            label="E-mail"
                            type="email"
                            lazy-rules
                            dark
                            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                    >
                        <template v-slot:append>
                            <q-icon name="mail"/>
                        </template>
                    </q-input>

                    <q-input
                        filled
                        ref="password"
                        color="white"
                        v-model="senha"
                        label="Senha"
                        dark
                        lazy-rules
                        type="password"
                        :rules="[
                        val => val !== null && val !== '' || 'Campo obrigatório'
                        ]"
                        @keyup.enter="entrar"
                    >
                        <template v-slot:append>
                            <q-icon name="lock"/>
                        </template>
                    </q-input>

                    <div v-if="!novoUsuario">

                        <span id="recuperar-senha"> Esqueci minha senha </span>
                        <div style="margin-top:8%;">
                            <q-btn label="Login" 
                                style="width: 100%;height:50px;" 
                                @click="entrar" 
                                outline
                                text-color="white"
                            />
                        </div>

                        <div id="ntc" style="margin-top:5%;">
                            <q-btn label="Criar uma conta" style="width: 100%;background-color:#ff3333;"
                                   @click="criarNovaConta" outline text-color="white" color=""/>
                        </div>

                    </div>

                    <div v-else>
                        <q-input
                                filled
                                ref="newPassword"
                                color="white"
                                v-model="novaSenha"
                                label="Confirmar Senha"
                                dark
                                lazy-rules
                                type="password"
                                :rules="[
                                val => val !== null && val !== '' || 'Campo obrigatório'
                                ]"
                                @keyup.enter="ciarNovoUsuario"
                        >
                            <template v-slot:append>
                                <q-icon name="lock"/>
                            </template>
                        </q-input>

                        <div id="btnCadastrar">
                            <span>
                                <q-btn label="Cancelar" 
                                    @click="cancelaCadastro()" 
                                    text-color="blue"
                                    color="white"
                                />
                            </span>
                            <span style="margin-left:8px">
                                <q-btn label="Cadastrar" 
                                    @click="criarNovoUsuario"
                                    text-color="blue" color="white"
                                />
                            </span>
                        </div>

                    </div>
                </q-form>
            </div>
        </div>
    </q-layout>
</template>

<script>
    import imagem from '../../img/user.png';
    import API from "../../api/api";

    export default {
        name: 'Login',
        data() {
            return {
                nome: null,
                email: null,
                senha: null,
                novaSenha: null,
                novoUsuario: false,
                url: imagem,
                accept: true,
                mostrarProgress: false
            }
        },
        methods: {
            cancelaCadastro() {
                this.onReset();
                this.novoUsuario = false;

            },
            onReset() {
                this.nome = null;
                this.email = null;
                this.senha = null;
                this.novaSenha = null;

                this.$refs.formLogin.resetValidation();

            },
            criarNovaConta() {
                this.novoUsuario = true;
                this.onReset();
            },
            entrar() {
                this.$refs.email.validate();
                this.$refs.password.validate();

                if (this.$refs.email.hasError || this.$refs.password.hasError) {
                    return this.formHasError = true;
                }

                this.mostrarProgress = true;
                let foto = document.getElementById("foto");
                foto.style.transitionDelay = "0.1s";
                foto.style.transitionDuration = "3s";
                foto.style.transform = 'scale(1.1)';


                new API().api.post('cliente/login', {
                    email: this.email,
                    password: this.senha
                })
                    .then(response => {

                        if (response.data.validate) {
                            const msg =
                                response.data.validate ? response.data.data.email ? response.data.data.email[0] : "" + " "
                                + response.data.data.password ? response.data.data.password[0] : "" : null;

                            this.$q.notify({
                                color: 'red',
                                timeout: 1500,
                                textColor: 'white',
                                message: msg || 'verificar campos inválidos!',
                                actions: [{icon: 'close', color: 'white'}]
                            })

                            foto.style.transitionDelay = "0.1s";
                            foto.style.transitionDuration = "3s";
                            foto.style.transform = 'scale(0.9)';
                            this.mostrarProgress = false;

                        } else if (response.data.success) {
                            sessionStorage.setItem('usuario', JSON.stringify(response.data.data));
                            setTimeout(() => {
                                this.$router.push('/index');
                            }, 2000);

                        } else {

                            let res = response.data.message;

                            this.$q.notify({
                                color: 'red',
                                timeout: 1500,
                                textColor: 'white',
                                message: res,
                                actions: [{icon: 'close', color: 'white'}]
                            })

                            setTimeout(() => {
                                this.mostrarProgress = false;
                                foto.style.transitionDelay = "0.1s";
                                foto.style.transitionDuration = "3s";
                                foto.style.transform = 'scale(0.9)';
                            }, 2000);

                        }


                    })
                    .catch(e => {
                        console.log(e);
                    })


            },
            criarNovoUsuario() {

                this.$refs.email.validate();
                this.$refs.password.validate();
                this.$refs.nome.validate();
                this.$refs.newPassword.validate();

                if (this.$refs.email.hasError || this.$refs.password.hasError || this.$refs.nome.hasError || this.$refs.newPassword.hasError) {
                    return this.formHasError = true;
                }

                this.mostrarProgress = true;
                let foto = document.getElementById("foto");
                foto.style.transitionDelay = "0.1s";
                foto.style.transitionDuration = "3s";
                foto.style.transform = 'scale(1.1)';

                new API().api.post('cliente/cadastro', {
                        name: this.nome,
                        email: this.email,
                        password: this.senha,
                        password_confirmation: this.novaSenha
                    }
                ).then(response => {

                    if (response.data.success) {
                        const msg = response.data.message;
                        this.$q.notify({
                            color: 'white',
                            timeout: 1500,
                            textColor: 'blue',
                            message: msg,
                            actions: [{icon: 'close', color: 'white'}]

                        })
                        setTimeout(() => {
                            sessionStorage.setItem('usuario', JSON.stringify(response.data.data));

                            setTimeout(() => {
                                this.$router.push('/index');
                            }, 2000);

                        }, 2000);
                    } else {

                        const error = response.data;
                        this.$q.notify({
                            color: 'red',
                            timeout: 1500,
                            textColor: 'white',
                            message: error,
                            actions: [{icon: 'close', color: 'white'}]
                        })

                        setTimeout(() => {
                            foto.style.transitionDelay = "0.1s";
                            foto.style.transitionDuration = "3s";
                            foto.style.transform = 'scale(0.9)';
                            this.mostrarProgress = false;
                        }, 2000);
                    }

                }).catch(e => {
                    this.$q.notify({
                        color: 'red',
                        timeout: 1500,
                        textColor: 'white',
                        message: 'Verifique sua conexão',
                        actions: [{icon: 'close', color: 'white'}]
                    })

                    setTimeout(() => {
                            foto.style.transitionDelay = "0.1s";
                            foto.style.transitionDuration = "3s";
                            foto.style.transform = 'scale(0.9)';
                            this.mostrarProgress = false;
                    }, 2000);
                    
                });


            },
            facebook() {

            },
            watch() {
                // novaSenha(val){
                //   let novaSenha = val;
                //   if (novaSenha === this.senha) {

                //   }
                // }
            }
        }
    }
</script>

<style scoped>

    #recuperar-senha {
        color: #fff;
        margin-left: 30%;
    }

    #progress {
        margin: 20% 38%;
    }

    #login {
        background-color: #1E88E5;
    }

    #foto {
        margin: 14% 30%;
    }

    #ntc {
        color: white;
        margin: 7% 14%;
    }

    #opEntrada {
        margin-left: 1.5%;
    }

    #btnEntrar {
        margin: 10% 40%;
    }

    #btnCadastrar {
        display: inline-block;
        margin-left: 18%;
        margin-top: 4%;
    }


    @media only screen and (max-width: 360px) {

        #ntc {
            color: white;
            margin: 5% 14%;
        }


        #foto {
            margin: 12% 28%;
        }
    }

    @media only screen and (min-width: 400px) {

        #ntc {
            color: white;
            margin: 9% 16%;
        }
    }

    @media only screen and (max-width: 320px) {

        #ntc {
            color: white;
            margin: 5% 7%;
        }

        #recuperar-senha {
            color: #fff;
            margin-left: 27%;
        }

        #foto {
            margin: 12% 28%;
        }

        #btnEntrar {
            margin: 10% 38%;
        }

        #btnCadastrar {
            display: inline-block;
            margin-left: 10%;
            margin-top: 4%;
        }
    }

</style>
