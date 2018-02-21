# Overview

Here at ShootProof, we prefer to have a good idea of a candidate's technical
experience before proceeding with our in-office interview portion of the
process.  We believe that the technical exercise below will illustrate a
candidate's approach to building reusable components using JavaScript and CSS.

# Guidelines

Goal: Create a navigable tree component using our provided set of test data.

The test data is a flat structure with parent ID pointers. You may choose to use
the data structure as-is, or have a function transform the data structure into
some other structure, but treat the test data as a given.

- This exercise should not take you more than three hours to complete
- Feel free to make this component as cool/interesting as you'd like, as long
  as it meets the technical requirements
- You may use a JavaScript framework of your choice, or no framework &mdash;
  the choice is up to you
- However, you must not rely on a module or library that already provides a
  similar tree component
- Your solution should be coded with reusability in mind
- Submit a working set of code (ZIP, tarball, or link to JSFiddle, Plunker,
  GitHub pull request, etc.)
  - A working, compiled set of code in a single directory that can be opened in a browser
  - All source code

# Technical Requirements

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
copy it into your code directly, or use HTTP to get the content of that data
directly from GitHub if you prefer.
