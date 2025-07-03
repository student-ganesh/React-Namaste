# React-Project

Parcel(Reason for react is fast)
-Dev Build
-Faster Build
-Error handling
-Minification of file
-code spliting
-Support order browser
-Consisting hashing
-compressing file
-Bundling

# Two Types Of Export/Import

-Default Export/Import

export default Component
import Component from "Path from where we export";

-Named Export/Import

export const component
import {"Component"} from "Path"

# HooksIn React:

State variables:
-Local State Variables
-Normal State variables
....
useState()---import {useCase} from "react" then used.
useEffect()
....

<!-- React Life Cycle  -->

1. Parent Constructor Called
2. Parent Render Called
   -If any connective there it follows same
   (Dom Manipulation Happens--In batches)

3. called ComponentDidMount

# Redux Toolkit

-Intsall @reduxjs/toolkit and react-redux libraries

-Build store
-Connect our store to app
-slice (cartSlice)
-dispatch (action)
-Selctor

# Testing (Developer)

-1.Unit Testing(Small unit of testing)
-2.Integration Testing (Multiple compon that interacting and talking to devl)
-3.End to End Testing(e2e Testing)

# Setting Setup

-Installed React Testing Library
-Installed Jest
-Installed Babel dependencies
-Configure Bebel
-Configure parcel config file to disable default babel transpilation
-Jest Configuration(new cmd for new version: npm create jest)
-Install JsDOM Library
-Install @babel/preset-react : To make JSX work in the test(npm i -D @babel/preset-react)
-Install @babel/preset-react Inside my babel.config
-Install @testing-library/jest-dom(npm i -D @testing-library/jest-dom)

