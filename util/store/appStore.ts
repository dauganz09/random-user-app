import create,{SetState,GetState} from 'zustand';
import axios from '../axios';


interface UserStore {
    users : Array<any>,
    loading : boolean,
    fetchUsers : () => void,
    getUser : (id:any) => any,
    
    
} 

const useStore = create((set : SetState<UserStore>,get : GetState<UserStore>) => ({
    users: [],
    loading : false,
    fetchUsers : async () => {
        try {
            set({loading:true});
            const res = await axios('/?results=10');
            set({users: res.data.results,loading:false});
            
    
        }catch (err){
            console.log(err);
        }
       
    },

    getUser : async (id:any) => {
        return await get().users[id];
    }

}));




export default useStore;