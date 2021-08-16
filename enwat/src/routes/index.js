import LoginComponent from "../containers/Login";
import RetrivePasswordComponent from '../containers/Login/retrivePassword'
import HomeComponent from "../containers/Contacts";
import ImageGalleryComponent from '../containers/Gallery'
import BottizionarioComponent from '../containers/Bottizionario'
import MemeComponent from '../containers/Memes';
import CitazioniComponent from '../containers/Citazioni';


const routes = [
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "E.N.W.A.T. - Login",
    needsAuth: false,
  },
  {
    path: "/auth/pirla",
    component: RetrivePasswordComponent,
    title: "E.N.W.A.T. - Pirla",
    needsAuth: false,
  },
  {
    path: "/ricordi",
    component: ImageGalleryComponent,
    title: "E.N.W.A.T. - Ricordi",
    needsAuth: true,
  },
  {
    path: "/bottizionario",
    component: BottizionarioComponent,
    title: "E.N.W.A.T. - Bottizionario",
    needsAuth: true
  },
  {
    path: "/memes",
    component: MemeComponent,
    title: "E.N.W.A.T. - Memes",
    needsAuth: true
  },
  {
    path: "/citazioni",
    component: CitazioniComponent,
    title: "E.N.W.A.T. - Citazioni",
    needsAuth: true
  },
  {
    path: "/",
    component: HomeComponent,
    title: "E.N.W.A.T. - Home",
    needsAuth: true,
  },
];

export default routes;
