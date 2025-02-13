import localData from '../helpers/getDataTable.json';

export class DinamicTableServiceApi {
    constructor() {};

    async getTableData() {
        return localData;
    };
}