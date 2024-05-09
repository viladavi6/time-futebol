"use client"
import Image from "next/image";
import styles from "./style/Home.module.css";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

const getAllTeams: () => Promise<iTeams[]> = async () => {
  const api = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela";


  try {
    const res = await fetch(`${api}`, {
      headers: { Authorization: "Bearer " }, /* inserir sua key após o bearer */
    });

    const data = await res.json();

    const teams = data.map((t: any) => t.time);
    return teams;

  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
}

export default function Home() {
  const [teams, setTeams] = useState<iTeams[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsData = await getAllTeams();
        setTeams(teamsData);
      } catch (error) {
        console.error(`Error fetching teams: ${error}`);
      }
      finally {
        setLoading(false);
      }

    }
    fetchData();
  }, []);
  return (
<>
    <div className={styles.title_container}>
      <h1 className={styles.title}>Times de Futebol</h1>
    </div>
    
      {
    loading ? (
      <p>Carregando...</p>
    ) : (
      <div className={styles.teams_container}>
        {teams && teams.length > 0 ?
          (teams.map((team) => <Card key={team.time_id} team={team} />)
          ) : (
            <p>Nenhum time encontrado</p>
          )}
          </div>
    )
    }

</>);
}


