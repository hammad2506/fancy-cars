const handleCarAdd = ({id, image, make, model, year, availability} = {}) => (
    {
        type: 'ADD_CAR',
        car: {
            id, image, make, model, year, availability
        }
    }
);

const getCarsActionGenerator = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/cars')
            .then(data => data.json())
            .then(data => {
                data.forEach(car => dispatch(handleCarAdd({...car})));    
            })
            .catch(err => console.log(err));
    }
}

export default getCarsActionGenerator;
