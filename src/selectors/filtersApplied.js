const filtersApplied = (cars, { text, sortBy } = {}) => {
    return cars.filter((car) => {
        const makeTest = car.make.toLowerCase().includes(text.toLowerCase());
        const modelTest = car.model.toLowerCase().includes(text.toLowerCase());
        return makeTest || modelTest;
    }).sort((a,b) => {
        if(sortBy === 'name'){
            return a.make > b.make ? 1 : -1 
        } else if(sortBy === 'availability') {
            return a.availability > b.availability ? 1 : -1
        }
    });
}

export default filtersApplied;