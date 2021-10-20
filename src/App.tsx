import React, { FC, useState } from 'react';
import RenderItems from "./renderItems"
import './App.css';

const initialState = {
  name: "",
  id: 0
}
type InitialState = {
  name: string,
  id: number
}
const App: FC = (): JSX.Element => {
  const [namestate, setnamestate] = useState(initialState)
  const [finalNamestate, setfinalNamestate] = useState<InitialState[]>([])
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    let finalobj = {
      name: value,
      id: Math.random()
    }
    setnamestate(finalobj)
  }
  const handleSubmit = () => {
    const finaltodo = [...finalNamestate, namestate]
    setfinalNamestate(finaltodo)
    setnamestate({ name: "", id: 0 })
  }
  const editfn = (value: number) => {
    if (value) {
      const finaltodo = finalNamestate.filter((item) => item.id === value)
      const deletefinallist = finalNamestate.filter((item) => item.id !== value)
      setnamestate(finaltodo[0])
      setfinalNamestate(deletefinallist)
    }
  }
  const deletefn = (value: number) => {
    const deletefinallist = finalNamestate.filter((item) => item.id !== value)
    setfinalNamestate(deletefinallist)
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} value={namestate.name}></input>
      <button type="submit" onClick={handleSubmit}>submit</button>
      {
        finalNamestate?.map((item: InitialState, key: number) => {
          return (<div key={key}>
            <RenderItems item={item}
              editfn={(v: number) => { editfn(v) }}
              deletefn={(v: number) => { deletefn(v) }} />
          </div>)
        })
      }
    </div>
  );
}

export default App;
