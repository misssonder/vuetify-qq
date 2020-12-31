import Vue from 'vue'
import Vuex from 'vuex'
import {dto} from "@/client/proto/proto";
import IPacket = dto.IPacket;
import jwt from 'jsonwebtoken'
import IUserInfo = dto.IUserInfo;
import UserInfo = dto.UserInfo;
import cookie from "js-cookie";
import Long from "long";
import Packet = dto.Packet;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        webSocket: WebSocket,
        friendMessageList :[],
    },
    getters: {},
    mutations: {
        setWeSocket(state: any, webSocket: WebSocket) {
            state.webSocket = webSocket
        },
        setFriendMessageList(state: any, packet: IPacket) {
            state.friendMessageList.push(packet)
        },
    },
    actions: {},
    modules: {}
})
