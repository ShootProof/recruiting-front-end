# Setup

Run `npm start` to launch a browser with this code. 

# Overview

Here at ShootProof, we prefer to have a good idea of a candidate's technical
knowledge and experience before proceeding with our in-office interview portion
of the process.  We believe that the technical exercise below will illustrate a
candidate's approach to building reusable components using JavaScript and CSS.
# Guidelines

Goal: Create a navigable tree component using our provided set of test data.

The test data is a flat structure with parent ID pointers. You may choose to use
the data structure as-is, or have a function transform the data structure into
some other structure, but treat the test data as a given.

- This exercise should take you a few hours to complete, but you are encouraged to take as much time as you feel is necessary.
- Feel free to make this component as cool/interesting as you'd like as long as it meets the functional requirements. This is your opportunity to show off your skills and knowledge.
- We'd prefer to see usage of a modern component-based JavaScript framework of your choice (React, Vue, Angular, etc.), but we will consider vanilla submissions as well
- You should utilize ES6+ syntax (or Typescript) targeting modern browsers
- You should avoid using any runtime dependencies which provide a similar tree-like structure
- Keep in mind that this submission should reflect what your code would look like in a production-like environment.
- We'd prefer you to submit the exercise as a pull request to this repository, but will also accept a .ZIP archive or link to an online code editor (JSFiddle, etc.)
  - A working, compiled set of code in a single directory that can be opened in a browser
  - Instructions for running any build or test steps along with any any clarification or justification you'd like to provide
  - All source code

# Functional Requirements

- A complete submission will:
  - Only show the expander UI element for nodes that contain children
  - Only turn the cursor into a pointer for nodes with children
  - Click a node to expand it
  - Use of a webfont (any font of your choice)
  - Text and icons should be vertically centered within each tree node
  - Images should have data-driven alt text shown on hover

The end result should look something similar to what's shown below:

![Working Example of Tree Component](/example.gif)

# Test Data

You will find the test data in this repository under `testdata.json`. You can
copy it into your code directly, or request the content of the test data
directly from GitHub if you prefer.
