import GalleryCustom from "../molecules/GalleryCustom"



const CustomMain = () => {
    return (
        <>
            <p className="text-light mx-4"> Beyblade</p>
            <GalleryCustom url="http://www.omdbapi.com/?apikey=43773439&s=Beyblade"/>
            <br/>
            <p className="text-light mx-4"> Death Note </p>
            <GalleryCustom url="http://www.omdbapi.com/?apikey=43773439&s=Death%20Note"/>
            <br/>
            <p className="text-light mx-4"> Yu-Gi Oh </p>
            <GalleryCustom url="http://www.omdbapi.com/?apikey=43773439&s=Yu-Gi-Oh!"/>
        
        </>
    )
}

export default CustomMain;