import React from "react";
import { render } from "@testing-library/react"

import App4Test from "../Test/App4Test";
import Radio from "./Radio";

const compName = "Radio";

describe(compName, () => {
    test(`Renders the ${compName} component`, () => {
        render(<App4Test>
            <Radio 
                className= ''
                selectedValue= ''
                size= '15px'
                text= 'Apple'
                value= 'apple'
                type='primary'
                onChange={(value) => console.log(value)}
            />
        </App4Test>);
    })
})