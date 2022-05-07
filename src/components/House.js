import React from "react";
import { housesApi } from "../rest/HousesApi";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const {house, updateHouse} = props;

    const deleteHouse = async (houseId) => {
        await housesApi.delete(house);
        updateHouse(house)
    }

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <div>
                        <div>
                            <label>{`${room.name}`}</label>
                        </div>
                        <div>
                            <label>{`${room.area} sq. ft.`}</label>
                            <button type="button" className="btn btn-warning float-end" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                        </div>
                       <hr></hr>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h2>
                {house.name}
                <button type="button" className="btn btn-warning float-end" onClick={(e) => deleteHouse(house._id)}>Delete</button>
            </h2>
            <div>
                <div>
                {
                    rooms({ rooms, houseId: house._id, deleteRoom})
                }
                </div>
            </div>
            <div>
                <NewRoomForm addNewRoom={addNewRoom} />
            </div>
        </div>
    );
}