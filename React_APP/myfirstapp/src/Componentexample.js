import React from "react";

const Componentexample = () => {
  return (
    <article>
      <Moviecomponent  />

      <Moviecomponent />

      <Moviecomponent />
      <Moviecomponent />
      <Moviecomponent />
      <Moviecomponent />
      <Moviecomponent />
      <Moviecomponent />
    </article>
  );
};

const Moviecomponent = () => {
  return (
    <article>
      <Imagecomponent />
    
    </article>
  );
};

const Imagecomponent = () => {
  return (
    <section>
      <h1>component example</h1>

      <img
        src="https://occ-0-851-853.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeAN3ob4F_dAOI-MG-PTusehg1W88Nwr0SOmrwEVQZ1rcLHAU86IOQmzDZvLB3vFM8-O1Kso895QZ-b1FFSfA-DCMrmFGDv-BUUIRy4vpiLs0eQyGHEqwm2CRcmeNYk8Mftr.jpg?r=fa2"
        alt="Boss Baby"
      />
      <Title/>
    </section>
  );
};

const Title = () => {
  return <h3>Boss Baby</h3>
};














export default Componentexample;
