import { Avatar, Collapse, Grid, Text } from "@nextui-org/react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

const Feed = ({ user, snippets, tags }) => {
  console.log("Snippets", snippets);
  return (
    <div>
      <div className="w-full">

            <Collapse.Group shadow>
              {snippets?.map((item) => (
                <Collapse
                  key={item.uid}
                  title={<Text h4>{item.title}</Text>}
                  subtitle={item.description}
                  contentLeft={
                    <Avatar
                      size="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      color="secondary"
                      bordered
                      squared
                    />
                  }
                >
                  <div>
                    <SyntaxHighlighter language="javascript" style={oneLight}>
                      {item.code}
                    </SyntaxHighlighter>
                  </div>
                </Collapse>
              ))}
            </Collapse.Group>
      </div>
      {/*       {snippets?.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <div>{item.tags}</div>
          <div>
            <SyntaxHighlighter language="javascript" style={oneLight}>
              {item.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Feed;
