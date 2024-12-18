// it full slide from right
import { Options } from "@material-table/core";
import { Dispatch, SetStateAction } from "react";

export const rightAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "100%", // Slide in from the right
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};

export const MuiTblOptions = (exportName: string) => {
  const options: Options<any> = {
    actionsColumnIndex: -1,
    pageSize: 10,
    addRowPosition: 'first',
    detailPanelColumnAlignment: 'right',
    exportAllData: false,
    exportMenu: [
      // {
      //   label: 'Export All Data In CSV',
      //   exportFunc: (cols: any, data: any) =>
      //     ExportCsv(cols, data, exportName || 'All Data'),
      // },
      // {
      //   label: 'Export All Data In PDF',
      //   exportFunc: (cols: any, data: any) =>
      //     ExportPdf(cols, data, exportName || 'AllData'),
      // },
    ],
  }
  return options
}

export type Support = {
  id: string
  displayName: string
  email: string
  subject: string
  message: string
  timestamp: string
}

export const leftAsideVariants = {
  hidden: {
    opacity: 0,
    translateX: "-100%", // Slide in from the left
  },
  visible: {
    opacity: 1.5,
    translateX: "0%", // Slide to the center
    transition: {
      duration: 0.8, // Animation duration
      // ease: "easeInOut", // Easing function
    },
  },
};


export const toggleFullScreen = (
  isFullScreen: boolean,
  setIsFullScreen: Dispatch<SetStateAction<boolean>>
) => {
  const element = document.documentElement as any;
  const newDoc = document as any;
  if (!isFullScreen) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  } else {
    if (newDoc.exitFullscreen) newDoc.exitFullscreen();
    else if (newDoc.mozCancelFullScreen) newDoc.mozCancelFullScreen();
    else if (newDoc.webkitExitFullscreen) newDoc.webkitExitFullscreen();
    else if (newDoc.msExitFullscreen) newDoc.msExitFullscreen();
  }
  setIsFullScreen(!isFullScreen);
};

//? SET To LocalStorage
export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

//? GET From LocalStorage
export const getFromLocalStorage = (key: string) => {
  return typeof window !== "undefined"
    ? localStorage.getItem(key) ?? null
    : null;
};

//? Remove from LocalStorage
export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
