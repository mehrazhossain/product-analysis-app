import React from 'react';

const Blogs = () => {
  return (
    <section className="container w-1/2 h-auto mx-auto py-4 px-4">
      <div>
        <h1 className="text-2xl font-semibold pt-10">
          What is Context API and What is the purpose of React Context API?
        </h1>
        <p className="text-lg text-justify">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
          <br />
          <br />
          In a typical React application, data is passed top-down (parent to
          child) via props, but such usage can be cumbersome for certain types
          of props (e.g. locale preference, UI theme) that are required by many
          components within an application. Context provides a way to share
          values like these between components without having to explicitly pass
          a prop through every level of the tree.
          <br />
          <br />
          The Context API is a React structure that enables you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold pt-10">
          What is a semantic tag?
        </h1>
        <p className="text-lg text-justify">
          Semantic HTML elements are those that clearly describe their meaning
          in a human- and machine-readable way. Elements such as header , footer
          and article are all considered semantic because they accurately
          describe the purpose of the element and the type of content that is
          inside them
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold pt-10">
          Inline vs Inline-Block Elements
        </h1>
        <p className="text-lg text-justify">
          An inline element has no line break before or after it, and it
          tolerates HTML elements next to it. A block element has some
          whitespace above and below it and does not tolerate any HTML elements
          next to it.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
