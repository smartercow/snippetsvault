import { Button, Text } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-20">
        <Text h4 b>
          SNIPV
        </Text>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4">
          <Button light size="lg" color="primary">
            <Text b color="black">
              Om SNIPV
            </Text>
          </Button>
          <Button light size="lg" color="gradient" disabled>
            Rapporter fejl
          </Button>
          <Button light size="lg" color="gradient" disabled>
            Forslag
          </Button>
          <Button light size="lg" color="gradient" disabled>
            FAQ
          </Button>
          <Button light size="lg" color="gradient" disabled>
            Hjælp
          </Button>
        </div>
        <div className="w-full">
          <div>
            <Text size="lg">
              <Text size="lg" b>
                SNIPV
              </Text>{" "}
              (Snippets Vault) er en bankboks for genanvendelig kildekode,
              maskinkode eller tekst.
            </Text>
          </div>
          {/* <div>context</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
