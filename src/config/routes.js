import { routes } from "../constants/routes";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Flights from "../pages/flights/Flights";
import Stays from "../pages/stays/Stays";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import StaysSearch from "../pages/staysSearch/StaysSearched";
import StaysDetails from "../pages/staysDetails/StaysDetails";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.services,
    Component: Services,
  },
  {
    path: routes.flights,
    Component: Flights,
  },
  {
    path: routes.stays,
    Component: Stays,
  },
  {
    path: routes.signIn,
    Component: SignIn,
  },
  {
    path: routes.signUp,
    Component: SignUp,
  },
  {
    path: routes.staysSearch,
    Component: StaysSearch,
  },
  {
    path: routes.staysDetails,
    Component: StaysDetails,
  },
];
