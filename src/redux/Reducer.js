import { CLEAR_ID, GET_ID, GET_PIC } from "./Type"


const initial={
    istate:"",
    email:"",
    pic:"https://www.lightsong.net/wp-content/uploads/2020/12/blank-profile-circle.png"
}

const Reducer=(state=initial,action)=>{

    switch(action.type){
        case GET_ID:{
            return{
                ...state,istate:action.info,email:action.email

            }
        }
        case CLEAR_ID:{
            return{
                ...state,
                istate:action.payload
            }
        }
        case GET_PIC:{
            return{
                ...state,pic:action.uri
            }
        }

        default:return state
    }
}

export default Reducer