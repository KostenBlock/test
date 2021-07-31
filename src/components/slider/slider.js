import React, {useState, useEffect, useRef} from "react";
import classes from "./slider.module.css";
import dummyData from "../data/data";
import vector_arrow from "./vector-arrow.png";
import vector_line from "./vector-line.png";

const Slider = () => {
    const [slide, setSlide] = useState(1);
    const [itemsPerSlide] =  useState(4);
    const [index, setIndex] = useState(1);

    const savedCallback = useRef();

    function callback() {
        setIndex(index + 1);
        setSlide(index % (Math.ceil(dummyData.length / itemsPerSlide)) + 1);
    }

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, 4000);
        return () => clearInterval(id);
    }, []);

    const indexOfLastItem = slide * itemsPerSlide;
    const indexOfFirstItem = indexOfLastItem - itemsPerSlide;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    const lastPosition = Math.ceil(dummyData.length / itemsPerSlide);

    const next = () => {
        slide === lastPosition ? setSlide(1) : setSlide(slide + 1);
    }

    const prev = () => {
        slide === 1 ? setSlide(lastPosition) : setSlide(slide - 1);
    }

    const clsActive = [
      classes.line_indicator,
      classes.line_indicator_active
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h1>Актуальное</h1>
                <div className={classes.line_container}>
                    <img className={slide === 1 ? clsActive.join(" ") : classes.line_indicator} src={vector_line} alt=""/>
                    <img className={slide === 2 ? clsActive.join(" ") : classes.line_indicator} src={vector_line} alt=""/>
                    <img className={slide === 3 ? clsActive.join(" ") : classes.line_indicator} src={vector_line} alt=""/>
                </div>
               <div className={classes.arrow_container}>
                   <div onClick={next} className={classes.arrow_background}>
                       <img className={classes.arrow} src={vector_arrow} alt=""/>
                   </div>
                   <div onClick={prev} className={classes.arrow_background} style={{marginRight: "40px"}}>
                       <img className={classes.arrowPrev} src={vector_arrow} alt=""/>
                   </div>
               </div>
            </div>
            <section className={classes.container}>
                {currentItems.map((dData) => {
                    return (
                        <div key={dData.id} className={classes.card}>
                            <div className={classes.card_image}>
                                <img src={dData.img} alt={dData.title}/>
                            </div>
                            <span>{dData.date}</span>
                            <h2 className={classes.title_h2}>{dData.title}</h2>
                            <p>{dData.text}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
};

export default Slider;