import { bet } from "@/entities/bet/model/bet";
import { commonApiInstance } from "@/shared/commonApi/commonApi";

export const fetchPlaceBet = async () => {
    const response = await commonApiInstance.get('/').then(() => {
        console.log('test fetch place bet passed');
        return bet;
    }, () => {
        console.log('test fetch place bet dropped');
        return bet;
    });

    return response;
};