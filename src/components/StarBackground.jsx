import { useEffect, useState } from "react";

//steaua va avea id,size,x,y,opacity, duration

export const StarBackground = () => {   

    const [stars, setStars] = useState([]);
    useEffect (() => {
        generateStars();
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
     </div>
     );
};