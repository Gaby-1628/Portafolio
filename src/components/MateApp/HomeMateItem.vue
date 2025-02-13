<template>
    <div class="container">
        <div class="header">
            <div class="content-bar">
                <div class="title">
                    <h1>Tabla Dinámica:</h1>
                </div>
                <div class="search-content">
                    <input type="text" v-model="searchQuery" placeholder="Buscar..." />
                    <button>
                        <v-icon name="bi-search" scale="1.5" color="#D1C5AC" animation="pulse" class="icon-search" />
                    </button>
                </div>
            </div>
            <div class="box-btn">
                <button @click="showModal" class="add">
                    <v-icon name="bi-plus-square-fill" scale="1.5" color="#1d3b43" class="icon" />
                    <span>Agregar</span>
                </button>
                <AddButton :modal="isModalVisible" :newData="newData" @close="closeModal" @addData="handleAddData" />
                <button @click="editSelectedRow" class="save" :disabled="!isSingleRowSelected">
                    <v-icon name="fa-edit" scale="1.5" color="#1d3b43" class="icon" />
                    <span>Editar</span>
                </button>
                <button @click="deleteSelectedRows" class="delete" :disabled="selectedRows.length === 0">
                    <v-icon name="ri-delete-bin-5-fill" scale="1.5" color="#1d3b43" class="icon" />
                    <span>Eliminar</span>
                </button>
            </div>
        </div>
        <div class="scroll-table">
            <table class="table-container">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="(key, index) in tableColumns" :key="index">
                            {{ key }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in filteredData" :key="index">
                        <td>
                            <input type="checkbox" v-model="data.selected" @change="updateSelectedRows" />
                        </td>
                        <td v-for="(key, colIndex) in tableColumns" :key="colIndex">
                            {{ data[key] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { DinamicTableServiceApi } from '../../service/tableService';
import AddButton from './addButton.vue';
import Swal from 'sweetalert2';

const tableService = new DinamicTableServiceApi();

const tableData = ref([]);
const searchQuery = ref('');
const isModalVisible = ref(false);
const selectedRows = ref([]);
const isEditing = ref(false);
const editIndex = ref(null);

const newData = ref({
    User: '',
    Profile: '',
    Network: '',
    IpLocal: '',
    IpRemota: '',
    txBytes: '',
    rxBytes: '',
    Status: '',
    lastDisconnect: ''
});

const showModal = () => {
    isModalVisible.value = true;
};

const tableColumns = computed(() => {
    return tableData.value.length > 0 ? Object.keys(tableData.value[0]) : [];
});

const filteredData = computed(() => {
    if (!searchQuery.value) return tableData.value;
    const normalizedQuery = searchQuery.value.toLowerCase().trim();

    return tableData.value.filter((row) =>
        tableColumns.value.some((key) => {
            const value = String(row[key]).toLowerCase().trim();
            return value.includes(normalizedQuery);
        })
    );
});

const getData = async () => {
    try {
        const data = await tableService.getTableData();
        tableData.value = data.map((row) => ({ ...row, selected: false }));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const updateSelectedRows = () => {
    selectedRows.value = tableData.value.filter((row) => row.selected);
};

const isSingleRowSelected = computed(() => selectedRows.value.length === 1);

const editSelectedRow = () => {
    if (isSingleRowSelected.value) {
        const rowToEdit = selectedRows.value[0];
        editIndex.value = tableData.value.indexOf(rowToEdit);
        isEditing.value = true;
        Object.assign(newData.value, rowToEdit);
        showModal();
    }
};

const deleteSelectedRows = () => {
    Swal.fire({
        title: "¿Está seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            tableData.value = tableData.value.filter((row) => !row.selected);
            selectedRows.value = [];
            Swal.fire({
                title: "Eliminado",
                text: "El dato fue eliminado de la tabla",
                icon: "success"
            });
        }
    });
};

const handleAddData = (newDataReceived) => {
    if (isEditing.value && editIndex.value !== null) {
        // Actualiza la fila existente
        tableData.value[editIndex.value] = { ...newDataReceived, selected: false };
    } else {
        // Agrega una nueva fila
        tableData.value.push({ ...newDataReceived, selected: false });
    }

    isEditing.value = false;
    editIndex.value = null;
    localStorage.setItem('tableData', JSON.stringify(tableData.value));
    closeModal();
};

const closeModal = () => {
    isModalVisible.value = false;
    isEditing.value = false;
    editIndex.value = null;
    newData.value = {
        User: '',
        Profile: '',
        Network: '',
        IpLocal: '',
        IpRemota: '',
        txBytes: '',
        rxBytes: '',
        Status: '',
        lastDisconnect: ''
    };
};

onMounted(() => {
    getData();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');

.container {
    margin: 20px;
}

.header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 80px;
}

.content-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.title {
    font-family: 'Lemon';
    font-weight: 400;
    font-style: normal;
    margin-top: -50px;
    margin-left: 50px;
    color: #1d3b43;
    border-bottom: 4px solid #1d3b43;
}

.search-content {
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    background-color: #1d3b43;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(29, 59, 67, 0.8);
    margin-top: 20px;
    margin-bottom: 80px;
    margin-left: 450px;
}

.search-content input {
    padding: 5px 10px;
    margin-right: 10px;
    font-size: 16px;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px 0 0 10px;
    background-color: #204d5a;
    color: #D1C5AC;
}

.search-content button {
    margin: auto -5px;
    background-color: transparent;
    border: none;
}

.box-btn {
    width: 100%;
    display: flex;
    margin-top: -50px;
    margin-left: 100px;
    margin-bottom: 50px;
}

.add,
.save,
.delete {
    background-color: transparent;
    border: none;
    padding: 10px 20px;
}

.save {
    background-color: transparent;
    border: none;
    padding: 10px 20px;
}

.scroll-table {
    width: 90%;
    max-height: 500px;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 0 10px 16px rgba(55, 109, 129, 1);
    margin-left: 180px;
    margin-top: -50px;
}

.table-container {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    background-color: #b4c4b8;
}

.table-container thead {
    position: sticky;
    height: 50px;
    top: 0;
    z-index: 2;
    background-color: #204d5a;
}

.table-container thead tr th {
    text-align: center;
    font-size: 16px;
    color: #D1C5AC;
}

.table-container th,
.table-container td {
    height: 40px;
    border-bottom: 1px solid #a7a164;
    padding: 8px;
    text-align: left;
}

.table-container tbody tr td {
    text-align: center;
    font-size: 14px;
    color: #1d3b43;
}

/* --------------------------------------------------------------------------------------- */
/* ------------------------------------- CSS responsivo ---------------------------------- */
/* --------------------------------------------------------------------------------------- */
@media screen and (max-width: 1300px) {
    .title h1 {
        width: 500px;
        margin-top: 10px;
        margin-left: 50px;
    }

    .search-content {
        margin-left: 150px;
    }

    .box-btn {
        margin-top: -40px;
        margin-left: 150px;
    }

    .scroll-table {
        width: 80%;
        max-height: 450px;
        margin-left: 170px;
        margin-top: -10px;
    }
}

@media screen and (max-width: 1024px) {
    .header {
        margin-left: 0px;
    }

    .content-bar {
        width: 100%;
        display: flex;
    }

    .title h1 {
        width: 300px;
        font-size: 30px;
        margin-top: 10px;
        margin-left: 50px;
    }

    .search-content {
        margin-top: 40px;
        margin-left: 220px;
    }

    .icon-search {
        scale: 1;
    }

    .box-btn {
        margin-top: -120px;
        margin-left: 80px;
        margin-bottom: 0px;
        font-size: 14px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: 1;
    }

    .scroll-table {
        width: 95%;
        max-height: 450px;
        margin-left: 70px;
        margin-top: -50px;
    }

    .table-container thead tr th {
        font-size: 18px;
    }

    .table-container tbody tr td {
        font-size: 16px;
    }
}

@media screen and (max-width: 1000px) {
    .content-bar {
        width: 100%;
        display: flex;
    }

    .title h1 {
        width: 300px;
        font-size: 30px;
        margin-top: 5px;
        margin-left: 150px;
    }

    .search-content {
        margin-top: 40px;
        margin-left: 80px;
    }

    .icon-search {
        scale: 1;
    }

    .box-btn {
        margin-top: -40px;
        margin-left: 120px;
        margin-bottom: 0px;
        font-size: 14px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: 1;
    }

    .scroll-table {
        width: 95%;
        max-height: 650px;
        margin-left: 125px;
        margin-top: 40px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    .content-bar {
        width: 100%;
        display: flex;
    }

    .title h1 {
        font-size: 32px;
        margin-top: 10px;
        margin-left: 0px;
    }

    .search-content {
        margin-top: 50px;
        margin-left: 70px;
    }

    .box-btn {
        margin-top: -40px;
        margin-left: 0px;
        margin-bottom: 0px;
        font-size: 14px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: 1;
    }

    .scroll-table {
        width: 100%;
        max-height: 650px;
        margin-left: 5px;
        margin-top: 40px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 12px;
    }
}

@media screen and (max-width: 600px) {
    .content-bar {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto;
    }

    .title h1 {
        font-size: 32px;
        margin-top: 70px;
        margin-left: -40px;
    }

    .search-content {
        margin-top: 20px;
        margin-left: 10px;
    }

    .box-btn {
        margin-top: -80px;
        margin-left: 0px;
        margin-bottom: 0px;
        font-size: 14px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: 1;
    }

    .scroll-table {
        width: 100%;
        max-height: 550px;
        margin-left: -20px;
        margin-top: -20px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 12px;
    }
}

@media screen and (width: 540px) {
    .content-bar {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto;
    }

    .title {
        margin-left: -40px;
    }

    .title h1 {
        font-size: 32px;
        margin-top: 70px;
        margin-left: 10px;
    }

    .search-content {
        margin-top: 10px;
        margin-left: -40px;
    }

    .box-btn {
        margin-top: -80px;
        margin-left: 50px;
        margin-bottom: 0px;
        font-size: 14px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: 1;
    }

    .scroll-table {
        width: 100%;
        max-height: 400px;
        margin-left: -20px;
        margin-top: -20px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 11px;
    }
}

@media screen and (max-width: 400px) {
    .content-bar {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto;
    }

    .title h1 {
        font-size: 32px;
        margin-top: 70px;
        margin-left: -40px;
    }

    .search-content {
        margin-top: 20px;
        margin-left: 10px;
    }

    .box-btn {
        margin-top: -80px;
        margin-left: -20px;
        margin-bottom: 0px;
        font-size: 12px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: .8;
    }

    .scroll-table {
        width: 100%;
        max-height: 350px;
        margin-left: -20px;
        margin-top: -20px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 10px;
    }
}

@media screen and (width: 344px) {
    .content-bar {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto;
    }

    .title {
        margin-left: 10px;
    }

    .title h1 {
        font-size: 30px;
        margin-top: 70px;
        margin-left: 0px;
    }

    .search-content {
        margin-top: 20px;
        margin-left: 0px;
    }

    .box-btn {
        margin-top: -80px;
        margin-left: -20px;
        margin-bottom: 0px;
        font-size: 12px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: .8;
    }

    .scroll-table {
        width: 100%;
        max-height: 350px;
        margin-left: -20px;
        margin-top: -20px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 10px;
    }
}

@media screen and (height: 740px) {
    .content-bar {
        width: 100%;
        display: grid;
        flex-direction: column;
        grid-auto-columns: auto;
    }

    .title h1 {
        font-size: 32px;
        margin-top: 70px;
        margin-left: -50px;
    }

    .search-content {
        margin-top: 10px;
        margin-left: 0px;
    }

    .box-btn {
        margin-top: -80px;
        margin-left: -20px;
        margin-bottom: 0px;
        font-size: 12px;
    }

    .add .icon,
    .save .icon,
    .delete .icon {
        scale: .8;
    }

    .scroll-table {
        width: 100%;
        max-height: 400px;
        margin-left: -20px;
        margin-top: -20px;
    }

    .table-container thead tr th,
    .table-container tbody tr td {
        font-size: 10px;
    }
}
</style>