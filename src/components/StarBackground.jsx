import { useEffect, useState } from "react";

//steaua va avea id,size,x,y,opacity, duration
//la fel si meteorul, dar cu delay in loc de opacity
export const StarBackground = () => {   

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect (() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    } , []); //vector de dependente gol pt a rula o singura data

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth *window.innerHeight ) / 10000
        ); //daca vreau mai multe stele pun mai putin de 10k

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // generez stele intre 1 si 4px
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // opacitate intre 0.5 si 1
                animationDuration: Math.random() * 4 + 2, // animatie intre 2 si 6 secunde
            })
        } 
        setStars(newStars);
    };


   

    const generateMeteors = () => {
    const newMeteors = [];

    for (let i = 0; i < 4; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1,
            x: i < 2 
                ? Math.random() * 40
                : 50 + Math.random() * 40,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
        });
    }

    setMeteors(newMeteors);
};






    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">  
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px" ,
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity ,
                animationDuration: star.animationDuration + "s",
            }}  />
        ))}
        
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size *5 + "px",
                height: meteor.size *3+ "px" ,
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay ,
                animationDuration: meteor.animationDuration + "s",
            }}  />
        ))}
     </div>
     );
}; //daca scot de mai sus multiplierile din size, meteoritii vor fi la fel de mari ca stelele si arata de parca cad stelele