import {reactive, computed} from 'vue';

const state = reactive({
    showModal: false,
    dataCrud: {
        path: null,
        customData: null,
    }
});

const store = computed(() => ({
    get showModal(): boolean {
        return state.showModal;
    },
    set showModal(value: boolean) {
        state.showModal = value;
    },
    get dataCrud(): any {
        return state.dataCrud;
    },
    set dataCrud(value: any) {
        state.dataCrud = value;
    },
    reset() {
        state.showModal = false;
        state.dataCrud =  {
            path: null,
            customData: null,
        }
    }
})).value;

export default store;