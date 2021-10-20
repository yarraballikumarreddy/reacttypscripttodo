import React, { FC } from 'react'
import "./RenderItems.css"
type InitialState = {
    name: string,
    id: number
}
type propsdata = {
    item: InitialState,
    editfn: (value: number) => void,
    deletefn: (value: number) => void
}

const RenderItems: FC<propsdata> = (props): JSX.Element => {
    const { item, deletefn, editfn } = props
    const { name, id } = item
    return (
        <div className="item-container">
            <ul>
                <li>
                    <div>
                        {name && <span>
                            <span> {name}</span>
                            <button onClick={() => { editfn(id) }}>edit</button>
                            <button onClick={() => { deletefn(id) }}>delete</button>
                        </span>
                        }

                    </div>
                </li>
            </ul>
        </div>
    )
}
export default RenderItems
