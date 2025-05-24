import Link from 'next/link'
import styles from './second.module.scss'
const SecondComp = () => {
    return (
        <>
            <div className={styles.wrapper}>SecondComp</div>
            <Link href={'/signup'}>signup</Link>
        </>
    )
}

export default SecondComp