import projectData from "./project-data";

/* eslint-disable import/no-unresolved */
import popWav from "!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav";
import meowWav from "!arraybuffer-loader!./cf51a0c4088942d95bcc20af13202710.wav";
import backdrop from "!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg";
import costume1 from "!raw-loader!./7499cf6ec438d0c7af6f896bc6adc294.svg";
//kani
import board from '!raw-loader!./3eb0cf9328f7ae8f65aba0892806a3ba.svg';
/* eslint-enable import/no-unresolved */

const defaultProject = (translator) => {
    let _TextEncoder;
    if (typeof TextEncoder === "undefined") {
        _TextEncoder = require("text-encoding").TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [
        {
            id: 0,
            assetType: "Project",
            dataFormat: "JSON",
            data: JSON.stringify(projectJson),
        },
	{
	    id: '3eb0cf9328f7ae8f65aba0892806a3ba',
	    assetType: 'ImageVector',
	    dataFormat: 'SVG',
	    data: encoder.encode(board),
	}, 
        {
            id: "cd21514d0531fdffb22204e0ec5ed84a",
            assetType: "ImageVector",
            dataFormat: "SVG",
            data: encoder.encode(backdrop),
        },
    ];
};

export default defaultProject;
