import React from "react";

import { Avatar } from "@mantine/core";

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
         <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  src={`Icons/${skill}.png`} />
         <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm ">{skill}</div>
    </div>)
}

function SkillCard(props: any) {
  return (
    <div className="w-[48%] mr-5  border-2 border-primaryColor rounded-2xl p-2 mt-5">
      <div className="text-3xl !font-mono text-white text-center font-bold">{props.title}</div>
      <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap mt-5">
            {SkillBadge(props.skills)}
        </div>
    </div>
  );
}

export default SkillCard;
