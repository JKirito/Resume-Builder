import React, { useEffect } from 'react';
import ResumeEditor from '../ResumeEditor/ResumeEditor'
import "./fontAwesome"
import classes from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const HomePage = () => {
    global.html2canvas = html2canvas;
    // console.log(global);

    const exportResume = () => {
        html2canvas(document.querySelector('#maincontainer')).then((canvas) => {
            var myImage = canvas.toDataURL('image/jpeg,1.0');
            var pdf = new jsPDF('p', 'mm', 'a4');
            var width = pdf.internal.pageSize.getWidth();
            // var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(myImage, 'png', 0, 0, width, 0); // 2: 19
            // pdf.addImage(myImage, 'png', 15, 2, imgWidth, imgHeight); // 2: 19
            pdf.save('Resume.pdf');
            // document.body.appendChild(canvas);
        });
    }

    // useEffect(() => {
    //   html2canvas(document.querySelector('#maincontainer')).then((canvas) => {
    //     var myImage = canvas.toDataURL('image/jpeg,1.0');
    //     var pdf = new jsPDF('p', 'mm', 'a4');
    //     var width = pdf.internal.pageSize.getWidth();
    //     // var height = pdf.internal.pageSize.getHeight();
    //     pdf.addImage(myImage, 'png', 0, 0, width, 0); // 2: 19
    //     // pdf.addImage(myImage, 'png', 15, 2, imgWidth, imgHeight); // 2: 19
    //     pdf.save('output.pdf');
    //     document.body.appendChild(canvas);
    //   });
    // }, []);

    return (
        <div>
            <ResumeEditor />
            <button className={classes.expbtn} onClick={exportResume}>
                <FontAwesomeIcon icon='cloud-download-alt' />
            </button>
        </div>
    );
}

export default HomePage;