import React from "react";
import { Button } from "../styles/Button";
import { EarlyContainer } from "../styles/EarlyAccesStyles";

function EarlyAccess() {
  return (
    <EarlyContainer>
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input type="text" placeholder="Email address" />
        <Button>Get Started For Free</Button>
      </form>
    </EarlyContainer>
  );
}

export default EarlyAccess;
