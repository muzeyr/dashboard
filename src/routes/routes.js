import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Siparis from "@/pages/Siparis.vue";
import Ogrenci from "@/pages/Ogrenci.vue";
import OgrenciForm from "@/pages/OgrenciForm.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        icon:'dashboard',
        active:true,
        component: Dashboard
      },
      {
        path: "siparis",
        name: "Sipariş Al",
        icon:'person',
        active:true,
        component: Siparis
      },
      {
        path: "ogrenci",
        name: "ogrenci",
        icon:'person',
        active:true,
        component: Ogrenci
      },
      {
        path: "ogrenci/:id",
        name: "ogrencip",
        icon:'person',
        active:true,
        component: OgrenciForm
      },
      {
        path: "user",
        name: "User Profile",
        icon:'person',
        active:false,
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        icon:'person',
        active:false,
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        active:false,
        icon:'person',
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        icon:'person',
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        icon:'person',
        active:false,
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        icon:'person',
        active:false,
        component: Notifications
      }
    ]
  }
];

export default routes;
