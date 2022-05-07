import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';
import { NewHouseForm } from "./NewHouseForm";

export class HousesList extends React.Component {
    state = { 
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render() {
        return (
            <div className="house-list">
                <NewHouseForm getHouse = {this.fetchHouses} />
                {this.state.houses.map((house) => (
                    <House 
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />    
                ))}
            </div>
        )
    }
}