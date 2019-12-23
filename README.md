##Exercise to create a tree component with arbitrary depth in React
To run locally run the following commands from the project directory:
####npm I

####npm run-script build

####npm install -g serve

####serve -s build

##Justification
I wanted to abstract the call to retrieve the data so that if this component were to be used in production, we are not limited to reading from a file. I did this by creating a data service that is instantiated in the parent tree component. getData() is called on this class which returns a NodeTreeModel object. The assumption here being that whatever implementation is used, the service will have a getData() function that returns a NodeTreeModel. Using typings from Typescript, as long as all code that cares about the data is working with the NodeTreeModel, NodeModel, etc. the actual implementation of getData() is irrelevant. I believe this provides a level of abstraction that will make the component easier to extend and maintain.

The ux for this component is fairly straightforward and simple. Rounded corners and soft shapes are combined with white, black, gray, and blue to create a minimal, calming effect. Smooth animation attempts to accomplish the same calming simplicity through directional motion and fades. Finally, all nodes react to mouse hover. The nodes with no children have a subtle sinking effect whereas the nodes with children raise up when hovered. 

###Changes and improvements
I wanted to roll my own styles for this component to avoid large dependency packages if this component were to be used as a library. All of the pieces are there. However, I neglected to use flexbox or some other responsive paradigm so at smaller screen sizes the look is not ideal.

On close, the nodes do not animate. This was a conscious choice to avoid the UI feeling sluggish. Feedback is needed to determine if this is the right choice. If the decision to animate on close was made, child nodes would need some mechanism to know if their parent node was open or not. Additionally instead of removing child nodes from the DOM, they would most likely need to be hidden and have their height animated to zero with no overflow to give the illusion of disappearing.

Finally, I began setting up tests for the component but ran out of time with family obligations and travel. The skeleton is there but with no actual tests.

