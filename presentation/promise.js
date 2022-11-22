const colors = require('colors');

function lancerDes() {
    // [0; 1[
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 3 + 1);

    return new Promise( (resolve, reject) => {
        setTimeout( () => {    
            if( fail == 1 ) {
                reject('Cassé');
            }

            resolve(value);
        }, 1000);
    } );
}

lancerDes().then((value) => { // la réussite
    console.log(`Résultat obtenu: ${colors.green(value)}`);
}).catch((error) => { // l'échec
    console.log(error.red);
}).finally( () => { // dans tous les cas
    console.log('Recommencer ?'.yellow);
    console.log('---------------------------------');
});

// ----------------------------------------------------------

lancerDes() // 1er lancé
.then((value) => { // résultat du 1er lancé
    console.log(`1er résultat obtenu: ${colors.green(value)}`);

    return lancerDes(); // 2nd lancé
}).then((value) => { // résultat du 2nd lancé
    console.log(`2nd résultat obtenu: ${colors.green(value)}`);
}).catch((error) => { // erreur commune au 2 lancés
    console.log(error.red);
}).finally( () => {
    console.log('Recommencer ?'.yellow);
    console.log('---------------------------------');
});

// ----------------------------------------------------------

Promise.all([lancerDes(), lancerDes()]).then( (values) => {
    const [value1, value2] = values;

    console.log(`1er résultat obtenu du double lancé: ${colors.green(value1)}`);
    console.log(`2nd résultat obtenu du double lancé: ${colors.green(value2)}`);

}).catch((error) => { 
    console.log(error.red);
}).finally( () => {
    console.log('Recommencer ?'.yellow);
    console.log('---------------------------------');
});