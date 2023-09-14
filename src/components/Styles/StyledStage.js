import styled from "styled-components"

export const StyledStage=styled.div`
    display:grid;
    grid-template-rows: repeat( 
        ${props=>props.height},
        calc(37vw/${props=>props.width})
    );
    grid-template-columns: repeat(
        ${props=>props.width*2},
        2fr
    );
    grid-gap:1px;
    border:2px solid #333;
    width:90vw;
    // overflow:hidden;
    height:85.5vh;

    @media screen and (max-width:400px){
        grid-template-rows: repeat( 
            ${props=>props.height},
            // calc(80vw/${props=>props.width})
        );
        grid-template-columns: repeat(
            ${props=>props.width},
            2fr
        );
        overflow:hidden;
    }
    @media screen and (max-width:912px){
        grid-template-rows: repeat( 
            ${props=>props.height},
            calc(80vw/${props=>props.width})
        );
        grid-template-columns: repeat(
            ${props=>props.width},
            1fr
        );
        overflow:hidden;
    }
    @media screen and (max-width:1000px){
        grid-template-rows: repeat( 
            ${props=>props.height},
            calc(30vw/${props=>props.width})
        );
        grid-template-columns: repeat(
            ${props=>props.width},
            1fr
        );
        overflow:hidden;
    }
    @media screen and (max-width:1280px){
        grid-template-rows: repeat( 
            ${props=>props.height},
            calc(60vw/${props=>props.width})
        );
        grid-template-columns: repeat(
            ${props=>props.width},
            1fr
        );
        overflow:hidden;
    }
    @media screen and (max-width:3280px){
        
        overflow:hidden;
    }

    

`