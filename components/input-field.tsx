import styles from '../styles/Home.module.css'

export default function KM_Input(props:any){
    return <div>
        <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>{props.name}</b></label>
        <input type={props.type} placeholder={props.name} className={styles.myInput} />
    </div>
}