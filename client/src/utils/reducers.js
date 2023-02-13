import {
  CREATE_TIMEBLOCK,
  ADD_JOURNAL_TO_DAY,
  ADD_NOTES_TO_TIMEBLOCK,
  CREATE_DAY,
  DELETE_TIMEBLOCK,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case CREATE_DAY:
      return {
        ...state,
        days: [...state.days, action.day],
      };

    case CREATE_TIMEBLOCK:
      return {
        ...state,
        days: [...state.days, action.day],
      };

    case ADD_TIMEBLOCK_TO_DAY:
      return {

      };
    case ADD_JOURNAL_TO_DAY:
      return {
        ...state,
        days: state.days.map((day) => {
          if (day._id === action.belongsTo) {
            return {
              ...day,
              journals: [...day.journals, action.journal],
            };
          }
          return day;
        }),
      };

    case ADD_NOTES_TO_TIMEBLOCK:
      return {
        ...state,
        days: state.days.map((day) => {
          return {
            ...day,
            timeblocks: day.timeblocks.map((timeblock) => {
              if (timeblock._id === action.belongsTo) {
                return {
                  ...timeblock,
                  notes: [...timeblock.notes, action.note],
                };
              }
              return timeblock;
            }),
          };
        }),
      };

    case DELETE_TIMEBLOCK:
      return {};
  }
};

export function useTimeblockReducer(initialState) {
  return useReducer(reducer, initialState);
}

// case CREATE_TIMEBLOCK:
//   return {
//     ...state,
//     days: state.days.map((day) => {
//       if (day._id === action.belongsTo) {
//         return {
//           ...day,
//           timeblocks: [...day.timeblocks, action.timeblock],
//         };
//       }
//       return day;
//     }),
//   };
// case ADD_JOURNAL_TO_DAY:
//   return {
//     ...state,
//     days: state.days.map((day) => {
//       if (day._id === action.belongsTo) {
//         return {
//           ...day,
//           journals: [...day.journals, action.journal],
//         };
//       }
//       return day;
//     }),
//   };

// case ADD_NOTES_TO_TIMEBLOCK:
//   return {
//     ...state,
//     days: state.days.map((day) => {
//       return {
//         ...day,
//         timeblocks: day.timeblocks.map((timeblock) => {
//           if (timeblock._id === action.belongsTo) {
//             return {
//               ...timeblock,
//               notes: [...timeblock.notes, action.note],
//             };
//           }
//           return timeblock;
//         }),
//       };
//     }),
//   };

// case CREATE_DAY:
//   return {
//     ...state,
//     days: [...state.days, action.day],
//   };

// case DELETE_TIMEBLOCK:
//   return {
//     ...state,
//     timeblocks: state.timeblocks.filter(
//       (timeblock) => timeblock.id !== action.payload
//     ),
//   };
