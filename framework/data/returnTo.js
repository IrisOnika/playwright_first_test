import { urls } from '../config';

export default {
    checkLinks: [
        [`${urls.categoryUrl}FISH`, urls.baseUrl_], 
        [`${urls.categoryUrl}DOGS`, urls.baseUrl_],
        [`${urls.categoryUrl}REPTILES`, urls.baseUrl_],
        [`${urls.categoryUrl}CATS`, urls.baseUrl_],
        [`${urls.categoryUrl}BIRDS`, urls.baseUrl_],
        [`${urls.productUrl}FI-SW-02`, urls.categoryUrlFish_],
        [`${urls.productUrl}K9-DL-01`, urls.categoryUrlDogs_],
        [`${urls.productUrl}RP-SN-01`, urls.categoryUrlReptiles_],
        [`${urls.productUrl}FL-DSH-01`, urls.categoryUrlCats_],
        [`${urls.productUrl}AV-SB-02`, urls.categoryUrlBirds_],
        [`${urls.itemUrl}EST-4`, urls.productUrlfish01_],
        [`${urls.itemUrl}EST-7`, urls.productUrlDogs01_],
        [`${urls.itemUrl}EST-11`, urls.productUrlReptiles01_],
        [`${urls.itemUrl}EST-14`, urls.productUrlCats01_],
        [`${urls.itemUrl}EST-18`, urls.productUrlBirds01_],
        [`${urls.viewCardUrl}`, urls.baseUrl_],

    ],
    checkLinksText: [
        [`${urls.categoryUrl}FISH`, 'Return to Main Menu'], 
        [`${urls.categoryUrl}DOGS`, 'Return to Main Menu'],
        [`${urls.categoryUrl}REPTILES`, 'Return to Main Menu'],
        [`${urls.categoryUrl}CATS`, 'Return to Main Menu'],
        [`${urls.categoryUrl}BIRDS`, 'Return to Main Menu'],
        [`${urls.productUrl}FI-SW-02`, 'Return to FISH'],
        [`${urls.productUrl}K9-DL-01`, 'Return to DOGS'],
        [`${urls.productUrl}RP-SN-01`, 'Return to REPTILES'],
        [`${urls.productUrl}FL-DSH-01`, 'Return to CATS'],
        [`${urls.productUrl}AV-SB-02`, 'Return to BIRDS'],
        [`${urls.itemUrl}EST-4`, 'Return to FI-FW-01'],
        [`${urls.itemUrl}EST-7`, 'Return to K9-BD-01'],
        [`${urls.itemUrl}EST-11`, 'Return to RP-SN-01'],
        [`${urls.itemUrl}EST-14`, 'Return to FL-DSH-01'],
        [`${urls.itemUrl}EST-18`, 'Return to AV-CB-01'],
        [`${urls.viewCardUrl}`, 'Return to Main Menu'],

    ]



}

