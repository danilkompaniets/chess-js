import {Figure} from "../models/figures/Figure.ts";
import {FC} from "react";

interface LostFigureProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFigureProps> = ({title, figures}) => {
    return (
        <div className={"lost"}>
            <h3>
                {title}
            </h3>
            <div style={{display: "flex"}}>
                {figures.map((figure) => (
                    <div key={figure.id}>
                        {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LostFigures;