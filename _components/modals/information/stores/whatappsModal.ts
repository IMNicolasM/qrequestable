import {reactive, computed} from 'vue';

const state = reactive({
    showModal: false,
    roomId: 0,
    loading: false,
});

const store = computed(() => ({
    get showModal(): boolean {
        return state.showModal;
    },
    set showModal(value: boolean) {
        state.showModal = value;
    },
    get loading(): boolean {
        return state.loading;
    },
    set loading(value: boolean) {
        state.loading = value;
    },
    get roomId(): number {
        return state.roomId;
    },
    set roomId(value: number) {
        state.roomId = value;
    },
})).value;

export default store;