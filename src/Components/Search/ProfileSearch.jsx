import React from 'react';
import styles from './ProfileSearch.module.css';
import garf from '..//../assets/garfield.png';


const ProfileSearch = () => {


    return (
        <>
         <body id={styles.borda}>
            
        <h3 className={styles.estiloh3}>ONGs</h3>
        <h4 className={styles.estiloh4}>Encontrea ONG que você deseja</h4>

            <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.content1}>
                    <div className={styles.contentImg}>
                        <img className={styles.img} src={garf} alt="garfield" />
                    </div>
                        <div className={styles.contentText}>
                        <h3>ABEPARES</h3>
                        <p></p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel malesuada tellus. Mauris ornare maximus libero, ut tempor odio tempus eu. Nam sed risus rhoncus, hendrerit ex nec, mattis ante. Morbi accumsan ac risus a scelerisque. Maecenas </h4>
                        </div>
                </div>
            </div>

                <p></p>

                <div className={styles.content}>

                <div className={styles.content1}>
                    <div className={styles.contentImg}>
                        <img className={styles.img} src={garf} alt="garfield" />
                    </div>
                        <div className={styles.contentText}>
                        <h3>ABEPARES</h3>
                        <p></p>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel malesuada tellus. Mauris ornare maximus libero, ut tempor odio tempus eu. Nam sed risus rhoncus, hendrerit ex nec, mattis ante. Morbi accumsan ac risus a scelerisque. Maecenas quis ligula vel diam finibus cursus nec eu elit. Donec ex tellus, facilisis vitae mi eget, malesuada malesuada diam.</h4>
                        </div>
                </div>
                </div>

            </div>
         </body>
        </>
    )
} 


export default ProfileSearch;