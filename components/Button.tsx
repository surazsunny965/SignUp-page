import styles from '../styles/Home.module.css'
export default function Button(props:any){
    return <>
    <button className={styles.sButton}>{props.buttonText}</button>
    </>
}