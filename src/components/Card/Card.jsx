import React from 'react';
import './Card.css';
import nopr from '../../icons_FEtask/No-priority.svg';
import lowpr from '../../icons_FEtask/Img - Low Priority.svg';
import medpr from '../../icons_FEtask/Img - Medium Priority.svg';
import highpr from '../../icons_FEtask/Img - High Priority.svg';
import urgentpr from '../../icons_FEtask/SVG - Urgent Priority grey.svg';
import In_Progress from '../../icons_FEtask/in-progress.svg';
import To_Do from '../../icons_FEtask/To-do.svg';
import Backlog from '../../icons_FEtask/Backlog.svg';
import im1 from "../../icons_FEtask/usr-1.jpg";
import im2 from "../../icons_FEtask/usr-2.jpg";
import im3 from "../../icons_FEtask/usr-3.jpg";
import im4 from "../../icons_FEtask/usr-4.jpg";
import im5 from "../../icons_FEtask/usr-5.jpg";

const Card = ({ id, title, tag, status, task, priority, uid }) => {
    const group = localStorage.getItem("group");

    const imagemap = {
        0: nopr,
        1: lowpr,
        2: medpr,
        3: highpr,
        4: urgentpr,
    };

    const taskmap = {
        "In progress": In_Progress,
        "Todo": To_Do,
        "Backlog": Backlog
    };

    const immap = {
        "usr-1": im1,
        "usr-2": im2,
        "usr-3": im3,
        "usr-4": im4,
        "usr-5": im5,
    };

    const statusavailability = {
        "usr-1": false,
        "usr-2": true,
        "usr-3": true,
        "usr-4": true,
        "usr-5": true,
    };

    return (
        <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
            <div className="cardHeading flex-sb">
                <span style={{ textTransform: "uppercase" }} className='color-grey'>{id}</span>
                <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>

                    {group !== "user" && (
                        <>
                        <img
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                            src={immap[uid]}
                            alt="UserImage"
                            id='user'
                        />
                        <div className={statusavailability[uid]? "showStatustrue" : "showStatusfalse"}></div>
                        </>
                    )}
                    
                </div>
            </div>
            <div className="cardTitle" style={{ fontWeight: 200 }}>
                <p>
                    {group !== "status" && (
                        <img src={taskmap[task]} id='status' />
                    )}
                    {" "}{title}
                </p>
            </div>
            <div className="cardTags">
                {group !== "priority" && (
                    <div className="tags color-grey">
                        <img src={imagemap[priority]} alt='priority' id='priority' />
                    </div>
                )}
                {
                    tag?.map((elem, index) => {
                        return <div key={index} className="tags color-grey"><span>•</span> {elem}</div>
                    })
                }
            </div>
        </div>
    );
};

export default Card;
