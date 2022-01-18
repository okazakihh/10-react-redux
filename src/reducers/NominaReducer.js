import { types } from "../types/Types";


const initialState = {
    data: [],
};
export const NominaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      
      case types.nominaRead:
        return {
          ...state,
          data: action.payload,
        };

        /*case types.nominaSearch:
          return {
            ...state,
            data: state.data.filter((nomina) => {
              console.log(nomina)
              return nomina.Documento !== action.payload;
            }),
          };*/

        case types.nominaDelete:
      return {
        ...state,
        data: state.data.filter((nomina) => {
          return nomina.id !== action.payload;
        }),
      };


      case types.nominaClean:
      return {
        ...state,
        data: [],
      };
        
        default:
          return state;
      }
};
