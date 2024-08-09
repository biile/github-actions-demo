import {computed, ref} from "vue";
import {ElMessage} from "element-plus";
import { useStorage,StorageSerializers } from '@vueuse/core'

const user = useStorage('user', null, undefined, {
    serializer: StorageSerializers.object
})

export const useUser = () => {
    const loginModule = ref({
        username: "",
        password: ""
    });

    const login = async () => {
        user.value = { id: 1, username: loginModule.value.username }
        ElMessage.success('Login sucess')
    }
    const loggedIn = computed(() => user.value?.id)
    const logout = async () => {
        user.value = null;
        ElMessage.success("Logout success")
    };

    return{
        loginModule,
        user,
        login,
        loggedIn,
        logout
    }
}
