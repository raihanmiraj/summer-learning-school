import React from 'react';

const PricingAdmission = () => {
    return (
        <>
           <main className="container mx-auto px-4 py-8 leading-normal">
  <h1 className="mb-4 text-center text-4xl md:text-5xl font-light text-grey-darkest">
    Plans for all workflows
  </h1>
  <p className="max-w-lg mx-auto mb-6 font-light text-center text-grey-dark text-xl">
    GitHub is free to use for public and open source projects.{" "}
    <br className="hidden md:inline" />
    Work together across unlimited private repositories with a paid plan.
  </p>
  <div className="flex flex-wrap -mx-2 mb-8">
    <div className="flex w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div className="border rounded shadow text-sm flex flex-grow flex-col">
        <h2 className="p-2 text-center text-indigo text-xl border-b">
          Developer
        </h2>
        <div className="px-6 py-8 border-b text-center flex-grow">
          <p className="mb-4">
            <span className="block font-bold text-4xl">$7</span>{" "}
            <span className="text-grey-dark">per month</span>
          </p>
          <strong>Includes:</strong>
          <ul className="list-reset mb-4">
            <li>Personal account</li>
            <li>Unlimited public repositories</li>
            <li>Unlimited private repositories</li>
            <li>Unlimited collaborators</li>
          </ul>
          <p>
            Free for students as part of the{" "}
            <a href="#" className="no-underline text-indigo hover:underline">
              Student Developer Pack
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          className="p-3 text-indigo text-lg font-bold hover:text-white hover:bg-blue"
        >
          Sign up
        </button>
      </div>
    </div>
    <div className="flex w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div className="border rounded shadow text-sm flex flex-grow flex-col">
        <h2 className="p-2 text-center text-green text-xl border-b">Team</h2>
        <div className="px-6 py-8 border-b text-center flex-grow">
          <p className="mb-4">
            <span className="block font-bold text-4xl">$9</span>{" "}
            <span className="text-grey-dark">per user / month</span>
          </p>
          <strong>Includes:</strong>
          <ul className="list-reset mb-4">
            <li>Organization account</li>
            <li>Unlimited public repositories</li>
            <li>Unlimited private repositories</li>
            <li>Team and user permissions</li>
          </ul>
          <p>Starting at $25 / month which includes your first 5 users.</p>
        </div>
        <button
          type="button"
          className="p-3 text-green text-lg font-bold hover:text-white hover:bg-green"
        >
          Sign up
        </button>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-2 mb-4 flex">
      <div className="w-full border rounded shadow text-sm flex flex-col justify-center">
        <h2 className="p-2 text-center text-purple text-xl border-b">
          Business
        </h2>
        <div className="flex flex-grow">
          <div className="flex flex-col flex-1 border-r">
            <div className="px-6 py-8 border-b text-center flex-grow">
              <p className="mb-4">
                <span className="block font-bold text-4xl">$21</span>{" "}
                <span className="text-grey-dark">per user / month</span>
              </p>
              <strong>
                <a
                  href="#"
                  className="text-purple no-underline hover:underline"
                >
                  Hosted on GitHub.com
                </a>
              </strong>
              <ul className="list-reset mb-4">
                <li>Organization account</li>
                <li>SAML single sign-on</li>
                <li>Access provisioning</li>
                <li>24/5 support with 8-hour response time</li>
                <li>99.95% Uptime SLA</li>
              </ul>
            </div>
            <button
              type="button"
              className="p-3 text-purple text-lg font-bold hover:text-white hover:bg-indigo"
            >
              Get started
            </button>
          </div>
          <div className="flex flex-col flex-1">
            <div className="px-6 py-8 border-b text-center flex-grow">
              <p className="mb-4">
                <span className="block font-bold text-4xl">
                  $21<sup>*</sup>
                </span>{" "}
                <span className="text-grey-dark">per user / month</span>
              </p>
              <strong>
                <a
                  href="#"
                  className="text-purple no-underline hover:underline"
                >
                  GitHub Enterprise
                </a>
              </strong>
              <ul className="list-reset mb-4">
                <li>Multiple organizations</li>
                <li>SAML, LDAP, and CAS</li>
                <li>Access provisioning</li>
                <li>24/7 support for urgent issues</li>
                <li>Advanced auditing</li>
                <li>Host on your servers, AWS, Azure, or GCP</li>
              </ul>
            </div>
            <button
              type="button"
              className="p-3 text-purple text-lg font-bold hover:text-white hover:bg-indigo"
            >
              Start a free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
 
        </>
    );
}

export default PricingAdmission;
