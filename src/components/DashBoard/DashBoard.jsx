import React from "react";
import { useSelector } from "react-redux";
import add from '../../icons_FEtask/add.svg'
import In_Progress from '../../icons_FEtask/in-progress.svg';
import To_Do from '../../icons_FEtask/To-do.svg';
import Backlog from '../../icons_FEtask/Backlog.svg';
import "./DashBoard.css";
import Card from "../Card/Card";
import threedotmenu from "../../icons_FEtask/3 dot menu.svg";
import nopr from '../../icons_FEtask/No-priority.svg';
import lowpr from '../../icons_FEtask/Img - Low Priority.svg';
import medpr from '../../icons_FEtask/Img - Medium Priority.svg';
import highpr from '../../icons_FEtask/Img - High Priority.svg';
import urgentpr from '../../icons_FEtask/SVG - Urgent Priority colour.svg';
import im1 from "../../icons_FEtask/usr-1.jpg";
import im2 from "../../icons_FEtask/usr-2.jpg";
import im3 from "../../icons_FEtask/usr-3.jpg";
import im4 from "../../icons_FEtask/usr-4.jpg";
import im5 from "../../icons_FEtask/usr-5.jpg";


const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  console.log("Data", selectedData);
  console.log("user", user);

  const imagemap = {
    0 : nopr,
    1 : lowpr,
    2 : medpr,
    3 : highpr,
    4 : urgentpr
}

const immap = {
  "Anoop sharma": im1,
  "Yogesh": im2,
  "Shankar Kumar": im3,
  "Ramesh": im4,
  "Suresh": im5,
};



  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          const name = elem[index]?.title;
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <img 
                      src={
                        elem[index]?.title === "In progress" ? In_Progress :
                        elem[index]?.title === "Todo" ? To_Do :
                        elem[index]?.title === "Backlog" ? Backlog :
                        imagemap[index] // Fallback image if no match
                      } 
                      alt={elem[index]?.title} 
                      style={{marginRight:"10px"}}
                    />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              marginRight:"10px"
                            }}
                            src={immap[name]}
                            alt="image"
                            
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}{elem[index]?.title}  {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <img src={add}/>{" "}
                    <span style={{ letterSpacing: "2px" }}>
                      <img src={threedotmenu} alt="3dotmenu" />{" "}
                    </span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((item, ind) => {
                    return (
                      <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        tag={item.tag}
                        status={elem[index]?.available} 
                        task = {item.status}
                        priority = {item.priority}
                        uid = {item.userId}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
