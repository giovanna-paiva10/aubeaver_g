import React from 'react';
import styles from './Home.module.css';
import garf from '..//assets/garfield.png';

const Home = () =>{
    

    return (
        <>
<body id={styles.borda}>
    
        <div>carrossel</div>

<p></p>

        <h3 className={styles.estiloh3}>O QUE DOAR</h3>
        <h4 className={styles.estiloh4}>Escolha o item com qual você deseja ajudar ou receber ajuda</h4>
        <p></p>

        <div className={styles.container}>

        <div className={styles.content}>

        <div className={styles.content1}>
            <div> <img className={styles.imgg} src={garf} alt="garfield" /> 
            <div> 
            <h4>Doação de alimentos</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel interdum sit amet, porta vel nibh. </h5>
        </div></div></div>

        <div className={styles.content1}>
            <div> <img className={styles.imgg} src={garf} alt="garfield" /> 
            <div> 
            <h4>Doação de alimentos</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel </h5>
        </div></div></div>

        <div className={styles.content1}>
            <div> <img className={styles.imgg}src={garf} alt="garfield" /> 
            <div> 
            <h4>Doação de alimentos</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel interdum sit amet, porta vel nibh. </h5>
        </div></div></div>

        <div className={styles.content1}>
            <div> <img className={styles.imgg} src={garf} alt="garfield" /> 
            <div> 
            <h4>Doação de alimentos</h4>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel interdum sit amet, porta vel nibh. </h5>
        </div></div></div>


 </div>
        </div>
        
</body>
        </>
    )
};

export default Home;