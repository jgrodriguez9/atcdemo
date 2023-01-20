import { Redirect } from "react-router-dom"
import Alumnos from "../pages/Alumnos"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Cobranza from "../pages/Cobranza"
import Dashboard from "../pages/Dashboard"
import Documento from "../pages/Documento"

const authProtectedRoutes = [
    { path: "/logout", component: Logout },
    { path: "/dashboard", component: Dashboard },
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },

    // //documents
    // { path: "/case-list", exact: true, component: DocumentList },
    // { path: "/case-add", exact: true, component: DocumentAdd },
    // { path: "/case-edit/:id", exact: true, component: DocumentEdit },

    // //satges
    // { path: "/stage-list", exact: true, component: StagesList },
    // { path: "/stage-add", exact: true, component: StagesAdd },
    // { path: "/stage-edit/:id", exact: true, component: StagesEdit },

    // //satges
    // { path: "/relationship-list", exact: true, component: RelationshipList },
    // { path: "/relationship-add", exact: true, component: RelationshipAdd },
    // { path: "/relationship-edit/:id", exact: true, component: RelationshipEdit },

    // //header report
    // { path: "/topconfiguration-list", exact: true, component: HeaderReportList },
    // { path: "/topconfiguration-add", exact: true, component: HeaderReportAdd },
    // { path: "/topconfiguration-edit/:id", exact: true, component: HeaderReportEdit },

    // //user
    // { path: "/user-list", exact: true, component: UserList },
    // { path: "/user-add", exact: true, component: UserAdd },
    // { path: "/user-edit/:id", exact: true, component: UserEdit },
]


const publicRoutes = [
    { path: "/login", component: Login },
]


const adminRoutes = [
    //user
    // { path: "/user-list", exact: true, component: UserList },
    // { path: "/user-add", exact: true, component: UserAdd },
    // { path: "/user-edit/:id", exact: true, component: UserEdit },
]
const managerRoutes = [
     //satges
    { path: "/alumnos", exact: true, component: Alumnos },
    { path: "/cobranza", exact: true, component: Cobranza },
    { path: "/documento", exact: true, component: Documento },
 
    //  //satges
    //  { path: "/relationship-list", exact: true, component: RelationshipList },
    //  { path: "/relationship-add", exact: true, component: RelationshipAdd },
    //  { path: "/relationship-edit/:id", exact: true, component: RelationshipEdit },
 
    //  //header report
    //  { path: "/topconfiguration-list", exact: true, component: HeaderReportList },
    //  { path: "/topconfiguration-add", exact: true, component: HeaderReportAdd },
    //  { path: "/topconfiguration-edit/:id", exact: true, component: HeaderReportEdit },

    //  //header report
    //  { path: "/survey-list", exact: true, component: SurveyList },
    //  { path: "/survey-add", exact: true, component: SurveyAdd },
    //  { path: "/survey-edit/:id", exact: true, component: SurveyEdit },
]
const agentRoutes = [
    //documents
    // { path: "/case-list", exact: true, component: DocumentList },
    // { path: "/case-add", exact: true, component: DocumentAdd },
    // { path: "/case-edit/:id", exact: true, component: DocumentEdit },
]

export { 
    authProtectedRoutes, 
    publicRoutes,
    adminRoutes,
    managerRoutes,
    agentRoutes
}