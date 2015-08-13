// the main entry point for the syllabus frontend
 
'use strict'
 
import 'babel/polyfill'
import React from 'react'
// local imports
import RootComponent from 'components/rootComponent.js'
import Content from 'components/content.js'

// run the application with the appropriate routes based on the user
React.render(<RootComponent content={<Content />}/>, document.body);

// end of file