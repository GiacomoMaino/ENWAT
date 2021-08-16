import {auth} from '../helpers/firebase'


export default () => auth.currentUser != null;
