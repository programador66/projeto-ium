<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar style="height:60px;">
                <q-btn dense flat round icon="menu" @click="left = !left"/>

                <q-toolbar-title>
                    <a style="margin-top:2%;font-family: Roboto;font-weight:500;font-size:1rem;">SIS Aluno-Empresa</a>
                </q-toolbar-title>
                <q-avatar name="mails" icon="mail" label="Mails" style="float:right;margin-top:1%;" @click="chat">
                    <q-badge color="red" floating>2</q-badge>
                </q-avatar>
                <q-avatar style="float:right;margin-top:1%;">
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
            </q-toolbar>
            <sub-menu/>
        </q-header>

        <q-drawer
                show-if-above
                v-model="left"
                side="left"
                bordered :width="300"
                overlay
                content-class="bg-grey-3">

            <q-list>

                <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
                    <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
                        <q-item-section avatar>
                            <q-icon name="school"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Faculdade</q-item-label>
                            <q-item-label caption>quasar.dev</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
                        <q-item-section avatar>
                            <q-icon name="chat"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Discord Chat Channel</q-item-label>
                            <q-item-label caption>chat.quasar.dev</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
                        <q-item-section avatar>
                            <q-icon name="record_voice_over"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Forum</q-item-label>
                            <q-item-label caption>forum.quasar.dev</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
                        <q-item-section avatar>
                            <q-icon name="rss_feed"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Twitter</q-item-label>
                            <q-item-label caption>@quasarframework</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
                        <q-item-section avatar>
                            <q-icon name="public"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Facebook</q-item-label>
                            <q-item-label caption>@QuasarFramework</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="logout"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label @click="sair()">Sair</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-scroll-area>
            </q-list>


            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img :src="imagememp">
                    </q-avatar>
                    <div class="text-weight-bold">{{usuario.name}}</div>
                    <div>{{usuario.email}}</div>
                </div>
            </q-img>

        </q-drawer>
    </q-layout>
</template>

<script>
import imagememp from '../../img/avatar2.jpg';
import subMenu from '../../layouts/SubMenus/SubMenu';
import { mapMutations } from 'vuex';

    export default {
        components: {
            subMenu
        },
        data() {
            return {
                left: false,
                tab: 'one',
                usuario: null,
                imagememp:imagememp
            }
        },
        created() {
            let user = sessionStorage.getItem('usuario');
            if (user) {
                this.usuario = JSON.parse(user);
            } else {
                this.$router.push("/login")
            }
        },
        methods: {
            ...mapMutations("jfs",{
                setlimpaDados: "setlimpaDados",
            }),
            chat() {
                alert('em construção');
            },
            sair() {

                this.$q.dialog({
                    title: 'Encerrar Sessão',
                    message: 'Deseja realmente sair do APP?',
                    cancel: true,
                    persistent: true
                }).onOk(() => {
                    sessionStorage.clear();
                    this.setlimpaDados();
                    this.$router.push("/");
                    
                }).onCancel(() => {
                    console.log('>>>> Cancel')
                })

            }
        }
    }
</script>


<style scoped>
    .text {
        color: white
    }
</style>