import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Span from './Span';
import App4Test from "../Test/App4Test";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Span",
} as ComponentMeta<typeof Span>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof App4Test> = (args) => <App4Test><Span {...args} /></App4Test>;
const Template: ComponentStory<typeof Span> = (args) => <App4Test><Span {...args} /><>abc</></App4Test>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    type: "",
    className: "",
    style: {}
}   

Default.argTypes = {
    type: {
        type: {name: 'string', required: false},
        defaultValue: 'primary',
        description: 'danger | link | primary | secondary | success'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}