import React from "react";
import policyStyles from "@/pages/components/policy/policy.module.scss";

const BoatBenefit = () => {
  return (
    <section className={`${policyStyles.policy} pb-10`}>
      <div className="container mx-auto">
        <div className="flex-col flex pl-4 pr-4">
          <h2 className="mt-4">Evening Ganga Aarti from a Boat</h2>
          <p>
           The most poignant experience is a view of the Ganga Aarti at Varanasi from the boat. The priests conduct a massive ritual daily at Dashashwamedh Ghat, using conch shells, chanting, and fire lamps. It is best seen from the river, well off from the crowd on the ghats, but close enough to feel the vibe. The glint of fire lamps over water is one moment one would not like to miss.
          </p>
          <p className="mt-2">Practical Guidelines for Boat Tour</p>
          <ol>
            <li className="mt-1">●	<strong>Optimal Time</strong>: Early morning for tranquillity and photography; sunset for Ganga Aarti.</li>
            <li className="mt-1">●	<strong>Schedule Time</strong>: Usually 45 minutes to 1.5 hours.</li>
            <li className="mt-1">●	<strong>Dress Code</strong>: Loose wear is fine. Carry a shawl if going for winter mornings.</li>
            <li className="mt-1">●	<strong>Safety</strong>: Go for licensed boats and life jackets if available.</li>
          </ol>
          <h2 className="mt-4">Contact Us for the Boat Prices in Varanasi</h2>
          <p>Planning your holiday? Let your holiday to Sweet Trip be with the finest boat ride in Varanasi. We guarantee timely service, comfort, and an experience to cherish.</p>
          <p className="mt-3">Call Now: <a href="tel: +91 7488736844"> +91 7488736844</a></p>
          <p>Visit: <a href="https://www.sweettrip.in">www.sweettrip.in</a></p>
          <p>Email: <a href="mailto:info@sweettrip.in">info@sweettrip.in</a></p>
        </div>
      </div>
    </section>
  );
};
export default BoatBenefit;
