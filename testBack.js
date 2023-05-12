import { OneMaison, allMaisons } from './backend.mjs'

/* try {
    const records = await allMaisons() ;
    console.log(JSON.stringify(records, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    } */

try {
    const record = await OneMaison();
    console.log(JSON.stringify(record, null, 2));
    } catch (e) {
    console.error(e);
    }