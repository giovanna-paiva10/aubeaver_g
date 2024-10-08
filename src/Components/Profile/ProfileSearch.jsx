import React from 'react';
import styles from './ProfileSearch.module.css';
import garf from '..//../assets/garfield.png';


const ProfileSearch = () => {


    return (
        <>
         <body id={StyleSheet.borda}>
            
        <h3 className={styles.estiloh3}>O QUE DOAR</h3>
        <h4 className={styles.estiloh4}>Escolha o item com qual você deseja ajudar ou receber ajuda</h4>

            <div className={styles.container}>

            <div className={styles.content}>

            <div className={styles.content1}>
                <div className={styles.contentImg}>
                    <img className={styles.img} src={garf} alt="garfield" />
                </div>
                <div className={styles.contenttext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel malesuada tellus. Mauris ornare maximus libero, ut tempor odio tempus eu. Nam sed risus rhoncus, hendrerit ex nec, mattis ante. Morbi accumsan ac risus a scelerisque. Maecenas quis ligula vel diam finibus cursus nec eu elit. Donec ex tellus, facilisis vitae mi eget, malesuada malesuada diam.
                </div>
            </div>
            </div>

            </div>

         </body>
        </>
    )
} 


export default ProfileSearch;