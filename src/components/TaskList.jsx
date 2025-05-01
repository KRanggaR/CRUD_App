import React, { useReducer} from 'react'
import { taskReducer, initialState } from './reducer/taskReducer';

export default function TaskList() {
    const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <>
      
    </>
  )
}
