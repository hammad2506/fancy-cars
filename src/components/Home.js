import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  filtersApplied  from '../selectors/filtersApplied';
import CarCard from './CarCard';
import SearchFilter from './SearchFilter';
import Header from './Header';
import getCarsActionGenerator  from '../actions/cars';
import { changeFilterText, changeFiltersortBy } from '../actions/filters';

class Home extends Component {
    
    componentDidMount(){
        this.props.getCars();
    }

    render(){
        return(
            <div className='parentContainer'>
                <Header />
                <SearchFilter filters={this.props.filters} 
                changeTextFilter={this.props.changeTextFilter} 
                changeSortFilter={this.props.changeSortFilter}/>
                <div className='carContainer'>
                    {this.props.cars.map((car) => (
                        <CarCard key={car.id} {...car} />
                    ))}
                </div>
                        
            </div>
        )
    }    
}
    
const mapStateToProps = (state) => ({
    cars: filtersApplied(state.cars, state.filters),
    filters: state.filters,
  });

const mapDispatchToProps =  {
    getCars: getCarsActionGenerator,
    changeTextFilter: changeFilterText,
    changeSortFilter: changeFiltersortBy
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
