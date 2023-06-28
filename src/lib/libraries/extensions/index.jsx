import React from "react";
import { FormattedMessage } from "react-intl";

import sampleIconURL from './sample/sample.png';
import sampleInsetIconURL from './sample/sample-small.png';

const extensions = [
    {
        name: (
            <FormattedMessage
                defaultMessage="Sample"
                description="Name for the 'sample' extension"
                id="gui.extension.sample.name"
            />
        ),
        extensionId: "sample",
        iconURL: sampleIconURL,
        insetIconURL: sampleInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sample blocks"
                description="Sample blocks for SmT"
                id="gui.extension.sample.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Sample2"
                description="Name for the 'sample2' extension"
                id="gui.extension.sample2.name"
            />
        ),
        extensionId: "sample2",
        iconURL: sampleIconURL,
        insetIconURL: sampleInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sample2 blocks"
                description="Sample2 blocks for SmT"
                id="gui.extension.sample2.description"
            />
        ),
        featured: true,
    }    
];

// Injected for extra extensions
/*
import microbitMore from "./microbitMore/entry.jsx";
extensions.push(microbitMore);
*/

export default extensions;
