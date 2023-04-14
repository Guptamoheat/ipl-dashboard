import React from "react";
import { TeamTile } from "../components/TeamTile";
import { useEffect, useState } from "react";
import './HomePage.scss'
export const HomePage = () => {
    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                    
                    const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                    console.log(response)
                    const data = await response.json();
                    setTeams(data);       
            }
            fetchAllTeams();
            
        },
        []
    )


    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>

            <div className="team-grid">
                {teams.map(team => <TeamTile teamName= {team.teamName}/>)}

            </div>
        </div>
    )


}