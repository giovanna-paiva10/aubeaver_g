import React from 'react';
import styles from './Home.module.css';
import garf from '..//assets/garfield.png';
import banner from '../assets/bannerjin.png';
import fotoo from '../assets/fotoo.png';
import aguag from '..//assets/garrafasAgua.svg';
import receb from '..//assets/doacaoRecebendo.svg';
import maos from '..//assets/maosDadas.svg';
import caixas from '..//assets/caixasMulher.svg';


const Home = () =>{
    

    return (
        <>
<body id={styles.borda}>
    
        <div>carrossel</div>

<p></p>

        <h3 className={styles.estiloh3}>O QUE DOAR</h3>
        <h4 className={styles.estiloh4}>Escolha o item com qual você deseja ajudar ou receber ajuda</h4>
        

    <div className={styles.container}>

                <div className={styles.content}>

                <div className={styles.content1}>
                    <div> <img className={styles.imgg} src={garf} alt="garfield" /> 
                    <div> 
                    <h3 className={styles.contenttitle}>Doação de alimentos</h3>
                    <h4 className={styles.contenttext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel interdum sit amet, porta vel nibh. </h4>
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

        <p className={styles.espaco}></p>

        <h3 className={styles.estiloh3}>QUEM SOMOS</h3>
        <img className={styles.banner} src={banner} alt="bannerjin" />

            <p className={styles.espaco}></p>

    <div className={styles.container}>

        <div className={styles.contentt}>
            <div className={styles.qualquer}>
                <h4 className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel malesuada tellus. Mauris ornare maximus libero, ut tempor odio tempus eu. Nam sed risus rhoncus, hendrerit ex nec, mattis ante. Morbi accumsan ac risus a scelerisque. Maecenas quis ligula vel diam finibus cursus nec eu elit. Donec ex tellus, facilisis vitae mi eget, malesuada malesuada diam. Praesent porttitor risus convallis tellus efficitur euismod. Vestibulum iaculis orci eget odio pharetra, id dignissim dui pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla metus urna, venenatis sit amet nulla eu, mattis mollis ligula.

                Curabitur viverra justo a augue commodo volutpat. Curabitur id leo tortor. Donec vel pharetra purus. Maecenas et varius ipsum. Etiam aliquet neque nisl, ornare pellentesque lacus tristique at. Donec dictum mollis ante, a vestibulum arcu pellentesque sit amet. Nulla tempus tellus ac mi pellentesque, rhoncus dignissim elit tincidunt.</h4>
            <div> 
                <img className={styles.imggg} src={fotoo} alt="foto" />
            </div>
            </div>
        </div>

    </div>
    
</body>
        </>
    )
};

export default Home;