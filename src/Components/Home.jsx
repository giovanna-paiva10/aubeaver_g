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

        <h3 className={styles.estiloh3}>QUEM SOMOS</h3>

    <div>
            <div> 
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam libero eu nunc tristique, ut vehicula lectus suscipit. Vivamus lacinia, orci et ullamcorper dignissim, arcu neque viverra erat, ut blandit nisl quam non orci. Proin finibus nibh eros. Pellentesque egestas nunc laoreet, hendrerit arcu eu, iaculis est. Fusce condimentum lectus id metus dignissim, et tristique nisi feugiat. Curabitur sollicitudin interdum ex, eget laoreet tortor sagittis nec.</h5>
        </div>
        <div> <img className={styles.imgg} src={garf} alt="garfield" /> 
        </div>
    </div>

        
</body>
        </>
    )
};

export default Home;