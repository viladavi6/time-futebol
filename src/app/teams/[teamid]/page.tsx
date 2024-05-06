import Image from "next/image";
import styles from '../../style/Team.module.css';

const getTeamsById: (id: string) => Promise<iTeams> = async(id) => {
    const api = `https://api.api-futebol.com.br/v1/times/${id}`;

    const res = await fetch(`${api}`, {
        headers: {  Authorization: "Bearer test_c08191ad11c0ed8e09be7e9140d136"},
    });

    return res.json();
    
}

export default async function Team({params}: any) {
    const {time_id} = params;
    const team = await getTeamsById(time_id);

    return (
        <div className={styles.team_container}>
            <h1 className={styles.title}>{team.nome_popular}</h1>
            <Image src={team.escudo} width={200} height={280}
            alt={team.nome_popular} 
            />
            <div>
                <h3>Sigla: {team.sigla}</h3>
            </div>
        </div>

        
    )
    
}