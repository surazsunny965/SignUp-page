import styles from '../styles/Home.module.css'

export default function KM_Input(props:any){
    return <div>
        <h1 className={styles.inputDescription}><span className={styles.starSignUp}>* </span>{props.name}</h1>
        <input type={props.typ} placeholder={props.name} className={styles.myInput} />
    </div>
}