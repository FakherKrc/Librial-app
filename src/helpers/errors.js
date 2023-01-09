// i want functions that return error when filters are not valid

// i want to create a function that take contratMin and contratMax and return error if contratMin > contratMax

function isErrors(fields){
        let errors =''
        if ((fields[1].soldeMin > fields[2].soldeMax ) && (fields[1].soldeMin != '' || fields[2].soldeMax != '')) {
            errors += 'le solde min. ne peut pas être superieur au solde max.';
           
        } 
        if (fields[3].contratMin > fields[4].contratMax && (fields[3].contratMin != '' || fields[4].contratMax != '')) {
            if(errors != ''){
                errors += ' and '
            }

            errors += 'le contrat min. ne peut pas être superieur au contrat max.';
        }
        return errors ? errors : false;
    }


// i want to create a function that take soldeMin and soldeMax and return error if soldeMin > soldeMax

export  { isErrors}