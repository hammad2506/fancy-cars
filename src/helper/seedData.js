import { addCar } from '../actions/cars';

const seedData = (store) => {
    
    store.dispatch(addCar({
        id: 1,
        make: 'Honda',
        model: 'Civic',
        year: 2016,
        availability: 'In Dealership'
    }));
    
    
    store.dispatch(addCar({
        id: 2,
        make: 'Honda',
        model: 'Type R',
        year: 2018,
        availability: 'Out of Stock'
    }));
    
    
    store.dispatch(addCar({
        id: 3,
        make: 'Toyota',
        model: 'Corolla',
        year: 2019,
        availability: 'In Dealership'
    }));
    
    
    store.dispatch(addCar({
        id: 4,
        make: 'Nissan',
        model: 'GTR',
        year: 2010,
        availability: 'Unavailable'
    }));
    
    store.dispatch(addCar({
        id: 5,
        make: 'Subaru',
        model: 'Z38',
        year: 2016,
        availability: 'In Dealership'
    }));
    
    
    store.dispatch(addCar({
        id: 6,
        make: 'Mazda',
        model: '3',
        year: 2017,
        availability: 'Out of Stock'
    }));
    
    store.dispatch(addCar({
        id: 7,
        make: 'Dodge',
        model: 'Charger',
        year: 2015,
        availability: 'In Dealership'
    }));
    
    
    store.dispatch(addCar({
        id: 8,
        make: 'Ford',
        model: 'Mustang',
        year: 2012,
        availability: 'Unavailable'
    }));
    
    store.dispatch(addCar({
        id: 9,
        make: 'Jaguar',
        model: 'F-Type',
        year: 2018,
        availability: 'In Dealership'
    }));
    
    
    store.dispatch(addCar({
        id: 10,
        make: 'Audi',
        model: 'R8',
        year: 2016,
        availability: 'Out of Stock'
    }));

}

export default seedData;

