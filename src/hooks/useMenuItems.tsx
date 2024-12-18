import { LuLayoutDashboard } from "react-icons/lu";
import {
  HiOutlineUserGroup,
  HiOutlineClipboardList,
  HiOutlinePencilAlt,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

const useMenuItems = () => {
  return [
    {
      data: [
        {
          title: "Dashboard",
          icon: <LuLayoutDashboard />,
          route: "/dashboard",
        },
        {
          title: "My Exams",
          icon: <HiOutlineClipboardList />,
        //   route: "/your-exams",
          submenu: [
            { 
                title: "Current Exam", 
                route: "/current-exam", 
                // icon: <GoDotFill /> 
            },
            { 
                title: "Completed Exams", 
                route: "/completed-exam", 
                // icon: <GoDotFill /> 
              },
            { title: "Exam Assistance Request", route: "/exam-help", 
              // icon: <GoDotFill /> 

            },
          ],
        },
        {
          title: "Practise Exams",
          icon: <HiOutlinePencilAlt />,
        //   route: "/practise-exams",
          submenu: [
            { title: "New", route: "/practise-new-exam", 
              // icon: <GoDotFill /> 
            },
            { title: "Completed", route: "/practise-completed-exams", 
              // icon: <GoDotFill /> 
            },
            { title: "Exam Assistance Request", route: "/practise-exam-help", 
              // icon: <GoDotFill /> 
            },
          ],
        },
        {
          title: "Statistics",
          icon: <HiOutlineChartBar />,
          route: "/statistics",
        },
        {
          title: "View Test Scores",
          icon: <HiOutlineDocumentText />,
        //   route: "/view-test-scores",
          submenu: [
            { title: "Highest Score", route: "/highest-score", 
              // icon: <GoDotFill /> 
            },
            { title: "Summary of Last Three Scores", route: "/summary",
              //  icon: <GoDotFill />
               },
            { title: "View All Scores", route: "/score",
              //  icon: <GoDotFill />
               },
          ],
        },
        {
          title: "Help / Support",
          icon: <HiOutlineQuestionMarkCircle />,
          route: "/support",
        },
      ],
    },
  ];
};

export default useMenuItems;
