import React from 'react';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  const download = (reid,downloadfilename)=>{
    console.log("clicked")
    // const input = document.getElementById(reid)
    // html2canvas(input).then((canvas)=>{
    //   const imgData = canvas.toDataURL("image/png")
    //   const pdf = new jsPDF("p","pt","a4")
    //   pdf.addImage(imgData,"JPEG",0,0)
    //   pdf.save(`${downloadfilename}`)

    // })

  }

  return (
    <button
      type="button"
      onClick={download("report","report")}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;