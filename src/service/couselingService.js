import localDiet from '../helpers/getDataDiet.json';
import localExercise from '../helpers/getDataExercise.json';
import localStress from '../helpers/getDataStress.json';

export class CouselingServiceApi {
    constructor() {}

    async getDataDiet() {
        return localDiet;
    }

    async getDataExercise() {
        return localExercise;
    }

    async getDataStress() {
        return localStress;
    }
}
