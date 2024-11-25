import React, { useEffect  } from 'react';

const Anuncios = (props) => {


    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8536388352819663"
                data-ad-slot="5178352284"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>

    );
};

export default Anuncios;